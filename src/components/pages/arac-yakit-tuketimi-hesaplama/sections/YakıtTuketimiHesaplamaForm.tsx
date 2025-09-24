'use client'

import React, { useState } from 'react'

interface FuelCalculationInfo {
  calculationMethod: string
  fuelPurchased: string
  distanceTraveled: string
  consumptionPerKm: string
}

interface CalculationResult {
  fuelConsumption: number
  fuelCost: number
  distanceTraveled: number
  currency: string
}

export function YakıtTuketimiHesaplamaForm() {
  const [fuelInfo, setFuelInfo] = useState<FuelCalculationInfo>({
    calculationMethod: '',
    fuelPurchased: '',
    distanceTraveled: '',
    consumptionPerKm: ''
  })
  
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: keyof FuelCalculationInfo, value: string) => {
    setFuelInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCalculate = async () => {
    if (!fuelInfo.calculationMethod || !fuelInfo.fuelPurchased || !fuelInfo.consumptionPerKm) {
      alert('Lütfen tüm alanları doldurunuz.')
      return
    }

    setIsLoading(true)
    
    // Simulated calculation - gerçek API entegrasyonu yapılabilir
    setTimeout(() => {
      const fuelPurchased = parseFloat(fuelInfo.fuelPurchased)
      const consumptionPerKm = parseFloat(fuelInfo.consumptionPerKm)
      const distanceTraveled = fuelInfo.distanceTraveled ? parseFloat(fuelInfo.distanceTraveled) : 100 // Default 100 km
      
      // Hesaplama mantığı
      let calculatedDistance = distanceTraveled
      let calculatedConsumption = consumptionPerKm
      
      if (fuelInfo.calculationMethod === 'mesafe') {
        // Mesafe bazlı hesaplama
        calculatedConsumption = (fuelPurchased / distanceTraveled) * 100 // 100 km başına litre
      } else if (fuelInfo.calculationMethod === 'tüketim') {
        // Tüketim bazlı hesaplama
        calculatedDistance = fuelPurchased / (consumptionPerKm / 100) // Yakıt tutarına göre mesafe
      }
      
      setResult({
        fuelConsumption: calculatedConsumption,
        fuelCost: fuelPurchased,
        distanceTraveled: calculatedDistance,
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
              Yakıt Tüketimi Hesaplama!
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hesaplama Yöntemi <span className="text-red-500">*</span>
                </label>
                <select
                  value={fuelInfo.calculationMethod}
                  onChange={(e) => handleInputChange('calculationMethod', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                >
                  <option value="">Hesaplama yöntemi seçiniz</option>
                  <option value="mesafe">Mesafe Bazlı Hesaplama</option>
                  <option value="tüketim">Tüketim Bazlı Hesaplama</option>
                </select>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Satın Alınan Yakıt Değeri (TL) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={fuelInfo.fuelPurchased}
                  onChange={(e) => handleInputChange('fuelPurchased', e.target.value)}
                  placeholder="Örn: 500"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kilometre (km) Başına Tüketim <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={fuelInfo.consumptionPerKm}
                  onChange={(e) => handleInputChange('consumptionPerKm', e.target.value)}
                  placeholder="Örn: 7.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kat Edilen Mesafe (km)
                </label>
                <input
                  type="number"
                  value={fuelInfo.distanceTraveled}
                  onChange={(e) => handleInputChange('distanceTraveled', e.target.value)}
                  placeholder="Örn: 100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              
              <div className="col-span-2 flex items-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-full">
                  <p className="text-sm text-blue-800">
                    <strong>Not:</strong> Mesafe alanını boş bırakırsanız varsayılan olarak 100 km hesaplanacaktır.
                  </p>
                </div>
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                  Yakıt Tüketimi Hesaplama Sonucu
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">100 km Başına Tüketim</h4>
                    <div className="text-2xl font-bold text-blue-700">
                      {result.fuelConsumption.toFixed(1)} L
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Toplam Yakıt Maliyeti</h4>
                    <div className="text-2xl font-bold text-green-700">
                      {result.fuelCost.toLocaleString('tr-TR')} {result.currency}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Kat Edilen Mesafe</h4>
                    <div className="text-2xl font-bold text-orange-700">
                      {result.distanceTraveled.toFixed(0)} km
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Hesaplama Detayları</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <strong>Seçilen Yöntem:</strong> {fuelInfo.calculationMethod === 'mesafe' ? 'Mesafe Bazlı' : 'Tüketim Bazlı'}
                    </div>
                    <div>
                      <strong>Yakıt Fiyatı:</strong> {result.fuelCost.toLocaleString('tr-TR')} TL
                    </div>
                    <div>
                      <strong>Ortalama Tüketim:</strong> {result.fuelConsumption.toFixed(1)} L/100km
                    </div>
                    <div>
                      <strong>Mesafe:</strong> {result.distanceTraveled.toFixed(0)} km
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


