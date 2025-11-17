# ProposalLoadingModal - Dinamik Loading Sistemi

## 📋 Genel Bakış

Tüm sigorta ürünleri için tek bir dinamik loading component. Smooth animasyonlar, requestAnimationFrame optimizasyonu ve config-driven yapı.

## ✨ Özellikler

- ✅ **0% → 95% Smooth Progress**: 60 saniyede linear ilerleme
- ✅ **95% → 100% Fast Completion**: API yanıtı gelince 4 saniyede tamamlama
- ✅ **Config-Driven**: Ürün bilgileri config'den dinamik çekilir
- ✅ **Performance Optimized**: requestAnimationFrame kullanımı
- ✅ **Responsive**: Tüm ekran boyutlarına uyumlu
- ✅ **Tek Component**: Tüm ürünler (kasko, trafik, dask, konut, tss, imm)
- ✅ **Ease-out Cubic**: Smooth completion animasyonu

## 📁 Dosya Yapısı

```
src/
├── components/
│   └── common/
│       ├── ProposalLoadingModal.tsx    # Ana component
│       └── ProposalLoadingModal.css    # Animasyonlar
├── store/
│   └── loadingStore.ts                 # Global state (Zustand)
└── config/
    └── loadingContent.ts               # Ürün metinleri
```

## 🚀 Kullanım

### 1. Form Adımında (Proposal Create)

```typescript
import { useLoadingStore } from '@/store/loadingStore';
import { getLoadingContent } from '@/config/loadingContent';

// Component içinde
const { startLoading } = useLoadingStore();

// Proposal create öncesi
const handleSubmit = async () => {
  const loadingContent = getLoadingContent('kasko');
  startLoading('kasko', loadingContent);
  
  // API çağrısı
  const response = await createProposal();
  
  // Yönlendirme (loading devam eder)
  router.push(`/kasko/quote-comparison/${proposalId}`);
};
```

### 2. Quote Comparison Sayfasında

```typescript
import { useLoadingStore } from '@/store/loadingStore';

// Component içinde
const { setFirstQuoteReceived } = useLoadingStore();

// İlk teklif geldiğinde
useEffect(() => {
  if (quotes.length > 0) {
    setFirstQuoteReceived(); // 95% → 100% animasyonu başlar
  }
}, [quotes]);
```

### 3. Layout'a Ekleme

```typescript
// src/app/(b2c)/layout.tsx
import ProposalLoadingModal from '@/components/common/ProposalLoadingModal';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ProposalLoadingModal />
    </>
  );
}
```

## ⚙️ Konfigürasyon

### Loading İçerikleri (`src/config/loadingContent.ts`)

```typescript
export const loadingContentMap: Record<string, LoadingContent> = {
  kasko: {
    title: 'Kasko Sigortası',
    description: 'Teklifleriniz hazırlanıyor...',
    loadingText: 'Sana özel en uygun teklif seçenekleri!',
  },
  trafik: {
    title: 'Trafik Sigortası',
    description: 'Teklifleriniz hazırlanıyor...',
    loadingText: 'En iyi fiyatları buluyoruz!',
  },
  // ... diğer ürünler
};
```

### Süre Ayarları (`ProposalLoadingModal.tsx`)

```typescript
const PROGRESS_DURATION = 60000;    // 60 saniye (0% → 95%)
const COMPLETION_DURATION = 4000;   // 4 saniye (95% → 100%)
```

## 🎬 Animasyon Akışı

### Faz 1: Normal İlerleme

```
Başlangıç: 0%
Hedef: 95%
Süre: 60 saniye
Fonksiyon: Linear interpolation
Teknoloji: requestAnimationFrame
```

**Kod:**
```typescript
const elapsed = Date.now() - startTime;
const newProgress = Math.min((elapsed / PROGRESS_DURATION) * 95, 95);
```

### Faz 2: Hızlı Tamamlama

```
Tetikleyici: setFirstQuoteReceived() çağrısı
Başlangıç: Mevcut progress (genelde 95%)
Hedef: 100%
Süre: 4 saniye
Fonksiyon: Ease-out cubic
```

**Kod:**
```typescript
const t = Math.min(elapsed / COMPLETION_DURATION, 1);
const easeOut = 1 - Math.pow(1 - t, 3);
const newProgress = startProgress + (100 - startProgress) * easeOut;
```

## 🎨 CSS Animasyonları

### Fade In Up (İçerik)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Fade In Down (Ikon)
```css
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Progress Bar
```css
.progress-bar {
  stroke: #4A90E2;
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
}
```

## 🧮 Matematik

### Dairesel Progress Hesaplama

```typescript
const radius = 54;
const circumference = 2 * Math.PI * radius; // ≈ 339.29
const strokeDashoffset = circumference * (1 - progress / 100);

// Örnek: %75'te
// strokeDashoffset = 339.29 * (1 - 0.75) = 84.82
```

### Ease-out Cubic Easing

```
f(t) = 1 - (1 - t)³

t=0   → f(0) = 0    (başlangıç)
t=0.5 → f(0.5) = 0.875  (hızlı ilerleme)
t=1   → f(1) = 1    (yavaşlayarak bitiş)
```

## 🔧 Özelleştirme

### 1. Süreleri Değiştirme

```typescript
// ProposalLoadingModal.tsx
const PROGRESS_DURATION = 45000;    // 45 saniye
const COMPLETION_DURATION = 3000;   // 3 saniye
```

### 2. Renkleri Değiştirme

```css
/* ProposalLoadingModal.css */
.progress-bar {
  stroke: #FF5722; /* Turuncu */
}

.loading-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 3. İkonları Değiştirme

```typescript
// ProposalLoadingModal.tsx
const getIconForProduct = (productType: string | null) => {
  switch (productType?.toLowerCase()) {
    case 'kasko':
      return <CustomKaskoIcon sx={{ fontSize: 60 }} />;
    // ...
  }
};
```

## 🎯 Store API

### loadingStore.ts

```typescript
interface LoadingState {
  isLoading: boolean;
  progress: number;
  content: LoadingContent | null;
  productType: string | null;
  hasFirstQuote: boolean;
  
  // Actions
  startLoading: (type, content) => void;
  setProgress: (progress) => void;
  setFirstQuoteReceived: () => void;
  stopLoading: () => void;
  reset: () => void;
}
```

### Kullanım Örnekleri

```typescript
// Loading başlat
startLoading('kasko', loadingContent);

// Progress manuel güncelle (genelde gerek yok)
setProgress(50);

// İlk teklif geldi
setFirstQuoteReceived();

// Loading'i durdur
stopLoading();

// State'i sıfırla
reset();
```

## 📊 State Akışı

```
Form Submit
    ↓
startLoading('kasko', content)
    ↓
isLoading = true, progress = 0
    ↓
Phase 1: 0% → 95% (60 saniye)
    ↓
API Response (ilk teklif)
    ↓
setFirstQuoteReceived()
    ↓
hasFirstQuote = true
    ↓
Phase 2: 95% → 100% (4 saniye)
    ↓
stopLoading()
    ↓
Modal kapanır
```

## 🐛 Troubleshooting

### Problem: Progress %95'te takılı kalıyor

**Sebep:** `setFirstQuoteReceived()` çağrılmamış

**Çözüm:**
```typescript
// Quote comparison'da
if (filteredQuotes.length > 0) {
  setFirstQuoteReceived();
}
```

### Problem: Animasyon çok hızlı

**Sebep:** PROGRESS_DURATION çok düşük

**Çözüm:**
```typescript
const PROGRESS_DURATION = 90000; // 90 saniye
```

### Problem: CSS animasyonları çalışmıyor

**Sebep:** CSS dosyası import edilmemiş

**Çözüm:**
```typescript
import './ProposalLoadingModal.css';
```

## 🚀 Performance

### requestAnimationFrame

- **60 FPS**: Smooth animasyon
- **Battery Efficient**: Tarayıcı optimize eder
- **Cleanup**: Component unmount'ta cancel edilir

```typescript
useEffect(() => {
  const animate = () => {
    updateProgress();
    animationFrameRef.current = requestAnimationFrame(animate);
  };
  
  animationFrameRef.current = requestAnimationFrame(animate);
  
  return () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };
}, []);
```

## 📱 Responsive

```css
@media (max-width: 600px) {
  .loading-container {
    padding: 1rem;
  }
  
  .progress-circle svg {
    width: 120px;
    height: 120px;
  }
}
```

## ✅ Checklist - Yeni Ürün Ekleme

- [ ] `loadingContent.ts`'e ürün ekle
- [ ] Form submit'te `startLoading()` çağır
- [ ] Quote comparison'da `setFirstQuoteReceived()` çağır
- [ ] Layout'ta modal ekli olduğundan emin ol
- [ ] Test et: Loading başlıyor mu?
- [ ] Test et: İlk teklif gelince tamamlanıyor mu?

## 🎓 Örnek Senaryo

```typescript
// 1. Kasko formu dolduruldu
const handleKaskoSubmit = async () => {
  const loadingContent = getLoadingContent('kasko');
  startLoading('kasko', loadingContent);
  // Loading: 0% → başladı
  
  const response = await createKaskoProposal();
  router.push(`/kasko/quote-comparison/${proposalId}`);
  // Loading: ~20% → devam ediyor
};

// 2. Quote comparison sayfası açıldı
useEffect(() => {
  const fetchQuotes = async () => {
    const quotes = await getQuotes();
    // Loading: ~60% → devam ediyor
    
    if (quotes.length > 0) {
      setFirstQuoteReceived();
      // Loading: 60% → 100% (4 saniyede)
    }
  };
}, []);

// 3. %100'e ulaştı → 300ms bekle → Modal kapandı
```

## 📝 Özet

- ✅ **Tek component** tüm ürünler için
- ✅ **Config-driven** metinler
- ✅ **Performance** optimized
- ✅ **Smooth** animasyonlar
- ✅ **Kolay** entegrasyon

**Kullanım:** 3 satır kod ile her ürüne entegre!

```typescript
const { startLoading } = useLoadingStore();
const loadingContent = getLoadingContent('kasko');
startLoading('kasko', loadingContent);
```


