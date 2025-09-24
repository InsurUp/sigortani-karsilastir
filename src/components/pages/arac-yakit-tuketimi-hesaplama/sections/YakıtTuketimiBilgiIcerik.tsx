import React from 'react'

const fuelTypes = [
  { type: "Benzin", consumption: "6-12 L/100km", cost: "32-35 TL/L" },
  { type: "Dizel", consumption: "5-10 L/100km", cost: "30-33 TL/L" },
  { type: "LPG", consumption: "8-15 L/100km", cost: "18-20 TL/L" },
  { type: "Elektrik", consumption: "15-25 kWh/100km", cost: "2-4 TL/kWh" }
]

const fuelSavingTips = [
  {
    title: "Sürüş Teknikleri",
    tips: [
      "Düşük devirde sürün (2000-2500 RPM)",
      "Ani fren ve gazlamalardan kaçının",
      "Sabit hızda sürün",
      "Vites değişimlerini zamanında yapın"
    ]
  },
  {
    title: "Araç Bakımı",
    tips: [
      "Motor yağını düzenli değiştirin",
      "Hava filtresini temiz tutun",
      "Lastik basıncını kontrol edin",
      "Klima filtrelerini değiştirin"
    ]
  },
  {
    title: "Yol Planlaması",
    tips: [
      "Trafik yoğunluğunu dikkate alın",
      "Kısa mesafeli yolculuklarda yürüyün",
      "Toplu taşıma kullanın",
      "Carpooling yapın"
    ]
  },
  {
    title: "Araç Seçimi",
    tips: [
      "Yakıt tasarruflu modelleri tercih edin",
      "Hibrit veya elektrikli araçları değerlendirin",
      "Araç boyutunu ihtiyacınıza göre seçin",
      "Aerodinamik tasarıma sahip araçları seçin"
    ]
  }
]

const vehicleCategories = [
  {
    category: "Küçük Otomobil",
    examples: "Fiat 500, Renault Clio, VW Polo",
    consumption: "5-7 L/100km",
    description: "Şehir içi kullanım için ideal, düşük yakıt tüketimi"
  },
  {
    category: "Orta Boy Otomobil",
    examples: "Toyota Corolla, VW Golf, Ford Focus",
    consumption: "6-8 L/100km",
    description: "Günlük kullanım için uygun, dengeli performans"
  },
  {
    category: "Büyük Otomobil",
    examples: "BMW 3 Serisi, Mercedes C-Class, Audi A4",
    consumption: "7-10 L/100km",
    description: "Konforlu sürüş, orta-yüksek yakıt tüketimi"
  },
  {
    category: "SUV",
    examples: "Toyota RAV4, VW Tiguan, Ford Kuga",
    consumption: "8-12 L/100km",
    description: "Yüksek yerden görüş, yüksek yakıt tüketimi"
  },
  {
    category: "Pick-up",
    examples: "Ford Ranger, Toyota Hilux, Isuzu D-Max",
    consumption: "9-15 L/100km",
    description: "Yük taşıma kapasitesi, yüksek yakıt tüketimi"
  },
  {
    category: "Elektrikli Araç",
    examples: "Tesla Model 3, BMW i3, Nissan Leaf",
    consumption: "15-25 kWh/100km",
    description: "Çevre dostu, düşük işletme maliyeti"
  }
]

export function YakıtTuketimiBilgiIcerik() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Yakıt Tüketimi Hesaplama Aracı */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç Yakıt Tüketimi Hesaplama Aracı
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Araç yakıt tüketimi hesaplama aracımız ile aracınızın yakıt maliyetini kolayca hesaplayabilirsiniz. <strong>Yakıt tüketimi hesaplama</strong> işlemi, araç sahiplerinin bütçe planlaması yapmasına yardımcı olur ve yakıt tasarrufu sağlamak için önemli bilgiler sunar.
            </p>
            <p className="text-lg text-gray-600">
              Hesaplama aracımız iki farklı yöntem sunar: <strong>Mesafe bazlı hesaplama</strong> ile belirli bir mesafede ne kadar yakıt tüketeceğinizi, <strong>Tüketim bazlı hesaplama</strong> ile belirli bir yakıt miktarıyla ne kadar mesafe kat edebileceğinizi öğrenebilirsiniz.
            </p>
          </div>

          {/* Yakıt Türleri ve Ortalama Tüketim */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Yakıt Türleri ve Ortalama Tüketim
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fuelTypes.map((fuel, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{fuel.type}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ortalama Tüketim:</span>
                      <span className="font-semibold text-blue-600">{fuel.consumption}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ortalama Fiyat:</span>
                      <span className="font-semibold text-green-600">{fuel.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Araç Kategorileri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Araç Kategorilerine Göre Yakıt Tüketimi
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Araç Kategorisi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Örnek Modeller</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ortalama Tüketim</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleCategories.map((vehicle, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{vehicle.category}</td>
                      <td className="border border-gray-300 px-4 py-3">{vehicle.examples}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{vehicle.consumption}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{vehicle.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yakıt Tasarrufu İpuçları */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Yakıt Tasarrufu İpuçları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fuelSavingTips.map((category, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hesaplama Yöntemleri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Yakıt Tüketimi Hesaplama Yöntemleri
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Mesafe Bazlı Hesaplama</h3>
                <p className="text-gray-700 mb-4">
                  Belirli bir mesafede ne kadar yakıt tüketeceğinizi hesaplar. Bu yöntem yolculuk öncesi bütçe planlaması için idealdir.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Hesaplama Formülü:</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Yakıt Miktarı = (Mesafe × Tüketim) ÷ 100</strong>
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Tüketim Bazlı Hesaplama</h3>
                <p className="text-gray-700 mb-4">
                  Belirli bir yakıt miktarıyla ne kadar mesafe kat edebileceğinizi hesaplar. Bu yöntem yakıt tankınızın ne kadar dayanacağını öğrenmek için kullanılır.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Hesaplama Formülü:</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Mesafe = (Yakıt Miktarı × 100) ÷ Tüketim</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Yakıt Tüketimini Etkileyen Faktörler */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Yakıt Tüketimini Etkileyen Faktörler
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4">Sürüş Faktörleri</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Hız (optimal 80-90 km/h)</li>
                  <li>• Fren ve gaz kullanımı</li>
                  <li>• Vites değişim zamanlaması</li>
                  <li>• Motor devri</li>
                  <li>• Klima kullanımı</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-4">Araç Faktörleri</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Motor hacmi ve tipi</li>
                  <li>• Araç ağırlığı</li>
                  <li>• Lastik basıncı</li>
                  <li>• Hava direnci</li>
                  <li>• Motor bakım durumu</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-4">Çevresel Faktörler</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Hava sıcaklığı</li>
                  <li>• Yol durumu</li>
                  <li>• Trafik yoğunluğu</li>
                  <li>• Yol eğimi</li>
                  <li>• Rüzgar durumu</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Yakıt Tüketimi Azaltma Stratejileri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Yakıt Tüketimi Azaltma Stratejileri
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Kısa Vadeli Stratejiler</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Düşük devirde sürüş yapın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Gereksiz ağırlıkları araçtan çıkarın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Lastik basıncını kontrol edin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Sabit hızda sürün</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Uzun Vadeli Stratejiler</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Yakıt tasarruflu araç satın alın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Hibrit veya elektrikli araç değerlendirin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Düzenli araç bakımı yaptırın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Toplu taşıma kullanımını artırın</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Çevresel Etki */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Yakıt Tüketimi ve Çevresel Etki
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Yakıt tüketimi sadece ekonomik bir maliyet değil, aynı zamanda çevresel bir sorumluluktur. <strong>Yakıt tasarrufu</strong> yaparak hem bütçenize hem de çevreye katkıda bulunabilirsiniz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-100 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="text-lg font-bold text-green-800 mb-2">CO2 Azaltma</h3>
                <p className="text-sm text-gray-700">Her 1 L yakıt tasarrufu ≈ 2.3 kg CO2 azaltma</p>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Ekonomik Tasarruf</h3>
                <p className="text-sm text-gray-700">Aylık ortalama 200-500 TL tasarruf</p>
              </div>
              
              <div className="bg-purple-100 rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🔧</div>
                <h3 className="text-lg font-bold text-purple-800 mb-2">Araç Performansı</h3>
                <p className="text-sm text-gray-700">Motor ömrü uzar, bakım maliyeti azalır</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


