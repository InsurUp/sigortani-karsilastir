"use client";

import {
  Box,
  Button,
  Typography,
  Paper,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  CardActions,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState, useEffect } from 'react';
import { useAuthStore } from '../../../../store/useAuthStore';
import { fetchWithAuth } from '@/services/fetchWithAuth';
import { API_ENDPOINTS } from '@/config/api';
import { CheckCircle, Shield, Zap, Heart, AlertTriangle, XCircle, Clock } from 'lucide-react';

// DataLayer helper functions
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const pushToDataLayer = (eventData: any) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

interface RequestStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const RequestStep = ({ onNext, onBack, isFirstStep, isLastStep }: RequestStepProps) => {
  const { customerId, accessToken, user, logout } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestCreated, setRequestCreated] = useState(false);
  const [requestResult, setRequestResult] = useState<'idle' | 'success' | 'error' | 'existing'>('idle');
  const [showBackDialog, setShowBackDialog] = useState(false);

  const handleBackToPersonalInfo = () => {
    setShowBackDialog(true);
  };

  const handleConfirmBack = () => {
    logout();
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    // localStorage'dan gelen durumları kontrol et
    const errorFromStorage = localStorage.getItem('isyeriRequestError');
    const successFromStorage = localStorage.getItem('isyeriRequestSuccess');

    if (successFromStorage) {
      setRequestResult('success');
      setRequestCreated(true);
      localStorage.removeItem('isyeriRequestSuccess');
    } else if (errorFromStorage) {
      setError(errorFromStorage);
      
      // Mevcut talep hatasını özel olarak işle
      if (errorFromStorage.includes('zaten açık bir') || errorFromStorage.includes('bulunmaktadır')) {
        setRequestResult('existing');
      } else {
        setRequestResult('error');
      }
      
      localStorage.removeItem('isyeriRequestError');
    }
  }, []);

  const handleCreateRequest = async () => {
    if (!customerId) {
      setError('Müşteri bilgisi bulunamadı. Lütfen önceki adımları kontrol edin.');
      setRequestResult('error');
      return;
    }

    if (!accessToken) {
      setError('Oturum bilgisi bulunamadı. Lütfen sayfayı yenileyin.');
      setRequestResult('error');
      return;
    }

    setIsLoading(true);
    setError(null);
    setRequestResult('idle');
    setRequestCreated(false);

    try {
      const requestPayload = {
        customerId: customerId,
        customerAssetReference: null,
        productBranch: "ISYERI_YANGIN",
        channel: "OFFLINE_PROPOSAL_FORM"
      };


      const response = await fetchWithAuth(API_ENDPOINTS.CASES_NEW_SALE_OPPORTUNITY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(requestPayload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        
        // API'den gelen hata mesajını parse etmeye çalış
        let errorMessage = `Talep oluşturulamadı: ${response.status} ${response.statusText}`;
        
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
            const apiError = errorData.errors[0];
            
            // Özel hata mesajlarını kontrol et
            if (apiError.includes('zaten açık bir yeni satış fırsatı talebi bulunmaktadır')) {
              setRequestResult('existing');
              setIsLoading(false);
              return; // Don't throw error for existing request
            } else {
              errorMessage = apiError;
              setRequestResult('error');
            }
          }
        } catch (parseError) {
          // JSON parse hatası durumunda default mesaj kullan
          setRequestResult('error');
        }
        
        if (response.status === 401) {
          errorMessage = 'Oturum süreniz dolmuş. Lütfen sayfayı yenileyin ve tekrar deneyin.';
          setRequestResult('error');
        } else if (response.status === 400 && !errorMessage.includes('zaten açık')) {
          errorMessage = 'Geçersiz talep bilgileri. Lütfen bilgilerinizi kontrol edin.';
          setRequestResult('error');
        }
        
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      
      setRequestCreated(true);
      setRequestResult('success');
      
      // 3 saniye sonra otomatik olarak devam et
      setTimeout(() => {
        onNext();
      }, 3000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Talep oluşturulurken bir hata oluştu';
      setError(errorMessage);
      setRequestResult('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Başarılı talep durumu
  if (requestResult === 'success' || requestCreated) {
    return (
      <Box sx={{ textAlign: 'center', py: 4, paddingBottom: 10 }}>
        <CheckCircle size={64} color="#4caf50" style={{ marginBottom: 16, marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        <Typography variant="h5" gutterBottom color="success.main" sx={{ fontWeight: 'bold' }}>
          Talebiniz Başarıyla Oluşturuldu!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          İşyeri Sigortası teklif talebiniz sisteme kaydedildi.<br />
          En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.
        </Typography>
        <Button
          variant="contained"
          onClick={() => window.location.href = '/'}
          sx={{
            minWidth: 200,
            maxWidth: 200,
            mx: 'auto',
            height: 40,
            marginTop: 2,
            borderRadius: 2,
            textTransform: 'none',
          }}
        >
          Anasayfaya Dön
        </Button>
      </Box>
    );
  }

  // Mevcut talep var durumu
  if (requestResult === 'existing') {
    return (
      <Box sx={{ textAlign: 'center', py: 4, paddingBottom: 10 }}>
        <Clock size={64} color="#ffa500" style={{ marginBottom: 16, marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#ffa500' }}>
          Talebiniz İnceleniyor
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          İşyeri Sigortası için mevcut bir talebiniz bulunuyor.<br />
          Lütfen talebin sonuçlandırılmasını bekleyin.
        </Typography>
        <Button
          variant="contained"
          onClick={() => window.location.href = '/'}
          sx={{
            minWidth: 200,
            maxWidth: 200,
            mx: 'auto',
            height: 40,
            marginTop: 2,
            borderRadius: 2,
            textTransform: 'none',
            backgroundColor: '#ffa500',
            '&:hover': {
              backgroundColor: '#ffa500',
            }
          }}
        >
          Anasayfaya Dön
        </Button>
      </Box>
    );
  }

  // Hata durumu
  if (requestResult === 'error' && error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4, paddingBottom: 10 }}>
        <XCircle size={64} color="#f44336" style={{ marginBottom: 16, marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        <Typography variant="h5" gutterBottom color="error" sx={{ fontWeight: 'bold' }}>
          Talep Oluşturulamadı
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
          {error}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                     <Button
             variant="outlined"
             onClick={handleCreateRequest}
             disabled={isLoading}
             sx={{
               minWidth: 150,
               height: 40,
               borderRadius: 2,
               textTransform: 'none',
             }}
           >
             {isLoading ? 'Tekrar Deniyor...' : 'Tekrar Dene'}
           </Button>
          <Button
            variant="contained"
            onClick={() => window.location.href = '/'}
            sx={{
              minWidth: 150,
              height: 40,
              borderRadius: 2,
              textTransform: 'none',
            }}
          >
            Anasayfaya Dön
          </Button>
        </Box>
      </Box>
    );
  }

  // Normal talep oluşturma ekranı (önceden login olmuş kullanıcılar için)
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        İşyeri Sigortası Teklif Talebi
      </Typography>

      {user?.name && (
        <Box sx={{ mb: 3, p: 2, borderRadius: 2, background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)', border: '1px solid', borderColor: 'primary.light', display: 'flex', alignItems: 'center', gap: 2, maxWidth: 600, mx: 'auto' }}>
          <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <PersonOutlineIcon sx={{ color: 'white', fontSize: 24 }} />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>Bu işlem aşağıdaki sigortalı adına yapılmaktadır</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }} noWrap>{user.name}</Typography>
          </Box>
        </Box>
      )}

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
        Talebinizi oluşturduktan sonra uzman ekibimiz sizinle iletişime geçerek 
        ihtiyaçlarınıza en uygun teklifi hazırlayacaktır.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 600, mx: 'auto' }}>
        <Button variant="outlined" onClick={handleBackToPersonalInfo} sx={{ minWidth: 100, height: 40, borderRadius: 2, textTransform: 'none' }}>
          Geri
        </Button>
        <Button variant="contained" onClick={handleCreateRequest} disabled={isLoading} sx={{ minWidth: 200, height: 40, borderRadius: 2, textTransform: 'none' }}>
          {isLoading ? 'Talep Oluşturuluyor...' : 'Talep Oluştur'}
        </Button>
      </Box>

      <Dialog open={showBackDialog} onClose={() => setShowBackDialog(false)} PaperProps={{ sx: { borderRadius: 3, p: 1 } }}>
        <DialogTitle sx={{ fontWeight: 600 }}>Çıkış Onayı</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Şu an <strong>{user?.name || 'kullanıcı'}</strong> kullanıcısından çıkış yapıyorsunuz ve ilk adıma yönlendiriliyorsunuz.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setShowBackDialog(false)} variant="outlined" sx={{ textTransform: 'none', borderRadius: 2 }}>İptal</Button>
          <Button onClick={handleConfirmBack} variant="contained" color="error" sx={{ textTransform: 'none', borderRadius: 2 }}>Çıkış Yap</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RequestStep; 