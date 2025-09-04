"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Switch,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useAuthStore } from '../../../store/useAuthStore';
import { fetchWithAuth } from '../../../services/fetchWithAuth';
import { API_BASE_URL } from '../../../config/api';

interface PremiumData {
  installmentNumber: number;
  netPremium: number;
  grossPremium: number;
  commission: number;
  exchangeRate: number;
  currency: string;
  insuranceCompanyProposalNumber: string;
  formattedNetPremium?: string;
  formattedGrossPremium?: string;
}

interface InsuranceCompany {
  id: number;
  name: string;
  proposalProductId: string;
}

interface SelectedQuoteData {
  id: string;
  company?: string;
  coverage?: number;
  features?: string[];
  premiums: PremiumData[];
  selectedInstallmentNumber: number;
  insuranceCompanyId?: number;
  insuranceCompany?: InsuranceCompany;
  productId: string;
  proposalProductId: string;
  proposalId: string;
}

interface UnifiedPurchaseStepProps {
  onNext: () => void;
  proposalId?: string;
  productId?: string;
  branch: string; // 'kasko', 'dask', 'trafik', 'konut', 'tss', 'imm'
  localStorageKeys: {
    selectedQuote: string;
    proposalId: string;
  };
}

const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .required('Kart numarası gereklidir')
    .matches(/^\d{16}$/, 'Geçerli bir kart numarası giriniz'),
  cardHolder: yup.string().required('Kart sahibi adı gereklidir'),
  cardHolderIdentityNumber: yup
    .string()
    .when('cardHolderSameAsInsured', {
      is: false,
      then: (schema) => schema.required('Kart sahibi TCKN gereklidir').matches(/^\d{11}$/, 'Geçerli bir TCKN giriniz'),
      otherwise: (schema) => schema.optional(),
    }),
  expiryDate: yup
    .string()
    .required('Son kullanma tarihi gereklidir')
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'GG/YY formatında giriniz'),
  cvv: yup
    .string()
    .required('CVV gereklidir')
    .matches(/^\d{3,4}$/, 'Geçerli bir CVV giriniz'),
});

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '200ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    backgroundColor: '#D1D5DB',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 200,
    }),
  },
}));

export default function UnifiedPurchaseStep({ 
  onNext, 
  proposalId: propProposalId, 
  productId: propProductId, 
  branch,
  localStorageKeys 
}: UnifiedPurchaseStepProps) {
  const token = useAuthStore((state) => state.accessToken);
  const [isProcessing, setIsProcessing] = useState(false);
  const [offerDetailsAccepted, setOfferDetailsAccepted] = useState(false);
  const [preInfoFormAccepted, setPreInfoFormAccepted] = useState(false);
  const [selectedQuoteData, setSelectedQuoteData] = useState<SelectedQuoteData | null>(null);
  const [currentPremium, setCurrentPremium] = useState<PremiumData | null | undefined>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSendingPreInfoForm, setIsSendingPreInfoForm] = useState(false);
  const [cardHolderSameAsInsured, setCardHolderSameAsInsured] = useState(true);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    // LocalStorage'dan selectedQuoteForPurchase anahtarını kullan
    const storedQuote = localStorage.getItem('selectedQuoteForPurchase');
    const selectedInstallment = localStorage.getItem('selectedInstallmentForPurchase');
    
    if (storedQuote) {
      try {
        const parsedQuote = JSON.parse(storedQuote) as SelectedQuoteData;
        
        // Eğer selectedInstallmentForPurchase varsa, onu kullan
        if (selectedInstallment) {
          parsedQuote.selectedInstallmentNumber = parseInt(selectedInstallment, 10);
        }
        
        console.log(`Seçilen ${branch} teklifi:`, parsedQuote);
        setSelectedQuoteData(parsedQuote);
      } catch (error) {
        console.error('selectedQuoteForPurchase parse edilemedi:', error);
        setErrorMessage('Seçili teklif bilgisi alınamadı. Lütfen tekrar deneyin.');
      }
    } else {
      console.warn('localStorage\'da selectedQuoteForPurchase bulunamadı.');
      setErrorMessage('Seçili teklif bulunamadı. Lütfen önceki sayfaya dönüp tekrar deneyin.');
    }
  }, [branch]);

  useEffect(() => {
    if (selectedQuoteData) {
      const premiumDetails = getCurrentPremiumDetails();
      setCurrentPremium(premiumDetails);
    }
  }, [selectedQuoteData]);

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      cardHolder: '',
      cardHolderIdentityNumber: '',
      cardHolderSameAsInsured: true,
      expiryDate: '',
      cvv: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      if (offerDetailsAccepted && preInfoFormAccepted) {
        handlePayment();
      }
    },
  });

  const getCurrentPremiumDetails = (): PremiumData | null | undefined => {
    if (!selectedQuoteData) return null;
    return selectedQuoteData.premiums.find(
      (p) => p.installmentNumber === selectedQuoteData.selectedInstallmentNumber
    );
  };

  // Kartsız 3D kontrolü - Sadece Türkiye Sigorta, HDI ve ID 96 için kartsız (ID 43 Doğa Sigorta için kartlı)
  const isCardlessRedirect = (
    selectedQuoteData?.insuranceCompanyId === 96 ||
    selectedQuoteData?.insuranceCompanyId === 54 ||
    selectedQuoteData?.company?.toLowerCase().includes('türkiye') ||
    selectedQuoteData?.company?.toLowerCase().includes('hdi')
  );
  
  // Debug için console log
  console.log('DEBUG - Company:', selectedQuoteData?.company);
  console.log('DEBUG - Company ID:', selectedQuoteData?.insuranceCompanyId);
  console.log('DEBUG - isCardlessRedirect:', isCardlessRedirect);
  const showCardForm = !isCardlessRedirect;

  const renderPaymentForm = () => {
    if (isCardlessRedirect) {
      return (
        <Box>
          <Typography variant="h6" gutterBottom>
            Sigorta Şirketi Ödemesi
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Bu aşamada kart bilgisi girmeyeceksiniz. 'GÜVENLİ ÖDEMEYE GİT' butonuna tıkladığınızda sigorta şirketinin ödeme sayfasına yönlendirileceksiniz.
          </Typography>
        </Box>
      );
    }

    return (
      <Box component="form" onSubmit={formik.handleSubmit} noValidate>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Kredi Kartı Bilgileri
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Güvenli ödeme için kredi kartı bilgilerinizi girin. Ödeme 3D güvenli altyapı ile gerçekleştirilecektir.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>Kart sahibi sigortalı ile aynı</Typography>
            <IOSSwitch
              checked={cardHolderSameAsInsured}
              onChange={(e: any) => {
                setCardHolderSameAsInsured(e.target.checked);
                formik.setFieldValue('cardHolderSameAsInsured', e.target.checked);
                if (e.target.checked) {
                  formik.setFieldValue('cardHolderIdentityNumber', '');
                }
              }}
              color="primary"
            />
            <Typography variant="body2" sx={{ fontWeight: 400 }} color="text.secondary">
              {cardHolderSameAsInsured ? 'Evet' : 'Hayır'}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {!cardHolderSameAsInsured && (
            <TextField
              fullWidth
              name="cardHolderIdentityNumber"
              label="Kart Sahibi TCKN"
              value={formik.values.cardHolderIdentityNumber}
              onChange={(e: any) => {
                const onlyDigits = e.target.value.replace(/\D/g, '');
                formik.setFieldValue('cardHolderIdentityNumber', onlyDigits);
              }}
              error={formik.touched.cardHolderIdentityNumber && Boolean(formik.errors.cardHolderIdentityNumber)}
              helperText={formik.touched.cardHolderIdentityNumber && formik.errors.cardHolderIdentityNumber}
              inputProps={{ maxLength: 11 }}
              sx={{ bgcolor: 'white', borderRadius: '6px' }}
            />
          )}
          
          <TextField
            fullWidth
            name="cardNumber"
            label="Kart Numarası"
            value={formik.values.cardNumber}
            onChange={(e: any) => {
              const onlyDigits = e.target.value.replace(/\D/g, '');
              formik.setFieldValue('cardNumber', onlyDigits);
            }}
            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            inputProps={{ maxLength: 16 }}
            sx={{ bgcolor: 'white', borderRadius: '6px' }}
          />
          
          <TextField
            fullWidth
            name="cardHolder"
            label="Ad Soyad"
            value={formik.values.cardHolder.toUpperCase()}
            onChange={(e: any) => {
              const onlyLetters = e.target.value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '');
              formik.setFieldValue('cardHolder', onlyLetters);
            }}
            error={formik.touched.cardHolder && Boolean(formik.errors.cardHolder)}
            helperText={formik.touched.cardHolder && formik.errors.cardHolder}
            sx={{ bgcolor: 'white', borderRadius: '6px' }}
          />

          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <TextField
              fullWidth
              name="expiryDate"
              label="Son Kullanma Tarihi"
              placeholder="AA/YY"
              value={formik.values.expiryDate}
              onChange={(e: any) => {
                const value = e.target.value.replace(/\D/g, '');
                let formattedValue = value;
                if (value.length >= 2) {
                  formattedValue = value.slice(0, 2) + '/' + value.slice(2, 4);
                }
                formik.setFieldValue('expiryDate', formattedValue);
              }}
              error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
              helperText={formik.touched.expiryDate && formik.errors.expiryDate}
              inputProps={{ maxLength: 5 }}
              sx={{ bgcolor: 'white', borderRadius: '6px' }}
            />
            <TextField
              fullWidth
              name="cvv"
              label="CVV"
              type="password"
              value={formik.values.cvv}
              onChange={(e: any) => {
                const onlyDigits = e.target.value.replace(/\D/g, '');
                formik.setFieldValue('cvv', onlyDigits);
              }}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
              inputProps={{ maxLength: 4 }}
              sx={{ bgcolor: 'white', borderRadius: '6px' }}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  const renderOrderSummary = () => (
    <Card 
      variant="outlined" 
      sx={{ 
        backgroundColor: '#F4F6FA',
        borderRadius: '6px',
        height: '100%',
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Sipariş Özeti
        </Typography>
        {selectedQuoteData && currentPremium ? (
          <>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle1" color="primary">
                {selectedQuoteData.company || 'Bilinmeyen Şirket'}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {branch.charAt(0).toUpperCase() + branch.slice(1)} Sigortası (
                {currentPremium.installmentNumber === 1
                  ? 'Peşin'
                  : `${currentPremium.installmentNumber} Taksit`}
                )
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" color="primary">
                Toplam:{' '}
                {currentPremium.formattedGrossPremium ??
                  currentPremium.grossPremium.toLocaleString('tr-TR')}{' '}
                ₺
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {currentPremium.installmentNumber === 1
                  ? 'Yıllık Prim (Peşin)'
                  : `Taksitli Toplam (${currentPremium.installmentNumber} Taksit)`}
              </Typography>
            </Box>
          </>
        ) : (
          <Box sx={{ my: 2, textAlign: 'center' }}>
            {!selectedQuoteData && <CircularProgress size={20} sx={{ mr: 1 }} />}
            <Typography variant="body2" color="text.secondary">
              {selectedQuoteData ? 'Prim bilgisi yükleniyor...' : 'Teklif detayları yükleniyor...'}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );

  const handlePayment = async () => {
    try {
      setErrorMessage(null);
      setIsProcessing(true);
      console.log(`Selected Quote Data (${branch}):`, selectedQuoteData);
      console.log('Token:', token);
      console.log(`${branch} DEBUG - insuranceCompanyId:`, selectedQuoteData?.insuranceCompanyId);
      console.log(`${branch} DEBUG - isCardlessRedirect:`, isCardlessRedirect);
      console.log(`${branch} DEBUG - Payment Mode:`, isCardlessRedirect ? 'insurance-company-redirect' : '3d-secure');

      if (!token) {
        setErrorMessage('Oturum bilgisi bulunamadı. Lütfen tekrar giriş yapın.');
        setIsProcessing(false);
        return;
      }

      if (!selectedQuoteData?.id) {
        setErrorMessage('Teklif bilgisi bulunamadı. Lütfen tekrar deneyin.');
        setIsProcessing(false);
        return;
      }

      // ProposalId ve ProductId'yi localStorage'dan al
      const proposalId = propProposalId || localStorage.getItem('currentProposalId');
      const productId = propProductId || localStorage.getItem('currentProductId') || selectedQuoteData.id;

      if (!proposalId) {
        setErrorMessage('Teklif ID bulunamadı. Lütfen tekrar deneyin.');
        setIsProcessing(false);
        return;
      }

      if (!isCardlessRedirect) {
        // 3D Secure ödemesi (kart bilgisi gerekli)
        const [expiryMonth, expiryYear] = formik.values.expiryDate.split('/');
        const paymentData: any = {
          $type: "3d-secure",
          card: {
            number: formik.values.cardNumber,
            cvc: formik.values.cvv,
            expiryMonth: expiryMonth.padStart(2, '0'),
            expiryYear: expiryYear,
            holderName: formik.values.cardHolder,
          },
          proposalId: proposalId,
          proposalProductId: productId,
          installmentNumber: selectedQuoteData.selectedInstallmentNumber,
          callbackUrl: `${window.location.origin}/odeme-sonuc?type=${branch}`,
        };

        // Eğer kart sahibi sigortalı ile aynı değilse ve TCKN girilmişse, identityNumber'ı ekle
        if (!cardHolderSameAsInsured && formik.values.cardHolderIdentityNumber) {
          paymentData.identityNumber = formik.values.cardHolderIdentityNumber;
        }

        const response = await fetchWithAuth(
          `${API_BASE_URL}/api/proposals/${proposalId}/products/${productId}/purchase/async`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(paymentData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.message || '3D Secure ödeme başlatılamadı');
        }

        const data = await response.json();
        console.log('3D Secure Payment Response:', data);

        if (!data.redirectUrl) {
          throw new Error("3D Secure yönlendirme URL'si bulunamadı");
        }

        // URL'i state'e kaydet ve kullanıcıya göster
        setRedirectUrl(data.redirectUrl);
        
        // 3 saniye sonra otomatik yönlendir
        setTimeout(() => {
          window.location.href = data.redirectUrl;
        }, 3000);
      } else {
        // Insurance company redirect ödemesi (diğer şirketler) - kart bilgisi yok
        const response = await fetchWithAuth(
          `${API_BASE_URL}/api/proposals/${proposalId}/products/${productId}/purchase/async`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              $type: "insurance-company-redirect",
              proposalId: proposalId,
              proposalProductId: productId,
              installmentNumber: selectedQuoteData.selectedInstallmentNumber,
              callbackUrl: `${window.location.origin}/odeme-sonuc?type=${branch}`,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.message || 'Ödeme başlatılamadı');
        }

        const data = await response.json();
        console.log('Insurance Redirect Response:', data);
        
        if (!data.redirectUrl) {
          throw new Error("Yönlendirme URL'si bulunamadı");
        }

        // URL'i state'e kaydet ve kullanıcıya göster
        setRedirectUrl(data.redirectUrl);
        
        // 3 saniye sonra otomatik yönlendir
        setTimeout(() => {
          window.location.href = data.redirectUrl;
        }, 3000);
      }
    } catch (error) {
      console.error('Ödeme hatası:', error);
      setErrorMessage('Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      setIsProcessing(false);
    }
  };

  const handleViewPreInfoForm = async () => {
          try {
        setIsSendingPreInfoForm(true);
        
        // ProposalId ve ProductId'yi localStorage'dan al
        const proposalId = propProposalId || localStorage.getItem('currentProposalId');
        const productId = propProductId || localStorage.getItem('currentProductId') || selectedQuoteData?.id;

      if (!proposalId || !productId) {
        throw new Error('Teklif bilgileri bulunamadı');
      }

      const response = await fetchWithAuth(
        `${API_BASE_URL}/api/proposals/${proposalId}/products/${productId}/information-form-document`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0] || 'Ön bilgilendirme formu görüntülenirken bir hata oluştu');
      }

      const data = await response.json();
      if (data.url) {
        window.open(data.url, '_blank');
        setPreInfoFormAccepted(true);
      } else {
        throw new Error("Ön bilgilendirme formu URL'si bulunamadı");
      }
    } catch (error) {
      console.error('Ön bilgilendirme formu görüntüleme hatası:', error);
      setErrorMessage('Ön bilgilendirme formu görüntülenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSendingPreInfoForm(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Ödeme Bilgileri
      </Typography>

      {errorMessage && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMessage}
        </Alert>
      )}

      {redirectUrl && (
        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {isCardlessRedirect ? 'Sigorta Şirketi Ödemesi' : '3D Secure Ödeme'}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {isCardlessRedirect 
              ? 'Sigorta şirketinin ödeme sayfasına yönlendiriliyorsunuz...'
              : '3D Secure URL alındı. 3 saniye içinde bankanızın güvenli ödeme sayfasına yönlendirileceksiniz.'
            }
          </Typography>
          <Typography variant="body2" sx={{ 
            fontFamily: 'monospace', 
            fontSize: '0.875rem',
            backgroundColor: '#f5f5f5',
            padding: '8px',
            borderRadius: '4px',
            mt: 1,
            wordBreak: 'break-all'
          }}>
            {redirectUrl}
          </Typography>
          <Button 
            variant="contained" 
            size="small" 
            sx={{ mt: 2 }}
            onClick={() => window.location.href = redirectUrl}
          >
            Hemen Git
          </Button>
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Paper 
            elevation={0} 
            variant="outlined" 
            sx={{ 
              p: 4,
              borderRadius: '6px',
              backgroundColor: '#F4F6FA',
            }}
          >
            {renderPaymentForm()}
            
            <Box sx={{ mt: 4 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={offerDetailsAccepted}
                    onChange={(e) => setOfferDetailsAccepted(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2">
                    Teklif detaylarını okudum, kabul ediyorum.
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={preInfoFormAccepted}
                    onChange={(e) => setPreInfoFormAccepted(e.target.checked)}
                    color="primary"
                    disabled={isSendingPreInfoForm}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2">
                      <Link
                        href="#"
                        target="_blank"
                        sx={{ color: '#0057FF' }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleViewPreInfoForm();
                        }}
                      >
                        Ön Bilgilendirme Formu
                      </Link>
                      'nu okudum, kabul ediyorum.
                    </Typography>
                    {isSendingPreInfoForm && (
                      <CircularProgress size={20} sx={{ ml: 1 }} />
                    )}
                  </Box>
                }
              />
            </Box>
          </Paper>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '350px' }, flexShrink: 0 }}>
          {renderOrderSummary()}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          onClick={handlePayment}
          disabled={
            !offerDetailsAccepted ||
            !preInfoFormAccepted ||
            isProcessing ||
            (showCardForm && !formik.isValid) ||
            !selectedQuoteData ||
            !currentPremium
          }
          fullWidth
          sx={{
            height: 56,
            borderRadius: '6px',
            '&:disabled': {
              backgroundColor: '#E0E0E0',
            },
          }}
        >
          {isProcessing ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'GÜVENLİ ÖDEMEYE GİT'
          )}
        </Button>
      </Box>
    </Box>
  );
}
