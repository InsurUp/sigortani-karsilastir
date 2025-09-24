'use client'

import React, { useState } from 'react'

interface VehicleInfo {
  vehicleType: string
  engineCapacity: string
  salePrice: string
}

interface CalculationResult {
  otv: number
  kdv: number
  totalTax: number
  currency: string
}

export function OtvKdvHesaplamaForm() {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    vehicleType: '',
    engineCapacity: '',
    salePrice: ''
  })
  
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: keyof VehicleInfo, value: string) => {
    setVehicleInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCalculate = async () => {
    if (!vehicleInfo.vehicleType || !vehicleInfo.engineCapacity || !vehicleInfo.salePrice) {
      alert('Lütfen tüm alanları doldurunuz.')
      return
    }

    setIsLoading(true)
    
    // Simulated calculation - gerçek API entegrasyonu yapılabilir
    setTimeout(() => {
      const salePrice = parseFloat(vehicleInfo.salePrice)
      const mockOtvRate = 0.45 // %45 ÖTV
      const mockKdvRate = 0.20 // %20 KDV
      
      const otv = salePrice * mockOtvRate
      const kdv = (salePrice + otv) * mockKdvRate
      const totalTax = otv + kdv
      
      setResult({
        otv,
        kdv,
        totalTax,
        currency: 'TL'
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
              ÖTV ve KDV Hesapla!
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Araç Türü <span className="text-red-500">*</span>
                </label>
                <select
                  value={vehicleInfo.vehicleType}
                  onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                >
                  <option value="">Araç türü seçiniz</option>
                  <option value="otomobil">Otomobil</option>
                  <option value="motosiklet">Motosiklet</option>
                  <option value="otobus">Otobüs</option>
                  <option value="minibus">Minibüs</option>
                  <option value="hibrit">Hibrit Araç</option>
                  <option value="elektrikli">Elektrikli Araç</option>
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motor Silindir Hacmi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleInfo.engineCapacity}
                  onChange={(e) => handleInputChange('engineCapacity', e.target.value)}
                  placeholder="Örn: 1600 cm³"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Araç Satış Fiyatı <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={vehicleInfo.salePrice}
                  onChange={(e) => handleInputChange('salePrice', e.target.value)}
                  placeholder="Vergisiz fiyat (TL)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={handleCalculate}
                disabled={isLoading}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Hesaplanıyor...' : 'Hesapla'}
              </button>
            </div>

            {result && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">
                  Vergi Hesaplama Sonucu
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">ÖTV</h4>
                    <div className="text-2xl font-bold text-blue-700">
                      {result.otv.toLocaleString('tr-TR')} {result.currency}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">KDV</h4>
                    <div className="text-2xl font-bold text-blue-700">
                      {result.kdv.toLocaleString('tr-TR')} {result.currency}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Toplam Vergi</h4>
                    <div className="text-2xl font-bold text-red-600">
                      {result.totalTax.toLocaleString('tr-TR')} {result.currency}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Sigorta Teklifi Al
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

