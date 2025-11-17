export enum InsuranceCompany {
  DiğerSigortaŞirketi = -1,
  TümSigortaŞirketleri = 0,
  EurekoSigorta = 2,
  AnadoluSigorta = 7,
  GroupamaSigorta = 11,
  UnicoSigorta = 17,
  GeneraliSigorta = 25,
  GüneşSigorta = 26,
  AcibademSigorta = 27,
  GroupamaEmeklilik = 28,
  AnkaraSigorta = 37,
  Magdeburger = 36,
  RaySigorta = 42,
  DogaSigorta = 43,
  AllianzSigorta = 45,
  NipponSigorta = 51,
  HDISigorta = 54,
  ErgoSigorta = 55,
  ZurichSigorta = 56,
  BereketSigorta = 57,
  SompoJapanSigorta = 61,
  DubaiStarrSigorta = 63,
  OrientSigorta = 64,
  AIGSigorta = 65,
  VakifEmeklilik = 82,
  NeovaSigorta = 93,
  GulfSigorta = 94,
  AXASigorta = 95,
  KoruSigorta = 96,
  MapfreSigorta = 99,
  AKSigorta = 100,
  FibaEmeklilik = 101,
  HalkSigorta = 102,
  BereketEmeklilik = 103,
  AtlasMutluelSigorta = 108,
  ImeceDestek = 10000,
  QuickSigorta = 110,
  BereketKatilimSigorta = 113,
  BereketKatilimHayat = 114,
  AnaSigorta = 115,
  TurkiyeSigorta = 116,
  TürkiyeHayatEmeklilik = 117,
  GriSigorta = 118,
  PriveSigorta = 119,
  ArexSigorta = 120,
  HDIKatilimSigorta = 123,
  AveonSigorta = 124,
  HepiyiSigorta = 126,
  ACNTÜRKSİGORTAŞİRKETİ = 128,
  CardifSigorta = 1036,
  AtradiusSigorta = 1038,
  BNPParibasCardif = 1039,
  CorpusSigorta = 1041,
  MerkezSigorta = 1045,
  TmtSigorta = 1049
}

export const getInsuranceCompanyName = (id: number): string => {
  return InsuranceCompany[id] || 'Bilinmeyen Sigorta Şirketi';
};

export const getInsuranceCompanyId = (name: string): number => {
  return InsuranceCompany[name as keyof typeof InsuranceCompany] || -1;
};

/**
 * Config'ten coverageGroupIds'i döndürür
 * @param config - Agency config objesi
 * @param productType - Ürün tipi (kasko, trafik, dask, konut, tss, imm)
 * @returns coverageGroupIds array veya null
 */
export const getCoverageGroupIds = (
  config: any,
  productType: 'kasko' | 'trafik' | 'dask' | 'konut' | 'tss' | 'imm'
): string[] | null => {
  console.log('🔍 getCoverageGroupIds called:', {
    productType,
    configExists: !!config,
    coverageGroupIdsExists: !!config?.coverageGroupIds,
    value: config?.coverageGroupIds?.[productType]
  });
  
  const coverageGroupIds = config?.coverageGroupIds?.[productType];
  
  // Eğer array varsa ve içinde eleman varsa döndür, yoksa null
  if (Array.isArray(coverageGroupIds) && coverageGroupIds.length > 0) {
    console.log('✅ Returning coverageGroupIds:', coverageGroupIds);
    return coverageGroupIds;
  }
  
  console.log('❌ Returning null (no IDs found)');
  return null;
}; 