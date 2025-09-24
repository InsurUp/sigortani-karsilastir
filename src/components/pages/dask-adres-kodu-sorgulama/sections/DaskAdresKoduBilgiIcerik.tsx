import React from 'react'

const daskBenefits = [
  {
    title: "Mali Koruma",
    description: "Deprem sonrası konutunuzun yeniden inşa edilmesi için gerekli mali desteği sağlar.",
    icon: "🏠"
  },
  {
    title: "Zorunlu Sigorta",
    description: "Tapu devri ve konut kredisi alımında zorunlu olan bir sigorta türüdür.",
    icon: "📋"
  },
  {
    title: "Devlet Garantisi",
    description: "TCIP (Türkiye Cumhuriyeti İçin Prim Ödeme) garantisi ile güvence altındadır.",
    icon: "🛡️"
  },
  {
    title: "Hızlı Tazminat",
    description: "Deprem sonrası hızlı tazminat ödemesi ile acil ihtiyaçlarınızı karşılar.",
    icon: "⚡"
  }
]

const uavtSteps = [
  {
    step: "1",
    title: "İl Seçimi",
    description: "Öncelikle konutunuzun bulunduğu ili seçiniz."
  },
  {
    step: "2", 
    title: "İlçe Seçimi",
    description: "Seçtiğiniz ile bağlı ilçeyi seçiniz."
  },
  {
    step: "3",
    title: "Detay Bilgiler",
    description: "Mahalle, sokak, bina ve daire numarası bilgilerini giriniz."
  },
  {
    step: "4",
    title: "Adres Kodu",
    description: "Sistem otomatik olarak 10 haneli UAVT adres kodunuzu oluşturur."
  }
]

const daskRequirements = [
  {
    category: "Zorunlu Durumlar",
    items: [
      "Tapu devri işlemleri",
      "Konut kredisi alımı",
      "İpotek işlemleri",
      "Noter işlemleri"
    ]
  },
  {
    category: "Önerilen Durumlar", 
    items: [
      "Konut sahibi olmak",
      "Deprem riski yüksek bölgeler",
      "Değerli konutlar",
      "Aile güvenliği"
    ]
  }
]

const premiumFactors = [
  {
    factor: "Konut Değeri",
    description: "Konutunuzun piyasa değeri prim hesaplamasında temel faktördür.",
    impact: "Yüksek"
  },
  {
    factor: "Deprem Riski",
    description: "Bölgenizin deprem riski ve zemin yapısı prim miktarını etkiler.",
    impact: "Yüksek"
  },
  {
    factor: "Konut Türü",
    description: "Müstakil, daire, villa gibi konut türü prim hesaplamasında rol oynar.",
    impact: "Orta"
  },
  {
    factor: "İnşaat Yılı",
    description: "Konutunuzun inşaat yılı deprem dayanımı açısından önemlidir.",
    impact: "Orta"
  },
  {
    factor: "Kat Sayısı",
    description: "Binanın kat sayısı ve konutunuzun bulunduğu kat prim hesaplamasını etkiler.",
    impact: "Düşük"
  }
]

export function DaskAdresKoduBilgiIcerik() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* DASK Adres Kodu Sorgulama */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              DASK Adres Kodu Sorgulama
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              DASK (Doğal Afet Sigortaları Kurumu) adres kodu sorgulama aracımız ile konutunuzun <strong>UAVT (Ulusal Adres Veri Tabanı) adres kodunu</strong> kolayca öğrenebilirsiniz. Bu adres kodu, DASK sigortası için gerekli olan temel bilgilerden biridir.
            </p>
            <p className="text-lg text-gray-600">
              <strong>Adres kodu sorgulama</strong> işlemi ile konutunuzun tam adres bilgilerine ulaşarak DASK sigortası için gerekli tüm bilgileri tamamlayabilirsiniz. UAVT adres kodu, konutunuzun coğrafi konumunu ve adres bilgilerini dijital ortamda temsil eden 10 haneli bir koddur.
            </p>
          </div>

          {/* DASK Nedir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              DASK Nedir?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              DASK (Doğal Afet Sigortaları Kurumu), 1999 Marmara Depremi sonrasında kurulan ve deprem, sel, toprak kayması gibi doğal afetlerden kaynaklanan hasarları karşılayan zorunlu bir sigorta sistemidir. <strong>DASK sigortası</strong>, konut sahiplerini doğal afetlerden korumak ve mali güvencelerini sağlamak amacıyla tasarlanmıştır.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {daskBenefits.map((benefit, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* UAVT Adres Kodu Nasıl Alınır? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              UAVT Adres Kodu Nasıl Alınır?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              UAVT (Ulusal Adres Veri Tabanı) adres kodu almak için aşağıdaki adımları takip edebilirsiniz:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uavtSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DASK Sigortası Ne Zaman Zorunlu? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              DASK Sigortası Ne Zaman Zorunlu?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              DASK sigortası belirli durumlarda zorunlu olup, bazı durumlarda da gönüllü olarak yaptırılması önerilir:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {daskRequirements.map((requirement, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {requirement.category}
                  </h3>
                  <ul className="space-y-2">
                    {requirement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* DASK Prim Hesaplama Faktörleri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              DASK Prim Hesaplama Faktörleri
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              DASK sigortası prim miktarı, konutunuzun özelliklerine ve bulunduğu bölgenin risk faktörlerine göre hesaplanır. İşte prim hesaplamasını etkileyen temel faktörler:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Faktör</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Açıklama</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Etki Derecesi</th>
                  </tr>
                </thead>
                <tbody>
                  {premiumFactors.map((factor, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{factor.factor}</td>
                      <td className="border border-gray-300 px-4 py-3">{factor.description}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          factor.impact === 'Yüksek' ? 'bg-red-100 text-red-800' :
                          factor.impact === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {factor.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DASK Sigortası Avantajları */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              DASK Sigortası Avantajları
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-bold text-green-800 mb-3">Ekonomik Koruma</h3>
                <p className="text-gray-700">Deprem sonrası konutunuzun yeniden inşa maliyetini karşılar ve ailenizin mali güvenliğini sağlar.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-blue-800 mb-3">Hızlı Tazminat</h3>
                <p className="text-gray-700">Hasarlı konutlar için hızlı tazminat ödemesi ile acil ihtiyaçlarınızı karşılar.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-bold text-purple-800 mb-3">Devlet Garantisi</h3>
                <p className="text-gray-700">TCIP garantisi ile devlet güvencesi altında olan güvenilir bir sigorta sistemidir.</p>
              </div>
            </div>
          </div>

          {/* DASK Başvuru Süreci */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              DASK Başvuru Süreci
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Gerekli Belgeler</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Tapu senedi veya kira sözleşmesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Kimlik belgesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">UAVT adres kodu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span className="text-gray-700">Konut değer bilgisi</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Başvuru Kanalları</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Anlaşmalı sigorta şirketleri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">DASK resmi web sitesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Sigortaladım.com üzerinden</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      <span className="text-gray-700">Telefon ile başvuru</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Önemli Bilgiler */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Önemli Bilgiler
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-4">⚠️ Dikkat Edilmesi Gerekenler</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>DASK sigortası sadece konutlar için geçerlidir, işyerleri için farklı sigorta türleri bulunmaktadır.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>UAVT adres kodu güncel olmalıdır, adres değişikliklerinde güncelleme yapılması gereklidir.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>DASK primleri yıllık olarak ödenir ve sigorta süresi 1 yıldır.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Deprem dışındaki doğal afetler (sel, toprak kayması) için ek teminatlar alınabilir.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

