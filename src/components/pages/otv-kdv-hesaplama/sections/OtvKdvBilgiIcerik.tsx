import React from 'react'

const otvKdvData = [
  { silindirHacmi: "1600 cm³'e kadar", vergisizTutar: "184.000 TL'ye kadar", otv: "%45", kdv: "%20" },
  { silindirHacmi: "1600 cm³'e kadar", vergisizTutar: "184.000 TL – 220.000 TL arası", otv: "%50", kdv: "%20" },
  { silindirHacmi: "1600 cm³'e kadar", vergisizTutar: "220.000 TL – 250.000 TL arası", otv: "%60", kdv: "%20" },
  { silindirHacmi: "1600 cm³'e kadar", vergisizTutar: "250.000 TL – 280.000 TL arası", otv: "%70", kdv: "%20" },
  { silindirHacmi: "1600 cm³'e kadar", vergisizTutar: "280.000 TL üzeri", otv: "%80", kdv: "%20" },
  { silindirHacmi: "1600 cm³ ile 2000 cm³ arası", vergisizTutar: "170.000 TL'ye kadar", otv: "%130", kdv: "%20" },
  { silindirHacmi: "1600 cm³ ile 2000 cm³ arası", vergisizTutar: "170.000 TL üzeri", otv: "%150", kdv: "%20" },
  { silindirHacmi: "2000 cm³ üzeri", vergisizTutar: "Tutar sınırı yok", otv: "%220", kdv: "%20" }
]

const motosikletData = [
  { silindirHacmi: "250 cm³'ü geçmeyen", otv: "%8", kdv: "%20" },
  { silindirHacmi: "250 cm³'ü geçen", otv: "%37", kdv: "%20" }
]

const topluTasimData = [
  { araçTipi: "Otobüs ÖTV ve KDV", otv: "%1", kdv: "%20" },
  { araçTipi: "Midibüs ÖTV ve KDV", otv: "%4", kdv: "%20" },
  { araçTipi: "Minibüs ÖTV ve KDV", otv: "%9", kdv: "%20" }
]

const hibritData = [
  { silindirHacmi: "50 kW'ı geçip, 1800 cm³'ü geçmeyen", vergisizTutar: "228.000 TL'ye kadar", otv: "%45", kdv: "%20" },
  { silindirHacmi: "50 kW'ı geçip, 1800 cm³'ü geçmeyen", vergisizTutar: "228.000 TL-350.000 TL arası", otv: "%50", kdv: "%20" },
  { silindirHacmi: "50 kW'ı geçip, 1800 cm³'ü geçmeyen", vergisizTutar: "350.000 TL üzeri", otv: "%80", kdv: "%20" },
  { silindirHacmi: "100 kW'ı geçip, 2000 cm³- 2500 cm³ arasında", vergisizTutar: "170.000 TL'ye kadar", otv: "%130", kdv: "%20" },
  { silindirHacmi: "100 kW'ı geçip, 2500 cm³'ü geçmeyen", vergisizTutar: "Tutar sınır yok", otv: "%150", kdv: "%20" },
  { silindirHacmi: "Diğerleri", vergisizTutar: "", otv: "%220", kdv: "%20" }
]

const elektrikliData = [
  { silindirHacmi: "160 kW'ı geçmeyen", otvMatrah: "1.450.000 TL'yi aşmayan", otv: "%10", kdv: "%20" },
  { silindirHacmi: "160 kW'ı geçmeyen", otvMatrah: "1.450.000 TL'yi aşan", otv: "%40", kdv: "%20" },
  { silindirHacmi: "160 kW üzeri", otvMatrah: "1.350.000 TL'yi aşmayan", otv: "%50", kdv: "%20" },
  { silindirHacmi: "160 kW üzeri", otvMatrah: "1.350.000 TL'yi aşan", otv: "%60", kdv: "%20" }
]

export function OtvKdvBilgiIcerik() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Araç ÖTV ve KDV Hesaplama Aracı */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç ÖTV ve KDV Hesaplama Aracı
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Araç satın alımında tüketiciler açısından önem arz eden unsurlar arasında ÖTV ve KDV yer almaktadır. Bu vergi uygulamaları, çeşitli etkenlere dayalı olarak farklılaşmakta; vergi oranları değişkenlik göstermektedir. Ayrıca bazı durumlarda vergi istisnaları da söz konusu olabilmektedir.
            </p>
            <p className="text-lg text-gray-600">
              Aracın satış fiyatı baz alınarak <strong>araç ÖTV hesaplama</strong> işlemi yapılmaktadır fakat bu satış fiyatı vergisiz fiyat üzerinden gerçekleştirilmektedir ve ayrıca motorun silindir hacmi de önemlidir. KDV hesaplamak istendiğinde ise araç bedelinin ve ÖTV miktarının mutlaka bilinmesi gerekmektedir.
            </p>
          </div>

          {/* ÖTV Nedir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ÖTV Nedir?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              2002 yılı 4760 sayılı kanunla kabul edilen ÖTV, Özel Tüketim Vergisi olarak adlandırılmaktadır. Belirli ürünlerden bir defalığına olmak üzere alınan vergi, genellikle sosyal fayda sağlamak amaçlı alınmaktadır. Avrupa Birliği'ne uyum kapsamında kabul edilen ÖTV, genellikle lüks olarak addedilen bazı ürünlerden, doğaya zararı olan ve sağlığı tehdit eden tüketim ürünlerinden alınmaktadır.
            </p>
            <ul className="space-y-2 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Lüks otomobil, mücevherat, kürk</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Sigara, alkol ürünleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Kömür, benzin</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Lüks mobilyalar ve beyaz eşyalar</span>
              </li>
            </ul>
          </div>

          {/* KDV Nedir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              KDV Nedir?
            </h2>
            <p className="text-lg text-gray-600">
              Dolaylı bir vergi çeşidi olan Katma Değer Vergisi kısaca yapılan mal ve hizmet karşılığında alınmaktadır. Malın veya hizmetin teslimi ardından hizmeti alan kişi bu vergiyi ödemektedir. Hizmeti alan kişi malı teslim alana bu bedeli ödemekle yükümlüdür. Tüketim vergisi olarak da adlandırılmaktadır. Mal ve hizmet bedeline ek olarak ödenmektedir.
            </p>
          </div>

          {/* Otomobil ÖTV ve KDV Hesaplama */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Otomobil ÖTV ve KDV Hesaplama
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Günümüzde en çok kullanılan ulaşım araçlarından biri olan otomobiller belli vergilere tabii tutulmaktadır. Bu vergilerin başında ÖTV ve KDV gelmektedir. Araç alımı yapmadan <strong>önce ÖTV KDV hesaplama</strong> yapılması için araçlar belli segmentlere ayrılmıştır.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Silindir Hacmi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Vergisiz Satış Tutarı</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ÖTV</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">KDV</th>
                  </tr>
                </thead>
                <tbody>
                  {otvKdvData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{item.silindirHacmi}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.vergisizTutar}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">{item.otv}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{item.kdv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mb-8">
              Kaynak: <a href="https://www.resmigazete.gov.tr/eskiler/2022/11/20221124-2.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.resmigazete.gov.tr/eskiler/2022/11/20221124-2.pdf
              </a>
            </p>
          </div>

          {/* Motosiklet ÖTV ve KDV Hesaplama */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Motosiklet ÖTV ve KDV Hesaplama
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Taşıt olarak günlük kullanımın diğer bir önemli parçası ise motosikletlerdir. Sitemizde motosikletiniz için <strong>araç ÖTV hesaplama aracı</strong> veya <strong>araç KDV hesaplama aracı</strong> bulabilirsiniz.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Silindir Hacmi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ÖTV</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">KDV</th>
                  </tr>
                </thead>
                <tbody>
                  {motosikletData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{item.silindirHacmi}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">{item.otv}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{item.kdv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Otobüs, Midibüs ve Minibüs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Otobüs, Midibüs ve Minibüs ÖTV ve KDV Hesaplama
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Toplu taşıma aracı olarak nitelendirilen Otobüs, Midibüs veya minibüslerin <strong>araç ÖTV oranları</strong> sosyal fayda gözetilerek uygun miktarlarda tutulmaktadır.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Araç Tipi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ÖTV</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">KDV</th>
                  </tr>
                </thead>
                <tbody>
                  {topluTasimData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{item.araçTipi}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">{item.otv}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{item.kdv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hibrit Araçlar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Elektrikli Motoru da Olan (Hibrit) Araçların ÖTV ve KDV Hesaplama
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aynı zamanda hem normal otomobil motoruna hem de elektrikli motora sahip olan bu araçlar son yıllarda yoğun olarak talep görmeye başladı. 6 farklı segmentte vergilendirilen bu araçları segmentlere ayırmak için hem motor hacmi hem de elektrikli motorun sahip olduğu güç hesaplamaya dahil edilmektedir.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Silindir Hacmi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Vergisiz Satış Tutarı</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ÖTV</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">KDV</th>
                  </tr>
                </thead>
                <tbody>
                  {hibritData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{item.silindirHacmi}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.vergisizTutar}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">{item.otv}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{item.kdv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Elektrikli Araçlar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Elektrikli Araçların ÖTV ve KDV Hesaplama
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ülkemizde ve dünyada yeni yaygınlaşmaya başlayan ve kullanım alanı giderek büyüyen tamamen elektrikli otomobiller <strong>sıfır araç ÖTV hesaplama</strong> noktasında 3 farklı segmentte vergilendiriliyorlar. Özellikle çevreye herhangi bir zarar vermediği için ülkemiz aracın kullanımını artırmak amacı ile vergilendirmeyi minimum seviyede tutmaktadır.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Silindir Hacmi</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ÖTV Matrah</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ÖTV</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">KDV</th>
                  </tr>
                </thead>
                <tbody>
                  {elektrikliData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{item.silindirHacmi}</td>
                      <td className="border border-gray-300 px-4 py-3">{item.otvMatrah}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">{item.otv}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{item.kdv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Özel Durumlar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç ÖTV Uygulamasında Özel Durumlar
            </h2>
            <p className="text-lg text-gray-600">
              Ülkemiz bazı durumlarda vatandaşlara pozitif ayrımcılık sağlamaktadır. Bu durum hayatın pek çok farklı alanında karşımıza çıkabilmektedir. Araç alım satım noktasında uygulanan pozitif ayrımcılık da engelli raporu olan kişiler ile şehit ve gazi yakınlarının ÖTV'siz araç alabilmesinin sağlanmasıdır. Bu durumda <strong>araç ÖTV fiyatları</strong> genel fiyattan düşülmekte ve bu kişilerin daha uygun fiyatlara araç sahibi olmalarının önü açılmaktadır.
            </p>
          </div>

          {/* Kullanım Kılavuzu */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Sigortaladim.com'dan Araç ÖTV ve KDV Hesaplama Aracı
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Aracınız için ÖTV ve KDV hesabı yapmak istiyorsanız hesaplama aracımızda izlemeniz gereken yol şu şekildedir:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">İlk olarak aracınızın hangi araç segmentine dahil olduğunu seçenekler arasında seçmelisiniz.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600"><strong>Araç ÖTV</strong> dilimleri motor hacmine göre farklılaştığı için ikinci kısımda aracınızın hangi motor hacmine sahip olduğunu belirtmeniz gerekmektedir.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span className="text-lg text-gray-600">Son olarak aracınızın tahmin edilen fiyatını yazarak aracınız için ne kadar vergilendirme uygulandığını rahatlıkla öğrenebilirsiniz.</span>
              </li>
            </ul>
          </div>

          {/* Engelli Araç İndirimi */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Engelli Araç İndirimi Nedir ve Kimler Faydalanabilir?
            </h2>
            <p className="text-lg text-gray-600">
              Pozitif ayrımcılığın en önemli ayaklarından biri olan engellilerin daha rahat bir hayat sürmeleri için yapılan <strong>engelli araç KDV indirimi</strong> son yıllarda daha fazla rağbet görmeye başladı. %40 üzeri engele sahip olan kişiler için uygulanan bu indirimler kendi içinde de farklı oranlara ayrılmaktadır. Bu indirimden faydalanmak için ilk olarak kişinin yetkili sağlık kuruluşunda engelinin oranını belirleyen bir belge alması gerekmektedir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

