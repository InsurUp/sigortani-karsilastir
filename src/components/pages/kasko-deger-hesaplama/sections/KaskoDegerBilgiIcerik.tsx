import React from 'react'

const vehicleData = [
  { code: '91517', brand: 'AUDI', type: 'A4 40 TDI 204 ADVANCED STRONIC PI', model: '2022', price: '1.650.854 ₺' },
  { code: '211590', brand: 'BMW', type: '116d 1.5 116 M SPORT', model: '2023', price: '1.274.000 ₺' },
  { code: '341232', brand: 'CITROEN', type: 'C5 AIRCROSS SHINEBOLD 1.5 BLUEHDI 130 S&S EAT8', model: '2023', price: '1.215.000 ₺' },
  { code: '341258', brand: 'CITROEN', type: 'C4 SHINE BOLD 1.2 PURETECH 155 EAT8 E6.3', model: '2023', price: '931.000 ₺' },
  { code: '532333', brand: 'FORD', type: 'FOCUS MCA TITANIUM 5 KAPI 1.0 MHEV EB 125 7AT', model: '2023', price: '1.110.000 ₺' },
  { code: '611224', brand: 'HONDA', type: 'CIVIC SEDAN 1.5 129 ECO AT ELEGANCE', model: '2022', price: '954.500 ₺' },
  { code: '902372', brand: 'MERCEDES', type: 'C 200 4MATIC FL 1.5 (184) AMG 9G-TRONIC', model: '2022', price: '1.927.000 ₺' },
  { code: '1001450', brand: 'TOFAS-FIAT', type: 'EGEA SEDAN URBAN 1.6 M.JET 130 DCT', model: '2023', price: '711.900 ₺' },
  { code: '1111505', brand: 'OPEL', type: 'CROSSLAND 1.5 DIZEL AT6 120 EDITION', model: '2022', price: '802.900 ₺' },
  { code: '1142182', brand: 'PEUGEOT', type: '2008 ACTIVE 1.5 BLUEHDI 130 EAT8', model: '2022', price: '880.000 ₺' },
  { code: '1221234', brand: 'RENAULT (OYAK)', type: 'CLIO JOY 1.0 TCE 90', model: '2022', price: '450.000 ₺' },
  { code: '1331233', brand: 'SKODA', type: 'SUPERB 1.5 TSI ACT 150 DSG ELITE', model: '2022', price: '996.833 ₺' },
  { code: '1331248', brand: 'SKODA', type: 'SCALA PREMIUM 1.5 TSI ACT 150 DSG', model: '2022', price: '821.833 ₺' },
  { code: '1441297', brand: 'TOYOTA', type: 'C-HR 1.8 HYBRID PASSION X-PACK E-CVT', model: '2023', price: '1.058.300 ₺' },
  { code: '1531528', brand: 'VOLKSWAGEN', type: 'GOLF 1.0 eTSI 110 DSG STYLE', model: '2022', price: '906.000 ₺' },
  { code: '1771284', brand: 'HYUNDAI', type: 'i20 1.0T 100 STYLE PLUS 7DCT', model: '2022', price: '525.000 ₺' },
  { code: '4451141', brand: 'DACIA', type: 'SANDERO STEPWAY COMFORT 1.0 TURBO ECO-G 100', model: '2022', price: '502.900 ₺' },
  { code: '8001125', brand: 'KIA', type: 'STONIC COOL 1.4 100 OV', model: '2022', price: '644.000 ₺' }
]

export function KaskoDegerBilgiIcerik() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Kasko Değer Listesi Nedir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kasko Değer Listesi Nedir?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Kaza sonrası aracınızda herhangi bir şekilde meydana gelen maddi zararların karşılanması konusunda sizlere yardımcı olan kasko sigortası, yaygın olarak kullanılmaktadır. <strong>Kasko değer listesi</strong> ise kasko sigortası için yapılan hesaplamalarda karşınıza çıkacak olan listedir.
              Sigortaladim.com üzerinden 2021 yılına ait kasko değer listesinin güncel haline göz atabilirsiniz.
            </p>
          </div>

          {/* Araç Kasko Değeri Nedir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç Kasko Değeri Nedir?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Tüm araç modellerinin içerisinde yer aldığı, her ay güncellenmiş bir liste hazırlanır ve bu liste yayınlanmadan önce Türkiye Sigortalar, Reasürans ve Emeklilik Şirketleri Birliği (TSB)'ince gözden geçirilir. Aracınıza kasko poliçesi düzenlenirken de bu listeden yararlanılır. Ancak buradaki değerler kesin değildir, <strong>araç kasko değeri</strong> daha çok güncel fiyatlar için bilgilendirme amaçlıdır.
            </p>
            <p className="text-lg text-gray-600">
              Aracınızın ikinci el veya sıfır olması fark etmeksizin bu liste esas alınır ve aracınıza sonradan dahil edilen, eklenen aksesuarlar araç kasko değerine dahil edilmez
            </p>
          </div>

          {/* Kasko Değeri Ne İşe Yarar? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kasko Değeri Ne İşe Yarar?
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Kasko değeri hesaplama</strong> işlemi yapılırken tüm araç modellerinin içerisinde yer aldığı bir fiyat listesi hazırlanır. Araç sahipleri de araçlarına kasko yaptırmak isterken bu listeye göre fiyatlar hakkında bilgi sahibi olur.
            </p>
          </div>

          {/* Araç Kasko Değeri Neye Göre Belirlenir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç Kasko Değeri Neye Göre Belirlenir?
            </h2>
            <p className="text-lg text-gray-600">
              Araç kasko değeri listesi Türkiye Sigortalar Birliği tarafından belirlenir. Bu liste; araçların model, marka ve üretim zamanına göre her ay sıralanan bir listedir. Bu liste hesaplanırken 15 yaş baz alınır ve daha eski yaş gruplarındaki arabaların kasko değerleri, sigorta edilen firmalarca belirlenir.
            </p>
          </div>

          {/* Araç Modellerine Göre Kasko Bedelleri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Araç Modellerine Göre Kasko Bedelleri
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Araç Kodu</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Marka</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Araç Tipi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Bedel</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleData.map((vehicle, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{vehicle.code}</td>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{vehicle.brand}</td>
                      <td className="border border-gray-300 px-4 py-3">{vehicle.type}</td>
                      <td className="border border-gray-300 px-4 py-3">{vehicle.model}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">{vehicle.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <p className="text-gray-600 italic">
                Kaynak: Veriler Türkiye Sigorta Birliği'nden alınmıştır.
              </p>
              <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                KASKO TEKLİFİ AL
              </button>
            </div>
            
            <p className="text-lg text-gray-600 mt-6">
              2025 yılına ait <strong>araç kasko değeri</strong> sorgulama için sigortaladim.com üzerinden istediğiniz aracın kasko değerine ulaşabilirsiniz.
            </p>
          </div>

          {/* Araç Kasko Değeri Nasıl Öğrenilir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç Kasko Değeri Nasıl Öğrenilir?
            </h2>
            <p className="text-lg text-gray-600">
              Araç kaskosu yapan tüm sigorta şirketlerinin zorunlu üye oldukları TSB tarafından araç kasko değeri belirlenir. Binek, arazi taşıtı, hafif ticari tüm araçların değerlerinin yer aldığı bu listeye bakarak herhangi bir <strong>aracın kasko değeri</strong> sorgulama işlemini yapabilirsiniz.
            </p>
          </div>

          {/* 3 Adımda Kasko Değeri Sorgulama */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              3 Adımda Kasko Değeri Sorgulama Nasıl Yapılır?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aracınızın sigorta değerini sorgulamak ve kasko bedeli hakkında detaylı bir bilgi alabilmek için Sigortaladım'dan kolayca <strong>araç kasko bedel sorgulama</strong> işlemlerinizi yapabilirsiniz.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Bilgilerini Gir</h3>
                <p className="text-lg text-gray-600">
                  Araç kasko değeri öğrenme aşamasında öncelikle kendi kişisel ve aracınıza yönelik bilgileri uygun boşluklara girmelisiniz. İlk etapta TC kimlik numaranızı, ad ve soyadınızı ilgili alanlara yazmalısınız. <strong>Plakadan araç kasko değeri sorgulama</strong> yapabilmek için tüm bilgilerinizi eksiksiz ve net bir şekilde doldurmalısınız.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Teklifleri Karşılaştır</h3>
                <p className="text-lg text-gray-600">
                  Karşınıza çıkabilecek olan sonuçları, farklı sigorta şirketlerini gözlemleyerek kendi aracınız için en iyi seçimi anında yapabilirsiniz. Aynı zamanda MTV yani <strong>motorlu taşıtlar vergisi kasko</strong> değer listesi üzerinden indirim imkanı da elde edebilirsiniz.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Satın Al</h3>
                <p className="text-lg text-gray-600">
                  Size ve aracınızın niteliğine uygun bir arama yaptıktan sonra karşılaştığınız fiyattan satın alma işlemi yapabilirsiniz. Her türlü aracın türü, modeli ve yılı bazında farklı fiyatlar söz konusu olmaktadır.
                </p>
              </div>
            </div>
          </div>

          {/* Avantajlar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              sigortaladim.com'dan Kasko Değer Listesi Sorgulamanın Avantajları
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">3 aşamalı sorgulama sistemi sayesinde hızlı bir şekilde teklif alabilir, zamandan tasarruf edebilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">Kolay ve sonuca yönelik sorgulama aşamaları sayesinde doğru bilgilere kolayca ulaşabilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">Emin ve güvenilir kaynaklardan bilgi aldığınızı bilerek, yanlış sonuçlardan kaçınabilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">Uygun fiyatlı ve avantajlı tüm teklif alternatiflerini tek seferde görüntüleyebilirsiniz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">Karşınıza çıkan teklifleri kolayca karşılaştırabilir, sigortaladım.com sayesinde mevcut olan herhangi bir alternatifi kaçırmamış olursunuz.</span>
              </li>
            </ul>
          </div>

          {/* Diğer Bilgiler */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Kasko Değer Listesi Ne Zaman Güncellenir?
              </h2>
              <p className="text-lg text-gray-600">
                Kasko şirketleri yayınlanan liste ile bağlı olduklarından bu liste her ay yenilenir.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Kasko Değeri ile MTV Arasındaki Bağlantı Nedir?
              </h2>
              <p className="text-lg text-gray-600">
                2005 senesinde söz konusu olmaya başlayan indirimli MTV politikası ile araçlara yönelik MTV'lerde <strong>araç kasko değeri hesaplanması</strong> mevcuttur. Motor hacmi ve yaşa bağlı olarak araçların MTV vergisi değişkenlik gösterebilir. Otomobilinizin veya ticari aranızın kasko değerinin %5'ini aşan fazla MTV geri alınabilecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


