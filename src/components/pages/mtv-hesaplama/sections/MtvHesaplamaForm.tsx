'use client'

import React, { useState } from 'react'

interface VehicleInfo {
  vehicleType: string
  engineCapacity: string
  vehicleAge: string
  registrationYear: string
}

interface CalculationResult {
  mtvAmount: number
  currency: string
}

export function MtvHesaplamaForm() {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    vehicleType: '',
    engineCapacity: '',
    vehicleAge: '',
    registrationYear: ''
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
    if (!vehicleInfo.vehicleType || !vehicleInfo.engineCapacity || !vehicleInfo.vehicleAge) {
      alert('Lütfen tüm alanları doldurunuz.')
      return
    }

    setIsLoading(true)
    
    // Simulated calculation - gerçek API entegrasyonu yapılabilir
    setTimeout(() => {
      const mockMtvAmount = Math.floor(Math.random() * 50000) + 5000
      
      setResult({
        mtvAmount: mockMtvAmount,
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
              Araç MTV Hesapla!
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  <option value="kamyon">Kamyon</option>
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
                  Aracın Yaşı <span className="text-red-500">*</span>
                </label>
                <select
                  value={vehicleInfo.vehicleAge}
                  onChange={(e) => handleInputChange('vehicleAge', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                >
                  <option value="">Yaş aralığı seçiniz</option>
                  <option value="1-3">1 - 3 yaş</option>
                  <option value="4-6">4 - 6 yaş</option>
                  <option value="7-11">7 - 11 yaş</option>
                  <option value="12-15">12 - 15 yaş</option>
                  <option value="16+">16 ve yukarı yaş</option>
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aracın İlk Tescil Tarihi
                </label>
                <input
                  type="number"
                  value={vehicleInfo.registrationYear}
                  onChange={(e) => handleInputChange('registrationYear', e.target.value)}
                  placeholder="Örn: 2020"
                  min="1990"
                  max="2024"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  MTV Hesaplama Sonucu
                </h3>
                <p className="text-gray-600 mb-4">
                  Aracınız için yıllık MTV tutarı
                </p>
                <div className="text-4xl font-bold text-green-700 mb-4">
                  {result.mtvAmount.toLocaleString('tr-TR')} {result.currency}
                </div>
                <p className="text-gray-600 mb-4">
                  olarak hesaplanmıştır.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Not:</strong> Bu tutar ocak ve temmuz aylarında 2 taksit halinde ödenebilir.
                  </p>
                </div>
                <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Sigorta Teklifi Al
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


