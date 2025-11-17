export type OfflineFormConfigItem = {
  storageKey: string
  targetPath: string
  keywords: string[]
}

export const OFFLINE_FORM_CONFIG = {
  kasko: {
    storageKey: 'kaskoBannerPrefill',
    targetPath: '/kasko-teklif',
    keywords: ['kasko'],
  },
  trafik: {
    storageKey: 'trafikBannerPrefill',
    targetPath: '/trafik-teklif',
    keywords: ['trafik'],
  },
  dask: {
    storageKey: 'daskBannerPrefill',
    targetPath: '/dask-teklif',
    keywords: ['dask', 'deprem'],
  },
  konut: {
    storageKey: 'konutBannerPrefill',
    targetPath: '/konut-teklif',
    keywords: ['konut'],
  },
  imm: {
    storageKey: 'immBannerPrefill',
    targetPath: '/imm-teklif',
    keywords: ['imm'],
  },
  tss: {
    storageKey: 'tssBannerPrefill',
    targetPath: '/tss-teklif',
    keywords: ['tamamlayici', 'saglik', 'tss'],
  },
} as const satisfies Record<string, OfflineFormConfigItem>

export type OfflineFormKey = keyof typeof OFFLINE_FORM_CONFIG

export const resolveOfflineFormConfig = (slug?: string, name?: string) => {
  const normalizedSlug = slug?.toLowerCase() ?? ''
  const normalizedName = name?.toLowerCase() ?? ''

  for (const key of Object.keys(OFFLINE_FORM_CONFIG) as OfflineFormKey[]) {
    const config = OFFLINE_FORM_CONFIG[key]
    const matches = config.keywords.some(
      keyword =>
        (normalizedSlug && normalizedSlug.includes(keyword)) ||
        (normalizedName && normalizedName.includes(keyword))
    )

    if (matches) {
      return { key, config }
    }
  }

  return null
}

