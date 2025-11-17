import { LoadingContent } from '@/store/loadingStore';

export const loadingContentMap: Record<string, LoadingContent> = {
  kasko: {
    title: 'Kasko Sigortası',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  },
  trafik: {
    title: 'Trafik Sigortası',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  },
  dask: {
    title: 'DASK Sigortası',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  },
  konut: {
    title: 'Konut Sigortası',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  },
  tss: {
    title: 'Tamamlayıcı Sağlık Sigortası',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  },
  imm: {
    title: 'İMM Sigortası',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  },
};

export const getLoadingContent = (productType: string): LoadingContent => {
  return loadingContentMap[productType.toLowerCase()] || {
    title: 'Sigorta Teklifi',
    description: 'Teklifleriniz hazırlanıyor. Sigorta şirketlerinden gelen fırsatları senin için özenle bir araya getiriyoruz.',
    loadingText: 'Sana özel en uygun teklif seçeneklerini kaçırma!',
  };
};


