'use client'

import React, { useState } from 'react'

interface AddressInfo {
  cityCode: string
  districtCode: string
  townshipAndVillageCode: string
  neighborhoodCode: string
  streetCode: string
  buildingCode: string
  addressCode: string
}

interface AddressResult {
  uavtCode: string
  fullAddress: string
  isFound: boolean
}

// Mock data for demonstration
const mockCities = [
  { code: '06', name: 'Ankara' },
  { code: '34', name: 'İstanbul' },
  { code: '35', name: 'İzmir' },
  { code: '07', name: 'Antalya' },
  { code: '16', name: 'Bursa' }
]

const mockDistricts: { [key: string]: Array<{ code: string, name: string }> } = {
  '06': [
    { code: '001', name: 'Altındağ' },
    { code: '002', name: 'Ayaş' },
    { code: '003', name: 'Bala' },
    { code: '004', name: 'Beypazarı' },
    { code: '005', name: 'Çamlıdere' }
  ],
  '34': [
    { code: '001', name: 'Adalar' },
    { code: '002', name: 'Bakırköy' },
    { code: '003', name: 'Beşiktaş' },
    { code: '004', name: 'Beykoz' },
    { code: '005', name: 'Beylikdüzü' }
  ]
}

export function DaskAdresKoduSorgulamaForm() {
  const [addressInfo, setAddressInfo] = useState<AddressInfo>({
    cityCode: '',
    districtCode: '',
    townshipAndVillageCode: '',
    neighborhoodCode: '',
    streetCode: '',
    buildingCode: '',
    addressCode: ''
  })
  
  const [result, setResult] = useState<AddressResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (field: keyof AddressInfo, value: string) => {
    setAddressInfo(prev => ({
      ...prev,
      [field]: value
    }))
    setError('')
  }

  const handleSearch = async () => {
    if (!addressInfo.cityCode || !addressInfo.districtCode) {
      setError('Lütfen en azından il ve ilçe bilgilerini giriniz.')
      return
    }

    setIsLoading(true)
    setError('')
    
    // Simulated search - gerçek API entegrasyonu yapılabilir
    setTimeout(() => {
      const mockUavtCode = Math.floor(Math.random() * 9000000000) + 1000000000 // 10 haneli kod
      const fullAddress = `${mockCities.find(c => c.code === addressInfo.cityCode)?.name || ''} ${mockDistricts[addressInfo.cityCode]?.find(d => d.code === addressInfo.districtCode)?.name || ''}`
      
      setResult({
        uavtCode: mockUavtCode.toString(),
        fullAddress,
        isFound: true
      })
      setIsLoading(false)
    }, 2000)
  }

  const copyToClipboard = async () => {
    if (result?.uavtCode) {
      try {
        await navigator.clipboard.writeText(result.uavtCode)
        alert('Adres kodu panoya kopyalandı!')
      } catch (err) {
        console.error('Kopyalama hatası:', err)
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
              DASK Adres Kodu Sorgulama
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İl <span className="text-red-500">*</span>
                </label>
                <select
                  value={addressInfo.cityCode}
                  onChange={(e) => {
                    handleInputChange('cityCode', e.target.value)
                    handleInputChange('districtCode', '') // Reset district when city changes
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                >
                  <option value="">İl seçiniz</option>
                  {mockCities.map((city) => (
                    <option key={city.code} value={city.code}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İlçe <span className="text-red-500">*</span>
                </label>
                <select
                  value={addressInfo.districtCode}
                  onChange={(e) => handleInputChange('districtCode', e.target.value)}
                  disabled={!addressInfo.cityCode}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:bg-gray-100"
                  required
                >
                  <option value="">İlçe seçiniz</option>
                  {addressInfo.cityCode && mockDistricts[addressInfo.cityCode]?.map((district) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bucak/Köy
                </label>
                <input
                  type="text"
                  value={addressInfo.townshipAndVillageCode}
                  onChange={(e) => handleInputChange('townshipAndVillageCode', e.target.value)}
                  placeholder="Bucak/Köy adı"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mahalle
                </label>
                <input
                  type="text"
                  value={addressInfo.neighborhoodCode}
                  onChange={(e) => handleInputChange('neighborhoodCode', e.target.value)}
                  placeholder="Mahalle adı"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sokak
                </label>
                <input
                  type="text"
                  value={addressInfo.streetCode}
                  onChange={(e) => handleInputChange('streetCode', e.target.value)}
                  placeholder="Sokak adı"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bina
                </label>
                <input
                  type="text"
                  value={addressInfo.buildingCode}
                  onChange={(e) => handleInputChange('buildingCode', e.target.value)}
                  placeholder="Bina numarası"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İç Kapı No
                </label>
                <input
                  type="text"
                  value={addressInfo.addressCode}
                  onChange={(e) => handleInputChange('addressCode', e.target.value)}
                  placeholder="Daire numarası"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <div className="text-center mb-8">
              <button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sorgulanıyor...' : 'Adres Kodu Sorgula'}
              </button>
            </div>

            {result && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                  Adres Kodu Sorgulama Sonucu
                </h3>
                
                <div className="bg-white rounded-lg p-6 mb-4">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tam Adres:</h4>
                    <p className="text-gray-700">{result.fullAddress}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">10 Haneli UAVT Adres Kodu:</h4>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 px-4 py-3 rounded-lg flex-1">
                        <span className="text-2xl font-mono font-bold text-blue-600">
                          {result.uavtCode}
                        </span>
                      </div>
                      <button
                        onClick={copyToClipboard}
                        className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Kopyala
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Not:</strong> Bu adres kodu DASK sigortası için gerekli olan UAVT (Ulusal Adres Veri Tabanı) adres kodudur.
                  </p>
                </div>
                
                <div className="text-center">
                  <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    DASK Teklifi Al
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">UAVT Adres Kodu Harita Üzerinden</h3>
              <p className="text-blue-700 mb-4">
                UAVT adres kodunuzu harita üzerinden öğrenmek için resmi Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü sitesini ziyaret edebilirsiniz.
              </p>
              <a
                href="https://adres.nvi.gov.tr/VatandasIslemleri/AdresSorgu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                UAVT Resmi Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

