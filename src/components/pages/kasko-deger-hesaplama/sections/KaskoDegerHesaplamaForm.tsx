'use client'

import React, { useState } from 'react'

interface VehicleInfo {
  brand: string
  modelYear: string
  model: string
}

interface CalculationResult {
  value: number
  currency: string
}

export function KaskoDegerHesaplamaForm() {
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    brand: '',
    modelYear: '',
    model: ''
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
    if (!vehicleInfo.brand || !vehicleInfo.modelYear || !vehicleInfo.model) {
      alert('Lütfen tüm alanları doldurunuz.')
      return
    }

    setIsLoading(true)
    
    // Simulated calculation - gerçek API entegrasyonu yapılabilir
    setTimeout(() => {
      const mockValue = Math.floor(Math.random() * 1000000) + 500000
      setResult({
        value: mockValue,
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
              Araç Kasko Değer Listesi
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aracınızın Markası <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleInfo.brand}
                  onChange={(e) => handleInputChange('brand', e.target.value)}
                  placeholder="Marka seçiniz"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aracınızın Model Yılı <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleInfo.modelYear}
                  onChange={(e) => handleInputChange('modelYear', e.target.value)}
                  placeholder="Model yılı seçiniz"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aracınızın Modeli <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={vehicleInfo.model}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                  placeholder="Model seçiniz"
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Araç Kasko Değeri
                </h3>
                <p className="text-gray-600 mb-3">
                  Aracınız için ortalama
                </p>
                <div className="text-3xl font-bold text-green-700 mb-4">
                  {result.value.toLocaleString('tr-TR')} {result.currency}
                </div>
                <p className="text-gray-600 mb-4">
                  tutarında hesaplanmıştır.
                </p>
                <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Kasko Teklifi Al
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
