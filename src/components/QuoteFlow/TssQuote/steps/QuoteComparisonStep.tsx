"use client";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuoteComparisonModal, { QuoteForComparison } from '@/components/common/QuoteComparisonModal';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FileText, Download, ShieldCheck, AlertCircle, Shield } from 'lucide-react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Alert,
  AlertTitle,
  Select,
  MenuItem,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  alpha,
  Chip,
  Stack,
  Divider,
  Collapse,
  Badge,
  Skeleton,
  useTheme,
  styled,
} from '@mui/material';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuthStore } from '../../../../store/useAuthStore';
import { useAgencyConfig } from '../../../../context/AgencyConfigProvider';
import { useParams, useRouter } from 'next/navigation';
import { fetchWithAuth } from '@/services/fetchWithAuth';
import { API_ENDPOINTS, API_BASE_URL as AppApiBaseUrl } from '@/config/api';
import { useLoadingStore } from '@/store/loadingStore';
import { LoadingScreen } from '@/components/common/loader';

// DataLayer helper functions
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const pushToDataLayer = (eventData: any) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
  } else {
  }
};

// Styled components for enhanced UI
const StyledQuoteCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    transform: 'translateY(-2px)',
  }
}));

const CompanyLogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(0.5),
  '& img': {
    maxHeight: 40,
    maxWidth: 100,
    objectFit: 'contain',
    borderRadius: 4,
  }
}));

const PriceTag = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: 4,
  height: 24,
  fontSize: '0.75rem',
}));

const InstallmentButton = styled(FormControl)(({ theme }) => ({
  minWidth: 'auto',
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiSelect-select': {
      padding: '6px 14px',
      paddingRight: '32px',
      fontSize: '0.875rem',
    }
  }
}));

const PurchaseButton = styled(Button)(({ theme, color }) => ({
  borderRadius: 8,
  fontWeight: 600,
  padding: '8px 16px',
  boxShadow: 'none',
  textTransform: 'none',
  transition: 'all 0.2s ease',
}));

const DocumentButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '6px 12px',
  textTransform: 'none',
  fontSize: '0.8125rem',
}));

// Display mode types
type ProductDisplayMode = 'FULL_ACCESS' | 'CONTACT_TO_BUY' | 'CENSORED_CONTACT';

interface QuoteComparisonStepProps {
  proposalId: string | null;
  onNext?: () => void;
  onBack?: () => void;
  onSelectQuote?: (quoteId: string) => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

interface InsuranceCompany {
  id: number;
  name: string;
  logo: string | null;
  enabled: boolean;
}

interface Premium {
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

// Yeni API format için TSS coverage interface'leri
interface SaglikPaketi {
  tedaviSekli: string;
  ayaktaYillikTedaviSayisi: number | null;
}

interface TssCoverage {
  $type: 'tss';
  hastaneAgi: string;
  saglikPaketi: SaglikPaketi;
  [key: string]: any; // Index signature for dynamic access
}

// Eski Guarantee interface'i (compatibility için)
interface Guarantee {
  insuranceGuaranteeId: string;
  label: string;
  valueText: string | null;
  amount: number;
}

interface Quote {
  id: string;
  insuranceCompanyId: number;
  productId: number;
  premiums: Premium[];
  initialCoverage: TssCoverage | null;
  insuranceServiceProviderCoverage: TssCoverage | null;
  pdfCoverage: TssCoverage | null;
  state: 'WAITING' | 'ACTIVE' | 'FAILED';
  needsInvestigationByCompany: boolean;
  hasVocationalDiscount: boolean;
  hasUndamagedDiscount: boolean;
  revised: boolean;
  errorMessage: string | null;
  policyId: string | null;
  coverageGroupName?: string; // Yeni eklenen alan
  discountModels?: Record<string, unknown>[];

  // Processed fields
  company?: string;
  price?: number;
  coverage?: number;
  features?: string[];
  logo?: string;
  insuranceCompanyGuarantees?: Guarantee[]; // Compatibility için processed field
}

interface ProcessedQuote extends Quote {
  selectedInstallmentNumber: number;
}

// Coverage'da gerçek değerler olup olmadığını kontrol eden yardımcı fonksiyon
const hasValidTssCoverage = (coverage: TssCoverage | null): boolean => {
  if (!coverage) return false;

  return !!(coverage.hastaneAgi && coverage.hastaneAgi !== 'UNDEFINED' &&
    coverage.saglikPaketi && typeof coverage.saglikPaketi === 'object');
};

// TSS için tüm olası teminat alanlarının etiket eşlemeleri
const TSS_GUARANTEE_LABELS: Record<string, string> = {
  disPaketi: 'Diş Paketi',
  diyetisyenHizmeti: 'Diyetisyen Hizmeti',
  yogunBakim: 'Yoğun Bakım',
  checkUpHizmeti: 'Check-up Hizmeti',
  psikolojikDanismanlik: 'Psikolojik Danışmanlık',
  fizikTedavi: 'Fizik Tedavi',
  suniUzuv: 'Suni Uzuv',
  ambulans: 'Ambulans',
  yatarakTedavi: 'Yatarak Tedavi',
  ayaktaTedavi: 'Ayakta Tedavi',
  doktorMuayene: 'Doktor Muayene',
  ameliyat: 'Ameliyat',
  ameliyatMalzeme: 'Ameliyat Malzeme',
  kemoterapi: 'Kemoterapi',
  radyoterapi: 'Radyoterapi',
  diyaliz: 'Diyaliz',
  evdeBakim: 'Evde Bakım',
  yediGun24SaatTibbiDanismanlik: '7/24 Tıbbi Danışmanlık',
  dogum: 'Doğum',
  kucukMudahale: 'Küçük Müdahale',
  gozPaketi: 'Göz Paketi'
};

// Değer tipine göre metin oluşturan yardımcı fonksiyon
const formatTssCoverageValue = (value: any): string | null => {
  if (!value || typeof value !== 'object') return null;

  const type = value.$type;
  if (type === 'UNDEFINED') return null;
  if (type === 'INCLUDED') return 'Dahil';
  if (type === 'NOT_INCLUDED') return 'Dahil Değil';
  if (type === 'LIMITLESS') return 'Limitsiz';

  if (value.text) return value.text;
  if (value.value !== undefined && value.value !== null) {
    if (typeof value.value === 'number') {
      return value.value.toLocaleString('tr-TR') + (value.currency === 'TURKISH_LIRA' ? ' ₺' : '');
    }
    return String(value.value);
  }

  return 'Dahil'; // Fallback for other non-undefined types
};

// TSS Coverage'ı Guarantee array'ine dönüştürme fonksiyonu
const convertTssCoverageToGuarantees = (coverage: TssCoverage | null): Guarantee[] => {
  if (!coverage) return [];

  const guarantees: Guarantee[] = [];
  let guaranteeId = 1;

  // 1. Hastane Ağı (Özel işleme)
  if (coverage.hastaneAgi && coverage.hastaneAgi !== 'UNDEFINED' && coverage.hastaneAgi !== 'BILINMIYOR') {
    const hastaneAgiLabels: Record<string, string> = {
      'STANDART_KAPSAM': 'Standart Kapsam',
      'GENIS_KAPSAM': 'Geniş Kapsam',
      'DAR_KAPSAM': 'Dar Kapsam'
    };

    guarantees.push({
      insuranceGuaranteeId: guaranteeId.toString(),
      label: 'Hastane Ağı',
      valueText: hastaneAgiLabels[coverage.hastaneAgi] || coverage.hastaneAgi,
      amount: 0
    });
    guaranteeId++;
  }

  // 2. Sağlık Paketi / Tedavi Şekli (Özel işleme)
  if (coverage.saglikPaketi && typeof coverage.saglikPaketi === 'object') {
    const { tedaviSekli, ayaktaYillikTedaviSayisi } = coverage.saglikPaketi;

    if (tedaviSekli && tedaviSekli !== 'UNDEFINED' && tedaviSekli !== 'BILINMIYOR') {
      const tedaviSekliLabels: Record<string, string> = {
        'YATARAK': 'Yatarak Tedavi',
        'AYAKTA': 'Ayakta Tedavi',
        'YATARAK_AYAKTA': 'Yatarak ve Ayakta Tedavi'
      };

      guarantees.push({
        insuranceGuaranteeId: (guaranteeId++).toString(),
        label: 'Tedavi Şekli',
        valueText: tedaviSekliLabels[tedaviSekli] || tedaviSekli,
        amount: 0
      });
    }

    if (ayaktaYillikTedaviSayisi !== null && ayaktaYillikTedaviSayisi !== undefined && ayaktaYillikTedaviSayisi > 0) {
      guarantees.push({
        insuranceGuaranteeId: (guaranteeId++).toString(),
        label: 'Yıllık Ayakta Tedavi Sayısı',
        valueText: `${ayaktaYillikTedaviSayisi.toLocaleString('tr-TR')} kez`,
        amount: ayaktaYillikTedaviSayisi
      });
    }
  }

  // 3. Diğer Dinamik Alanlar ($type içeren nesne yapıları)
  Object.keys(coverage).forEach(key => {
    // Zaten işlenenleri atla
    if (key === 'hastaneAgi' || key === 'saglikPaketi' || key === '$type' || key === 'productBranch') return;

    const value = coverage[key];
    const formattedValue = formatTssCoverageValue(value);

    if (formattedValue) {
      const label = TSS_GUARANTEE_LABELS[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

      // Mükerrer eklemeyi önle (bazı alanlar tedaviSekli ile çakışabilir)
      if (!guarantees.find(g => g.label === label)) {
        guarantees.push({
          insuranceGuaranteeId: (guaranteeId++).toString(),
          label: label,
          valueText: formattedValue,
          amount: typeof value.value === 'number' ? value.value : 0
        });
      }
    }
  });

  return guarantees;
};

export default function QuoteComparisonStep({
  proposalId: initialProposalId,
  onNext,
  onBack,
  onSelectQuote,
  isFirstStep,
  isLastStep,
}: QuoteComparisonStepProps) {
  const accessToken = useAuthStore((state) => state.accessToken);
  const [quotes, setQuotes] = useState<ProcessedQuote[]>([]);
  const [companies, setCompanies] = useState<InsuranceCompany[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<'price' | 'company'>('price');
  const [showOnlyBestOffers, setShowOnlyBestOffers] = useState(false);
  const [hoveredQuote, setHoveredQuote] = useState<string | null>(null);
  const [selectedQuoteForModal, setSelectedQuoteForModal] = useState<ProcessedQuote | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const theme = useTheme();
  const [isPollingActive, setIsPollingActive] = useState(true);
  const agencyConfig = useAgencyConfig();
  const params = useParams();
  const router = useRouter();
  const [proposalId, setProposalId] = useState<string | null>(initialProposalId || null);
  const [pollingIntervalId, setPollingIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [expandedQuoteId, setExpandedQuoteId] = useState<string | null>(null);
  const [bestOffers, setBestOffers] = useState<ProcessedQuote[]>([]);
  const [showAllQuotes, setShowAllQuotes] = useState(false);
  const [shouldCompleteLoading, setShouldCompleteLoading] = useState(false);
  const [hasWaitingQuotes, setHasWaitingQuotes] = useState(false);
  const [hasStoppedGlobalLoading, setHasStoppedGlobalLoading] = useState(false);
  const companiesCacheRef = useRef<InsuranceCompany[] | null>(null);

  const {
    isLoading: globalIsLoading,
    setFirstQuoteReceived,
    stopLoading: stopGlobalLoading
  } = useLoadingStore();


  const proposalIdToUse = initialProposalId || (params?.proposalId as string | undefined) || localStorage.getItem('proposalIdForTss');

  // Get product display mode for each quote
  const getProductDisplayMode = (productCode: string, productId: number): ProductDisplayMode => {
    const companies = agencyConfig.homepage.partners.companies;

    // Tüm şirketleri tara
    for (const company of companies) {
      const products = company.products[productCode as keyof typeof company.products];
      if (products && Array.isArray(products)) {
        for (const product of products) {
          // Obje formatı kontrolü
          if (typeof product === 'object' && 'id' in product && 'displayMode' in product) {
            if (product.id === productId) {
              return product.displayMode as ProductDisplayMode;
            }
          }
        }
      }
    }

    return 'FULL_ACCESS'; // Varsayılan mod
  };

  useEffect(() => {
    const storedProposalId = localStorage.getItem('proposalIdForTss');
    if (storedProposalId) {
      setProposalId(storedProposalId);
    } else if (params?.proposalId) {
      const pid = Array.isArray(params.proposalId) ? params.proposalId[0] : params.proposalId;
      setProposalId(pid || null);
    } else {
      setError('tss teklif ID bilgisi bulunamadı. Lütfen önceki adıma dönüp tekrar deneyin.');
      setIsLoading(false);
      stopGlobalLoading();
    }
  }, [params.proposalId]);

  // processQuotesData yardımcı fonksiyonu
  const processQuotesData = (quotesData: Quote[], currentCompanies: InsuranceCompany[]): ProcessedQuote[] => {
    return quotesData.map((quote: Quote) => {
      const company = currentCompanies.find((c) => c.id === quote.insuranceCompanyId);
      // uniquePremiums mantığı, eğer aynı taksit numarasına sahip birden fazla premium geliyorsa
      // ve bu istenmiyorsa kullanılabilir. Genellikle API'den zaten doğru veri gelmesi beklenir.
      const uniquePremiums = quote.premiums.reduce((acc: Premium[], current) => {
        const isDuplicate = acc.some(item =>
          item.installmentNumber === current.installmentNumber
        );
        if (!isDuplicate) {
          acc.push(current);
        }
        return acc;
      }, []);

      const formattedPremiums = uniquePremiums.map((premium) => ({
        ...premium,
        formattedNetPremium: premium.netPremium.toLocaleString('tr-TR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        formattedGrossPremium: premium.grossPremium.toLocaleString('tr-TR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      }));

      const initialSelectedInstallment = formattedPremiums.length > 0 ? formattedPremiums[0].installmentNumber : 1;

      // --- Backend'den gelen hazır teminatları kontrol et ---
      if (quote.insuranceCompanyGuarantees && quote.insuranceCompanyGuarantees.length > 0) {
        const guarantees = quote.insuranceCompanyGuarantees;
        const features = guarantees.map((g) => g.label);

        return {
          ...quote,
          premiums: formattedPremiums,
          company: company?.name || `Sigorta Şirketi #${quote.insuranceCompanyId}`,
          coverage: 0,
          features,
          logo: company?.logo || `https://storage.dogasigorta.com/app-1/insurup-b2c-company/${quote.insuranceCompanyId}.png`,
          selectedInstallmentNumber: initialSelectedInstallment,
          insuranceCompanyGuarantees: guarantees,
        };
      }

      // --- Fallback: Alan bazlı coverage birleştirme (Backend verisi yoksa) ---
      // Tüm kaynaklardaki anahtarları topla
      const allCoverageKeys = new Set([
        ...Object.keys(quote.initialCoverage || {}),
        ...Object.keys(quote.insuranceServiceProviderCoverage || {}),
        ...Object.keys(quote.pdfCoverage || {})
      ]);

      const mergedCoverage: any = { $type: 'tss' };

      allCoverageKeys.forEach(key => {
        if (key === '$type' || key === 'productBranch') return;

        // Öncelik sırası: pdfCoverage > insuranceServiceProviderCoverage > initialCoverage
        const sources = [quote.pdfCoverage, quote.insuranceServiceProviderCoverage, quote.initialCoverage];

        for (const src of sources) {
          if (!src) continue;
          const val = src[key];

          // Geçerli bir değer mi kontrol et
          if (val !== undefined && val !== null) {
            // Eğer bir nesneyse ($type içeren), UNDEFINED veya BILINMIYOR değilse al
            if (typeof val === 'object' && val.$type) {
              if (val.$type !== 'UNDEFINED' && val.$type !== 'BILINMIYOR') {
                mergedCoverage[key] = val;
                break;
              }
            }
            // Eğer basit bir değerse (string vb.), UNDEFINED veya BILINMIYOR değilse al
            else if (val !== 'UNDEFINED' && val !== 'BILINMIYOR') {
              mergedCoverage[key] = val;
              break;
            }
          }
        }

        // Eğer hiçbirinde geçerli değer bulunamadıysa, son çare olarak birinden al (tanımlıysa)
        if (mergedCoverage[key] === undefined) {
          mergedCoverage[key] = quote.pdfCoverage?.[key] || quote.insuranceServiceProviderCoverage?.[key] || quote.initialCoverage?.[key];
        }
      });

      const guarantees = convertTssCoverageToGuarantees(mergedCoverage);
      const coverage = 0;
      const features = guarantees.map((g) => g.label);

      return {
        ...quote,
        premiums: formattedPremiums,
        company: company?.name || `Sigorta Şirketi #${quote.insuranceCompanyId}`,
        coverage,
        features,
        logo: company?.logo || `https://storage.dogasigorta.com/app-1/insurup-b2c-company/${quote.insuranceCompanyId}.png`,
        selectedInstallmentNumber: initialSelectedInstallment,
        insuranceCompanyGuarantees: guarantees,
      };
    });
  };

  useEffect(() => {
    let isPollingActive = true;
    let pollInterval: NodeJS.Timeout | null = null;
    const startTime = Date.now();

    const fetchCompanies = async () => {
      if (companiesCacheRef.current && companiesCacheRef.current.length > 0) {
        return companiesCacheRef.current;
      }

      const currentAccessToken = useAuthStore.getState().accessToken;
      if (!currentAccessToken) {
        throw new Error('Yetkilendirme anahtarı bulunamadı.');
      }

      const rawCompanyResponse = await fetchWithAuth(API_ENDPOINTS.COMPANIES, {
        headers: { Authorization: `Bearer ${currentAccessToken}` },
      });

      if (!rawCompanyResponse.ok) {
        const errorText = await rawCompanyResponse.text();
        throw new Error(`Şirket bilgileri alınamadı: ${rawCompanyResponse.status} ${errorText}`);
      }

      const companyData = await rawCompanyResponse.json();
      if (!Array.isArray(companyData)) {
        throw new Error('Şirket bilgileri format hatalı.');
      }

      companiesCacheRef.current = companyData;
      return companyData;
    };

    const fetchQuotes = async (currentCompanies: InsuranceCompany[]) => {
      if (!proposalIdToUse) return;

      const currentAccessToken = useAuthStore.getState().accessToken;
      if (!currentAccessToken) return;

      try {
        const rawProductsResponse = await fetchWithAuth(
          API_ENDPOINTS.PROPOSALS_ID(proposalIdToUse),
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${currentAccessToken}`,
              Accept: 'application/json',
            },
          }
        );

        if (!rawProductsResponse.ok) {
          throw new Error(`Proposal bilgileri alınamadı: ${rawProductsResponse.status}`);
        }

        const proposalData = await rawProductsResponse.json();
        const productsData = proposalData.products as Quote[];

        if (!Array.isArray(productsData)) {
          throw new Error('Ürünler API yanıtı beklenen formatta değil.');
        }

        const processed = processQuotesData(productsData, currentCompanies);
        // Config'de tanımlı productId'leri al
        const allowedProductIds = agencyConfig.homepage.partners.companies.flatMap((company) =>
          (company.products.tss || []).map(product =>
            typeof product === 'object' ? product.id : product
          )
        );

        // Hem ACTIVE hem de config'de tanımlı olanları filtrele
        const filteredQuotes = processed.filter(quote =>
          quote.state === 'ACTIVE' && allowedProductIds.includes(quote.productId)
        );

        // Kullanıcıya sadece ACTIVE filtrelenmiş quotes'ları göster (immediate display)
        setQuotes(sortQuotes(filteredQuotes));
        setBestOffers(getBestOffers(filteredQuotes));

        // İlk teklif geldiğinde loading modal'ı bilgilendir
        if (filteredQuotes.length > 0 && !hasStoppedGlobalLoading) {
          setFirstQuoteReceived();
          setShouldCompleteLoading(true);
          setHasStoppedGlobalLoading(true);

          // 4.3 saniye sonra global loading'i durdur ve local loading'i durdur (4s completion + 300ms wait)
          setTimeout(() => {
            stopGlobalLoading();
            setIsLoading(false); // Animasyon tamamlandıktan sonra local loading'i durdur
          }, 4300);
        }

        // Loading kontrolü için WAITING quotes'ları kontrol et
        const relevantWaitingQuotes = processed.filter(q =>
          allowedProductIds.includes(q.productId) && q.state === 'WAITING'
        );

        // WAITING quotes durumunu state'e kaydet (UI'da spinner göstermek için)
        setHasWaitingQuotes(relevantWaitingQuotes.length > 0);

        // IMMEDIATE DISPLAY: ACTIVE quotes varsa hemen göster, WAITING'leri arka planda devam ettir
        // NOT: setIsLoading'i burada çağırma - sadece ilk teklif geldiğinde global loading'i durdur
        if (filteredQuotes.length > 0) {
          // setIsLoading(false); // KALDIRILDI - polling sırasında state değişikliği yaratmasın
        }

        // Polling kontrolü için relevantQuotes (aynı logic)
        const relevantQuotes = processed.filter(q => allowedProductIds.includes(q.productId));

        // Tüm teklifler finalize edilmişse polling'i durdur
        const allQuotesFinalized = relevantQuotes.length > 0 && relevantQuotes.every((quote) =>
          quote.state === 'FAILED' || quote.state === 'ACTIVE'
        );

        const elapsedTime = Date.now() - startTime;
        const timeoutReached = elapsedTime >= 300000; // 5 dakika

        if (allQuotesFinalized || timeoutReached) {
          // Analytics event tetikleme - teklif sonuçlarına göre
          const hasSuccessfulQuotes = filteredQuotes.length > 0;
          if (hasSuccessfulQuotes) {
            pushToDataLayer({
              event: "tss_formsubmit",
              form_name: "tss_teklif_basarili",
            });
          } else {
            pushToDataLayer({
              event: "tss_formsubmit",
              form_name: "tss_teklif_basarisiz",
            });
          }

          if (pollInterval) {
            clearInterval(pollInterval);
          }

          // Eğer teklif gelmemişse ve loading hala aktifse, loading'i tamamla
          if (filteredQuotes.length === 0 && !hasStoppedGlobalLoading) {
            setShouldCompleteLoading(true);
            setHasStoppedGlobalLoading(true);

            // 4.3 saniye sonra global loading'i durdur ve local loading'i durdur
            setTimeout(() => {
              stopGlobalLoading();
              setIsLoading(false);
            }, 4300);
          } else {
            // Teklif gelmişse veya loading zaten durdurulmuşsa direkt durdur
            stopGlobalLoading();
            setIsLoading(false);
          }

          setIsPollingActive(false);
          setHasWaitingQuotes(false); // Polling bittiğinde spinner'ı kapat
          return;
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Teklifler alınırken bir hata oluştu.');
        setIsLoading(false);
        stopGlobalLoading();
        if (pollInterval) {
          clearInterval(pollInterval);
        }
      }
    };

    const startPolling = async () => {
      if (!proposalIdToUse) {
        setError('Teklif ID bulunamadı. Lütfen önceki adıma dönün.');
        setIsLoading(false);
        stopGlobalLoading();
        return;
      }

      setIsLoading(true);
      setShouldCompleteLoading(false);
      setHasStoppedGlobalLoading(false);
      setError(null);

      try {
        // Önce şirketleri getir
        const companyData = await fetchCompanies();
        setCompanies(companyData);

        // İlk quotes çağrısını yap
        await fetchQuotes(companyData);

        // Polling başlat - 3 saniye aralıklarla
        const interval = setInterval(async () => {
          if (isPollingActive) {
            await fetchQuotes(companyData);
          }
        }, 3000);

        pollInterval = interval;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Veriler yüklenirken bir sorun oluştu.');
        setQuotes([]);
        setBestOffers([]);
        setIsLoading(false);
        stopGlobalLoading();
      }
    };

    startPolling();

    return () => {
      isPollingActive = false;
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [proposalIdToUse, agencyConfig]);

  const filterQuotesByProductIds = (quotes: ProcessedQuote[]) => {
    const allowedProductIds = agencyConfig.homepage.partners.companies.flatMap((company) =>
      (company.products.tss || []).map(product =>
        typeof product === 'object' ? product.id : product
      )
    );
    return quotes.filter((quote) =>
      allowedProductIds.includes(quote.productId) &&
      (quote.state === 'ACTIVE' || quote.state === 'WAITING')
    );
  };

  const handleQuoteSelect = (quoteId: string) => {
    setSelectedQuote(quoteId);
  };

  const handleInstallmentChange = (quoteId: string, installmentNumber: number) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote) =>
        quote.id === quoteId
          ? { ...quote, selectedInstallmentNumber: installmentNumber }
          : quote
      )
    );
  };

  const handlePurchase = (quoteId: string) => {
    const selectedFullQuote = quotes.find(q => q.id === quoteId);
    if (selectedFullQuote && selectedFullQuote.state === 'ACTIVE') {
      // PurchaseStep için gerekli alanları ekleyerek selectedQuoteForPurchase'ı hazırla
      const purchaseData = {
        ...selectedFullQuote,
        proposalId: proposalId, // proposalId'yi ekliyoruz
        proposalProductId: selectedFullQuote.id, // proposalProductId olarak id'yi kullanıyoruz
        productId: selectedFullQuote.id // productId olarak da id'yi kullanıyoruz (string olarak)
      };

      localStorage.setItem('selectedQuoteForPurchase', JSON.stringify(purchaseData));
      localStorage.setItem('selectedInstallmentForPurchase', selectedFullQuote.selectedInstallmentNumber.toString());
      if (onSelectQuote) {
        onSelectQuote(quoteId);
      }
      router.push(`/purchase/${proposalId}/${quoteId}`);
    } else {
      setError("Bu teklif şu anda satın alım için uygun değil veya aktif değil.");
    }
  };

  const getSelectedPremium = (quote: ProcessedQuote): Premium | undefined => {
    return quote.premiums.find((p) => p.installmentNumber === quote.selectedInstallmentNumber);
  };

  const handleOpenModal = (quote: ProcessedQuote) => {
    setSelectedQuoteForModal(quote);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedQuoteForModal(null);
  };

  // Convert TSS quotes to QuoteComparisonModal format
  const convertTssQuotesToComparisonFormat = (tssQuotes: ProcessedQuote[]) => {
    return tssQuotes.map(quote => ({
      id: quote.id,
      company: quote.company,
      logo: quote.logo,
      premiums: quote.premiums,
      insuranceCompanyGuarantees: quote.insuranceCompanyGuarantees || [],
      coverageGroupName: quote.coverageGroupName,
      selectedInstallmentNumber: quote.selectedInstallmentNumber
    }));
  };




  const sortQuotes = (quotes: ProcessedQuote[]): ProcessedQuote[] => {
    if (sortOption === 'price') {
      return [...quotes].sort((a, b) => {
        const aPremium = getSelectedPremium(a);
        const bPremium = getSelectedPremium(b);

        if (!aPremium || !bPremium) return 0;
        return aPremium.grossPremium - bPremium.grossPremium;
      });
    } else {
      return [...quotes].sort((a, b) => {
        return (a.company || '').localeCompare(b.company || '');
      });
    }
  };

  const getBestOffers = (quotes: ProcessedQuote[]): ProcessedQuote[] => {
    if (!showOnlyBestOffers) return quotes;

    // Group by company
    const groupedByCompany: Record<string, ProcessedQuote[]> = {};
    quotes.forEach(quote => {
      const companyId = quote.insuranceCompanyId.toString();
      if (!groupedByCompany[companyId]) {
        groupedByCompany[companyId] = [];
      }
      groupedByCompany[companyId].push(quote);
    });

    // Get best offer from each company
    return Object.values(groupedByCompany).map(companyQuotes => {
      return companyQuotes.reduce((best, current) => {
        const bestPremium = getSelectedPremium(best);
        const currentPremium = getSelectedPremium(current);

        if (!bestPremium || !currentPremium) return best;
        return currentPremium.grossPremium < bestPremium.grossPremium ? current : best;
      });
    });
  };

  const getHighlightColor = (quote: ProcessedQuote) => {
    // Best offer no longer gets a highlight background
    return 'transparent';
  };

  const isBestOffer = (sortedQuotes: ProcessedQuote[], currentQuoteId: string) => {
    return sortedQuotes.length > 0 && sortedQuotes[0].id === currentQuoteId;
  };



  const formatGuaranteeValue = (guarantee: Guarantee): string => {
    if (guarantee.valueText) {
      return guarantee.valueText;
    }
    if (guarantee.amount) {
      return (
        guarantee.amount.toLocaleString('tr-TR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + ' ₺'
      );
    }
    return '-';
  };

  const handleViewDocument = async (proposalIdParam: string, productIdParam: string) => {
    if (!accessToken) return;
    try {
      const response = await fetchWithAuth(API_ENDPOINTS.PROPOSAL_PRODUCT_DOCUMENT(proposalIdParam, productIdParam), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0] || 'Döküman görüntülenirken bir hata oluştu');
      }

      const data = await response.json();
      if (data.url) {
        // URL'den PDF'i fetch edip blob olarak aç
        const pdfResponse = await fetch(data.url);
        if (!pdfResponse.ok) {
          throw new Error('PDF dosyası indirilemedi');
        }

        const blob = await pdfResponse.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        window.open(blobUrl, '_blank');

        // Bellek temizliği için URL'yi revoke et (biraz gecikme ile)
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
        }, 1000);
      } else {
        throw new Error("Döküman URL'si bulunamadı");
      }
    } catch (error) {
      setError('Belge görüntülenirken bir hata oluştu.');
    }
  };

  // Loading durumunda SADECE loading göster, hiçbir içerik gösterme (Kasko/Trafik ile aynı mantık)
  if (isLoading || globalIsLoading) {
    return (
      <LoadingScreen
        key={proposalId || 'tss-loading'}
        productType="tss"
        duration={60}
        shouldComplete={shouldCompleteLoading}
      />
    );
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Typography variant="h5" component="h1" fontWeight="600">
            Tamamlayıcı Sağlık Sigortası Teklifleri
          </Typography>

          {/* Daha fazla teklif yükleniyor spinner */}
          {hasWaitingQuotes && (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <CircularProgress
                size={18}
                thickness={5}
                sx={{
                  color: '#262163',
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round'
                  }
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                Daha fazla teklif yükleniyor...
              </Typography>
            </Box>
          )}
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          Size en uygun Tamamlayıcı Sağlık Sigortası teklifini seçip hemen satın alabilirsiniz
        </Typography>

        {/* Filtering and Sorting Controls */}
        <Box sx={{
          mt: 3,
          mb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Box>
            {quotes.filter(q => q.state === 'ACTIVE').length > 1 && (
              <Button
                variant="outlined"
                startIcon={<CompareArrowsIcon />}
                onClick={() => setIsComparisonModalOpen(true)}
                sx={{
                  borderColor: agencyConfig.theme.primaryColor,
                  color: agencyConfig.theme.primaryColor,
                  '&:hover': {
                    borderColor: agencyConfig.theme.primaryColor,
                    backgroundColor: alpha(agencyConfig.theme.primaryColor, 0.05)
                  }
                }}
              >
                Teklifleri Karşılaştır
              </Button>
            )}
          </Box>
          <FormControl size="small">
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as 'price' | 'company')}
              sx={{
                minWidth: 150,
                borderRadius: 2,
                fontSize: '0.875rem',
                '& .MuiSelect-select': { py: 1 }
              }}
            >
              <MenuItem value="price">Fiyata Göre Sırala</MenuItem>
              <MenuItem value="company">A'dan Z'ye Sırala</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
        >
          {error}
        </Alert>
      )}

      {isLoading ? (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          my: 8,
          gap: 3
        }}>
          <CircularProgress size={48} thickness={4} />
          <Box textAlign="center">
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Teklifler Hazırlanıyor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Anlaşmalı şirketlerimizden size özel teklifler alınıyor...
            </Typography>
          </Box>
        </Box>
      ) : quotes.length === 0 ? (
        <Alert
          severity="info"
          sx={{
            mb: 3,
            py: 2,
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}
        >
          <AlertTitle>Uygun Teklif Bulunamadı</AlertTitle>
          Kişisel bilgilerinize göre uygun teklif bulunamadı. Bilgilerinizi kontrol edip tekrar deneyebilirsiniz.
        </Alert>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, alignItems: 'center' }}>
          {sortQuotes(getBestOffers(quotes.filter(q => q.state === 'ACTIVE'))).map((quote) => {
            const currentPremium = getSelectedPremium(quote);
            const isFailed = quote.state === 'FAILED';
            const isWaiting = quote.state === 'WAITING';

            const isHovered = hoveredQuote === quote.id;
            const isSelected = selectedQuote === quote.id;
            const highlightColor = getHighlightColor(quote);
            const best = isBestOffer(sortQuotes(quotes.filter(q => q.state === 'ACTIVE')), quote.id);

            return (
              <Box key={quote.id} sx={{ width: '100%' }}>
                <StyledQuoteCard
                  elevation={isHovered || isSelected ? 3 : 1}
                  onMouseEnter={() => setHoveredQuote(quote.id)}
                  onMouseLeave={() => setHoveredQuote(null)}
                  onClick={() => !isFailed && !isWaiting && handleQuoteSelect(quote.id)}
                  sx={{
                    cursor: isFailed || isWaiting ? 'default' : 'pointer',
                    border: isSelected
                      ? `2px solid ${agencyConfig.theme.primaryColor}`
                      : isFailed
                        ? '1px solid rgba(211, 47, 47, 0.3)'
                        : isWaiting
                          ? '1px solid rgba(0, 0, 0, 0.12)'
                          : `1px solid rgba(0, 0, 0, 0.08)`,
                    opacity: isFailed ? 0.8 : 1,
                    backgroundColor: isSelected
                      ? alpha(agencyConfig.theme.primaryColor, 0.04)
                      : highlightColor
                  }}
                >
                  {/* Best Offer Badge - only show when sorting by price and there's more than one active quote */}
                  {sortOption === 'price' &&
                    quotes.filter(q => q.state === 'ACTIVE').length > 1 &&
                    best && (
                      <Chip
                        label="En Uygun Fiyat"
                        color="success"
                        size="small"
                        icon={<CheckCircleOutlineIcon />}
                        sx={{
                          position: 'absolute',
                          top: -12,
                          left: 16,
                          fontWeight: 'medium',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          zIndex: 1
                        }}
                      />
                    )}
                  {/* Coverage Group Name Badge - En Uygun Fiyat badge'inin yanında */}
                  {quote.coverageGroupName && (
                    <Chip
                      label={quote.coverageGroupName}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: sortOption === 'price' &&
                          quotes.filter(q => q.state === 'ACTIVE').length > 1 &&
                          best ? 140 : 16,
                        fontWeight: 'medium',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        zIndex: 1,
                        backgroundColor: '#ef2027',
                        color: 'white',
                        '& .MuiChip-label': {
                          color: 'white'
                        }
                      }}
                    />
                  )}

                  <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
                      {/* Company & Logo Section */}
                      <Box sx={{ flex: 3.5, minWidth: 0, mb: { xs: 2, md: 0 } }}>
                        <CompanyLogoWrapper>
                          {(() => {
                            const displayMode = getProductDisplayMode('tss', quote.productId);
                            const isCensored = displayMode === 'CENSORED_CONTACT';

                            return (
                              <>
                                {isCensored ? (
                                  <Box
                                    sx={{

                                      borderRadius: 1,
                                      width: 50,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <Shield
                                      size={40}
                                      color={agencyConfig?.theme?.primaryColor || theme.palette.primary.main}
                                      stroke={agencyConfig?.theme?.primaryColor || theme.palette.primary.main}
                                      strokeWidth={2}
                                    />
                                  </Box>
                                ) : quote.logo ? (
                                  <Box
                                    component="img"
                                    src={quote.logo}
                                    alt={quote.company}
                                    sx={{ height: 40 }}
                                  />
                                ) : (
                                  <Box
                                    sx={{

                                      borderRadius: 1,
                                      width: 50,
                                      height: 40,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <Typography variant="h5" component="span">
                                      🚗
                                    </Typography>
                                  </Box>
                                )}
                                <Box>
                                  <Typography variant="subtitle1" fontWeight="bold">
                                    {isCensored ? 'Sigorta Şirketi' : quote.company}
                                  </Typography>
                                </Box>
                              </>
                            );
                          })()}
                        </CompanyLogoWrapper>
                      </Box>
                      {/* Price Section */}
                      <Box sx={{ flex: 3.5, minWidth: 0, mb: { xs: 2, md: 0 } }}>
                        <PriceTag>
                          {isWaiting ? (
                            <>
                              <Skeleton variant="text" width={120} height={36} />
                              <Skeleton variant="text" width={90} height={24} />
                            </>
                          ) : (
                            <>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <Typography
                                  variant="h5"
                                  color="primary.main"
                                  fontWeight="700"
                                  sx={{ mr: 1 }}
                                >
                                  {currentPremium?.formattedGrossPremium
                                    ? `${currentPremium.formattedGrossPremium} ₺`
                                    : 'Fiyat Yok'}
                                </Typography>

                                {currentPremium?.installmentNumber && currentPremium.installmentNumber > 1 && (
                                  <Chip
                                    size="small"
                                    label={`${currentPremium.installmentNumber} Taksit`}
                                    color="default"
                                    variant="outlined"
                                    sx={{ height: 20, fontSize: '0.7rem' }}
                                  />
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <InstallmentButton size="small">
                                  <Select
                                    value={quote.selectedInstallmentNumber}
                                    onChange={(e) => handleInstallmentChange(quote.id, e.target.value as number)}
                                    renderValue={(value) => (
                                      <Typography variant="body2">
                                        {value === 1 ? 'Peşin Ödeme' : `${value} Taksit`}
                                      </Typography>
                                    )}
                                    IconComponent={ExpandMoreIcon}
                                    sx={{
                                      fontSize: '0.8rem',
                                      '.MuiSvgIcon-root': { fontSize: '1rem' }
                                    }}
                                  >
                                    {quote.premiums.map((premium) => (
                                      <MenuItem
                                        key={premium.installmentNumber}
                                        value={premium.installmentNumber}
                                      >
                                        <Typography variant="body2">
                                          {premium.installmentNumber === 1
                                            ? `Peşin: ${premium.formattedGrossPremium} ₺`
                                            : `${premium.installmentNumber} Taksit: ${premium.formattedGrossPremium} ₺`}
                                        </Typography>
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </InstallmentButton>
                                <Tooltip title="Vergi ve harçlar dahil toplam fiyat">
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ ml: 1, display: 'flex', alignItems: 'center' }}
                                  >
                                    <InfoOutlinedIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                                    Vergiler Dahil
                                  </Typography>
                                </Tooltip>
                              </Box>
                            </>
                          )}
                        </PriceTag>
                      </Box>
                      {/* Features & Actions Section */}
                      <Box sx={{ flex: 5, minWidth: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <Box>
                          {!isWaiting && (() => {
                            const displayMode = getProductDisplayMode('tss', quote.productId);
                            const isCensored = displayMode === 'CENSORED_CONTACT';

                            return (
                              <Stack direction="row" spacing={1} flexWrap="wrap">
                                {!isCensored && (
                                  <DocumentButton
                                    variant="text"
                                    startIcon={<FileText size={16} />}
                                    color="primary"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleViewDocument(proposalId || '', quote.id);
                                    }}
                                  >
                                    Teklif Belgesi
                                  </DocumentButton>
                                )}
                                <DocumentButton
                                  variant="text"
                                  startIcon={<InfoOutlinedIcon fontSize="small" />}
                                  color="primary"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenModal(quote);
                                  }}
                                >
                                  Teminatlar
                                </DocumentButton>
                              </Stack>
                            );
                          })()}
                        </Box>
                        {!isFailed && !isWaiting && (() => {
                          const displayMode = getProductDisplayMode('tss', quote.productId);
                          const isFullAccess = displayMode === 'FULL_ACCESS';

                          if (isFullAccess) {
                            return (
                              <PurchaseButton
                                variant="outlined"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePurchase(quote.id);
                                }}
                                sx={{
                                  color: 'text.primary',
                                  borderColor: 'divider',
                                  '&:hover': {
                                    color: agencyConfig.theme.primaryColor,
                                    borderColor: agencyConfig.theme.primaryColor,
                                    bgcolor: alpha(agencyConfig.theme.primaryColor, 0.05),
                                    transform: 'translateY(-1px)',
                                  },
                                }}
                              >
                                Satın Al
                              </PurchaseButton>
                            );
                          } else {
                            return (
                              <PurchaseButton
                                variant="outlined"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(`tel:${agencyConfig?.contact?.phone?.primary?.replace(/\s/g, '') || '05330864001'}`, '_self');
                                }}
                                sx={{
                                  color: 'text.primary',
                                  borderColor: 'divider',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  padding: '8px 16px',
                                  minHeight: 'auto',
                                  '&:hover': {
                                    color: agencyConfig.theme.primaryColor,
                                    borderColor: agencyConfig.theme.primaryColor,
                                    bgcolor: alpha(agencyConfig.theme.primaryColor, 0.05),
                                    transform: 'translateY(-1px)',
                                  },
                                }}
                              >
                                <Typography variant="button" sx={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'none' }}>
                                  Bize Ulaşın
                                </Typography>
                                <Typography variant="caption" sx={{ fontSize: '0.75rem', opacity: 0.8, mt: 0.5 }}>
                                  {agencyConfig?.contact?.phone?.primary || '+90 533 086 40 01'}
                                </Typography>
                              </PurchaseButton>
                            );
                          }
                        })()}
                      </Box>
                    </Box>

                    {isFailed && (
                      <Alert
                        severity="error"
                        variant="outlined"
                        icon={<AlertCircle size={24} />}
                        sx={{
                          mt: 2,
                          borderRadius: 2
                        }}
                      >
                        <Typography variant="body2">
                          {quote.errorMessage || 'Bu teklif şu anda kullanılamıyor. Lütfen başka bir teklif seçin.'}
                        </Typography>
                      </Alert>
                    )}
                  </CardContent>
                </StyledQuoteCard>
              </Box>
            );
          })}
        </Box>
      )}

      {/* Information Section */}
      <Box sx={{ mt: 4, p: 2, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <InfoOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="subtitle2" component="span">Tamamlayıcı Sağlık Sigortası Hakkında</Typography>
          </Box>
          Tamamlayıcı Sağlık Sigortası, SGK kapsamı dışında kalan sağlık harcamalarınızı karşılar. Hastane yatışı, ayakta tedavi, ilaç, tahlil ve check-up gibi sağlık hizmetlerini güvence altına alır. Size ve ailenize en uygun TSS teklifini seçerek hemen satın alabilirsiniz.
        </Typography>
      </Box>



      {/* "Önceki Adıma Dön" butonu kaldırıldı */}

      {/* Teminat Detayları Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="guarantee-dialog-title"
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: 2, sm: 3 },
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            m: { xs: 1, sm: 2 },
            height: { xs: '90vh', sm: 'auto' },
            maxHeight: { xs: '90vh', sm: '90vh' }
          }
        }}
      >
        <DialogTitle
          id="guarantee-dialog-title"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1, sm: 1.5 },
            bgcolor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
            py: { xs: 1, sm: 1.5 },
            px: { xs: 1.5, sm: 3 },
            minHeight: 'auto'
          }}
        >
          <ShieldCheck size={20} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h6" component="span" sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
              {selectedQuoteForModal?.company}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
              Teminat Detayları
            </Typography>
          </Box>

          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: { xs: 8, sm: 16 },
              top: { xs: 8, sm: 16 },
              color: (theme) => theme.palette.grey[500],
              p: 0.5
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 0 }}>
          {selectedQuoteForModal?.insuranceCompanyGuarantees &&
            selectedQuoteForModal.insuranceCompanyGuarantees.length > 0 ? (
            <Box>
              <Box sx={{ px: { xs: 1.5, sm: 3 }, py: { xs: 1.5, sm: 2 }, bgcolor: alpha(theme.palette.primary.main, 0.03) }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  flexWrap: 'wrap',
                  gap: { xs: 1, sm: 2 }
                }}>
                  <Box sx={{ flex: 1, minWidth: { xs: 'auto', sm: 240 } }}>
                    <CompanyLogoWrapper>
                      {selectedQuoteForModal.logo ? (
                        <Box
                          component="img"
                          src={selectedQuoteForModal.logo}
                          alt={selectedQuoteForModal.company}
                          sx={{ height: { xs: 32, sm: 40 } }}
                        />
                      ) : (
                        <Box
                          sx={{

                            borderRadius: 1,
                            width: { xs: 40, sm: 50 },
                            height: { xs: 32, sm: 40 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography variant="h5" component="span">
                            🏥
                          </Typography>
                        </Box>
                      )}
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                          {selectedQuoteForModal.company}
                        </Typography>
                        {selectedQuoteForModal.coverageGroupName && (
                          <Chip
                            label={selectedQuoteForModal.coverageGroupName}
                            size="small"
                            variant="outlined"
                            sx={{
                              backgroundColor: '#ef2027',
                              color: 'white',
                              '& .MuiChip-label': {
                                color: 'white',
                                fontSize: { xs: '0.7rem', sm: '0.75rem' }
                              },
                              mt: 0.5,
                              height: { xs: 20, sm: 24 }
                            }}
                          />
                        )}
                      </Box>
                    </CompanyLogoWrapper>
                  </Box>
                  <Box sx={{ textAlign: { xs: 'left', sm: 'right' }, mt: { xs: 1, sm: 0 } }}>
                    <Typography variant="h6" color="primary.main" fontWeight="bold" sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' } }}>
                      {getSelectedPremium(selectedQuoteForModal)?.formattedGrossPremium} ₺
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}>
                      {getSelectedPremium(selectedQuoteForModal)?.installmentNumber === 1
                        ? 'Peşin Ödeme'
                        : `${getSelectedPremium(selectedQuoteForModal)?.installmentNumber} Taksit`}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Desktop Table */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <TableContainer>
                  <Table stickyHeader aria-label="teminat tablosu">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{
                          fontWeight: 'bold',
                          fontSize: '0.875rem',
                          py: 2
                        }}>
                          Teminat Adı
                        </TableCell>
                        <TableCell align="right" sx={{
                          fontWeight: 'bold',
                          fontSize: '0.875rem',
                          py: 2
                        }}>
                          Limit / Değer
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedQuoteForModal.insuranceCompanyGuarantees
                        ?.filter(guarantee => {
                          // "Belirsiz" değerleri filtrele
                          const value = formatGuaranteeValue(guarantee);
                          return value !== 'Belirsiz';
                        })
                        .sort((a, b) => a.label.localeCompare(b.label))
                        .map((guarantee) => (
                          <TableRow
                            key={guarantee.insuranceGuaranteeId}
                            sx={{
                              '&:hover': { bgcolor: alpha(theme.palette.action.hover, 0.1) },
                            }}
                          >
                            <TableCell component="th" scope="row" sx={{ py: 1.5 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <VerifiedOutlinedIcon
                                  fontSize="small"
                                  color="primary"
                                  sx={{ mr: 1, opacity: 0.7 }}
                                />
                                {guarantee.label}
                              </Box>
                            </TableCell>
                            <TableCell align="right" sx={{ py: 1.5, fontWeight: 'medium' }}>
                              {formatGuaranteeValue(guarantee)}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/* Mobile Cards */}
              <Box sx={{ display: { xs: 'block', sm: 'none' }, p: 1 }}>
                {/* Mobile Header */}
                <Box sx={{
                  p: 1.5,
                  mb: 1,
                  borderRadius: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }}>
                  <Typography variant="subtitle2" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
                    Teminat Adı
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold" sx={{ fontSize: '0.875rem' }}>
                    Limit / Değer
                  </Typography>
                </Box>

                {selectedQuoteForModal.insuranceCompanyGuarantees
                  ?.filter(guarantee => {
                    // "Belirsiz" değerleri filtrele
                    const value = formatGuaranteeValue(guarantee);
                    return value !== 'Belirsiz';
                  })
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .map((guarantee) => (
                    <Card
                      key={guarantee.insuranceGuaranteeId}
                      sx={{
                        mb: 0.5,
                        p: 1.5,
                        '&:hover': { bgcolor: alpha(theme.palette.action.hover, 0.1) },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                          <VerifiedOutlinedIcon
                            fontSize="small"
                            color="primary"
                            sx={{ mr: 1, opacity: 0.7, flexShrink: 0 }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '0.8rem',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {guarantee.label}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          fontWeight="medium"
                          sx={{
                            fontSize: '0.8rem',
                            ml: 1,
                            flexShrink: 0
                          }}
                        >
                          {formatGuaranteeValue(guarantee)}
                        </Typography>
                      </Box>
                    </Card>
                  ))}
              </Box>
            </Box>
          ) : (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary" align="center">
                Bu teklif için detaylı teminat bilgisi bulunmamaktadır.
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{
          p: { xs: 1.5, sm: 2 },
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 1.5, sm: 0 }
        }}>
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            Teminat detayları sigorta şirketinin teklif belgesinden ve servislerinden alınan değerler aracılığıyla sunulmaktadır. Daha detaylı sorularınız için{' '}
            <a
              href={`tel:${agencyConfig.contact?.phone?.primary?.replace(/\s/g, '') || '05330864001'}`}
              style={{
                color: agencyConfig.theme.primaryColor,
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              {agencyConfig.contact?.phone?.primary || '+90 533 086 40 01'}
            </a>
            {' '}numaralı telefon numarasından müşteri temsilcilerimize ulaşabilirsiniz.
          </Typography>

          <Box>
            <Button
              variant="outlined"
              onClick={handleCloseModal}
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1,
                borderColor: agencyConfig.theme.primaryColor,
                color: agencyConfig.theme.primaryColor,
                '&:hover': {
                  borderColor: agencyConfig.theme.primaryColor,
                  bgcolor: alpha(agencyConfig.theme.primaryColor, 0.05),
                },
                width: { xs: '100%', sm: '160px' },
                whiteSpace: 'nowrap',
                fontSize: '0.875rem',
                fontWeight: 600
              }}
            >
              Kapat
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      {/* Quote Comparison Modal */}
      <QuoteComparisonModal
        open={isComparisonModalOpen}
        onClose={() => setIsComparisonModalOpen(false)}
        quotes={convertTssQuotesToComparisonFormat(quotes.filter(q => q.state === 'ACTIVE'))}
        title="TSS"
        maxQuotes={3}
      />
    </>
  );
}
