import React from 'react'

const binekAracData = [
  { 
    silindirHacmi: "1300 cm³ ve aşağısı", 
    taşıtDegeri: "180.600'ü aşmayanlar", 
    yas1_3: "3.359", yas4_6: "2.343", yas7_11: "1.308", yas12_15: "987", yas16: "347"
  },
  { 
    silindirHacmi: "1300 cm³ ve aşağısı", 
    taşıtDegeri: "180.600'ü aşıp 316.400'ü aşmayanlar", 
    yas1_3: "3.692", yas4_6: "2.576", yas7_11: "1.437", yas12_15: "1.088", yas16: "383"
  },
  { 
    silindirHacmi: "1300 cm³ ve aşağısı", 
    taşıtDegeri: "316.400'ü aşanlar", 
    yas1_3: "4.032", yas4_6: "2.809", yas7_11: "1.573", yas12_15: "1.188", yas16: "413"
  },
  { 
    silindirHacmi: "1301 - 1600cm³'e kadar", 
    taşıtDegeri: "180.600'ü aşmayanlar", 
    yas1_3: "5.851", yas4_6: "4.387", yas7_11: "2.544", yas12_15: "1.798", yas16: "690"
  },
  { 
    silindirHacmi: "1301 - 1600cm³'e kadar", 
    taşıtDegeri: "180.600'ü aşıp 316.400'ü aşmayanlar", 
    yas1_3: "6.439", yas4_6: "4.828", yas7_11: "2.801", yas12_15: "1.972", yas16: "754"
  },
  { 
    silindirHacmi: "1301 - 1600cm³'e kadar", 
    taşıtDegeri: "316.400'ü aşanlar", 
    yas1_3: "7.026", yas4_6: "5.265", yas7_11: "3.050", yas12_15: "2.153", yas16: "823"
  },
  { 
    silindirHacmi: "1601 - 1800cm³'e kadar", 
    taşıtDegeri: "452.800'ü aşmayanlar", 
    yas1_3: "11.374", yas4_6: "8.894", yas7_11: "5.227", yas12_15: "3.189", yas16: "1.235"
  },
  { 
    silindirHacmi: "1601 - 1800cm³'e kadar", 
    taşıtDegeri: "452.800'ü aşanlar", 
    yas1_3: "12.413", yas4_6: "9.697", yas7_11: "5.710", yas12_15: "3.484", yas16: "1.348"
  },
  { 
    silindirHacmi: "1801 - 2000cm³'e kadar", 
    taşıtDegeri: "452.800'ü aşmayanlar", 
    yas1_3: "17.920", yas4_6: "13.800", yas7_11: "8.111", yas12_15: "4.828", yas16: "1.898"
  },
  { 
    silindirHacmi: "1801 - 2000cm³'e kadar", 
    taşıtDegeri: "452.800'ü aşanlar", 
    yas1_3: "19.553", yas4_6: "15.061", yas7_11: "8.848", yas12_15: "5.265", yas16: "2.072"
  },
  { 
    silindirHacmi: "2001 - 2500cm³'e kadar", 
    taşıtDegeri: "565.500'ü aşmayanlar", 
    yas1_3: "26.885", yas4_6: "19.517", yas7_11: "12.193", yas12_15: "7.282", yas16: "2.880"
  },
  { 
    silindirHacmi: "2001 - 2500cm³'e kadar", 
    taşıtDegeri: "565.500'ü aşanlar", 
    yas1_3: "29.332", yas4_6: "21.290", yas7_11: "13.299", yas12_15: "7.948", yas16: "3.142"
  },
  { 
    silindirHacmi: "2501 - 3000cm³'e kadar", 
    taşıtDegeri: "1.131.800'ü aşmayanlar", 
    yas1_3: "37.485", yas4_6: "32.615", yas7_11: "20.373", yas12_15: "10.957", yas16: "4.016"
  },
  { 
    silindirHacmi: "2501 - 3000cm³'e kadar", 
    taşıtDegeri: "1.131.800'ü aşanlar", 
    yas1_3: "40.898", yas4_6: "35.575", yas7_11: "22.227", yas12_15: "11.955", yas16: "4.383"
  },
  { 
    silindirHacmi: "3001 - 3500cm³'e kadar", 
    taşıtDegeri: "1.131.800'ü aşmayanlar", 
    yas1_3: "57.093", yas4_6: "51.374", yas7_11: "30.944", yas12_15: "15.446", yas16: "5.657"
  },
  { 
    silindirHacmi: "3001 - 3500cm³'e kadar", 
    taşıtDegeri: "1.131.800'ü aşanlar", 
    yas1_3: "62.289", yas4_6: "56.039", yas7_11: "33.756", yas12_15: "16.845", yas16: "6.179"
  },
  { 
    silindirHacmi: "3501 - 4000cm³'e kadar", 
    taşıtDegeri: "1.811.800'ü aşmayanlar", 
    yas1_3: "89.767", yas4_6: "77.517", yas7_11: "45.649", yas12_15: "20.373", yas16: "8.111"
  },
  { 
    silindirHacmi: "3501 - 4000cm³'e kadar", 
    taşıtDegeri: "1.811.800'ü aşanlar", 
    yas1_3: "97.937", yas4_6: "84.560", yas7_11: "49.807", yas12_15: "22.227", yas16: "8.848"
  },
  { 
    silindirHacmi: "4001 cm³ ve yukarısı", 
    taşıtDegeri: "2.151.400'ü aşmayanlar", 
    yas1_3: "146.932", yas4_6: "110.177", yas7_11: "65.252", yas12_15: "29.326", yas16: "11.374"
  },
  { 
    silindirHacmi: "4001 cm³ ve yukarısı", 
    taşıtDegeri: "2.151.400'üaşanlar", 
    yas1_3: "160.285", yas4_6: "120.196", yas7_11: "71.186", yas12_15: "31.991", yas16: "12.413"
  }
]

const motosikletData = [
  { silindirHacmi: "100 - 250 cm3'e kadar", yas1_3: "625", yas4_6: "467", yas7_11: "345", yas12_15: "212", yas16: "80" },
  { silindirHacmi: "251 - 650 cm3'e kadar", yas1_3: "1.294", yas4_6: "979", yas7_11: "625", yas12_15: "345", yas16: "212" },
  { silindirHacmi: "651 - 1200 cm3'e kadar", yas1_3: "3.341", yas4_6: "1.985", yas7_11: "979", yas12_15: "625", yas16: "345" },
  { silindirHacmi: "1201 cm3 ve yukarısı", yas1_3: "8.106", yas4_6: "5.355", yas7_11: "3.341", yas12_15: "2.652", yas16: "1.294" }
]

const ticariAracData = [
  { araçTipi: "Minibüs", yas1_6: "4.016", yas7_15: "2.652", yas16: "1.294" },
  { araçTipi: "Panel van ve motorlu karavanlar (1900 cm3 ve aşağısı)", yas1_6: "5.355", yas7_15: "3.341", yas16: "1.985" },
  { araçTipi: "Panel van ve motorlu karavanlar (1901 cm3 ve yukarısı)", yas1_6: "8.106", yas7_15: "5.355", yas16: "3.341" },
  { araçTipi: "Otobüs (25 kişiye kadar)", yas1_6: "10.146", yas7_15: "6.059", yas16: "2.652" },
  { araçTipi: "Otobüs (26-35 kişiye kadar)", yas1_6: "12.168", yas7_15: "10.146", yas16: "4.016" },
  { araçTipi: "Otobüs (36-45 kişiye kadar)", yas1_6: "13.541", yas7_15: "11.485", yas16: "5.355" },
  { araçTipi: "Otobüs (46 kişi ve yukarısı)", yas1_6: "16.245", yas7_15: "13.541", yas16: "8.106" },
  { araçTipi: "Kamyonet, kamyon (1.500 kg.'a kadar)", yas1_6: "3.601", yas7_15: "2.392", yas16: "1.171" },
  { araçTipi: "Kamyonet, kamyon (1.501-3.500 kg'a kadar)", yas1_6: "7.295", yas7_15: "4.226", yas16: "2.392" },
  { araçTipi: "Kamyonet, kamyon (3.501-5.000 kg'a kadar)", yas1_6: "10.960", yas7_15: "9.122", yas16: "3.601" },
  { araçTipi: "Kamyonet, kamyon (5.001-10.000 kg'a kadar)", yas1_6: "12.168", yas7_15: "10.333", yas16: "4.844" },
  { araçTipi: "Kamyonet, kamyon (10.001-20.000 kg'a kadar)", yas1_6: "14.624", yas7_15: "12.168", yas16: "7.295" },
  { araçTipi: "Kamyonet, kamyon (20.001 kg ve yukarısı)", yas1_6: "18.292", yas7_15: "14.624", yas16: "8.498" }
]

const elektrikliData = [
  { kwAraligi: "70 kW ve aşağısı", taşıtDegeri: "114.000 TL'ye kadar", yas1_3: "530", yas4_6: "369", yas7_11: "206", yas12_15: "155", yas16: "54" },
  { kwAraligi: "70 kW ve aşağısı", taşıtDegeri: "114.000 TL ile 199.700 TL arası", yas1_3: "582", yas4_6: "406", yas7_11: "226", yas12_15: "171", yas16: "60" },
  { kwAraligi: "70 kW ve aşağısı", taşıtDegeri: "199.700 TL üzeri", yas1_3: "636", yas4_6: "443", yas7_11: "248", yas12_15: "187", yas16: "65" },
  { kwAraligi: "71 kW - 85 kW'e kadar", taşıtDegeri: "114.000 TL'ye kadar", yas1_3: "923", yas4_6: "692", yas7_11: "401", yas12_15: "283", yas16: "109" },
  { kwAraligi: "71 kW - 85 kW'e kadar", taşıtDegeri: "114.000 TL ile 199.700 TL arası", yas1_3: "1.016", yas4_6: "761", yas7_11: "442", yas12_15: "311", yas16: "119" },
  { kwAraligi: "71 kW - 85 kW'e kadar", taşıtDegeri: "199.700 TL üzeri", yas1_3: "1.018", yas4_6: "830", yas7_11: "481", yas12_15: "339", yas16: "130" },
  { kwAraligi: "86 kW - 105 kW'e kadar", taşıtDegeri: "285.800 TL'ye kadar", yas1_3: "1.794", yas4_6: "1.403", yas7_11: "824", yas12_15: "503", yas16: "195" },
  { kwAraligi: "86 kW - 105 kW'e kadar", taşıtDegeri: "285.800 TL üzeri", yas1_3: "1.958", yas4_6: "1.530", yas7_11: "901", yas12_15: "549", yas16: "212" },
  { kwAraligi: "106 kW - 120 KW'e kadar", taşıtDegeri: "285.800 TL'ye kadar", yas1_3: "2.827", yas4_6: "2.177", yas7_11: "1.279", yas12_15: "761", yas16: "299" },
  { kwAraligi: "106 kW - 120 KW'e kadar", taşıtDegeri: "285.800 TL üzeri", yas1_3: "3.085", yas4_6: "2.376", yas7_11: "1.396", yas12_15: "830", yas16: "327" },
  { kwAraligi: "120 kW - 150 kW'e kadar", taşıtDegeri: "356.900 TL'ye kadar", yas1_3: "4.241", yas4_6: "3.079", yas7_11: "1.923", yas12_15: "1.149", yas16: "454" },
  { kwAraligi: "120 kW - 150 kW'e kadar", taşıtDegeri: "356.900 TL üzeri", yas1_3: "4.627", yas4_6: "3.359", yas7_11: "2.098", yas12_15: "1.254", yas16: "495" },
  { kwAraligi: "151 kW - 180 kW'e kadar", taşıtDegeri: "714.300 TL'ye kadar", yas1_3: "5.914", yas4_6: "5.145", yas7_11: "3.214", yas12_15: "1.728", yas16: "633" },
  { kwAraligi: "151 kW - 180 kW'e kadar", taşıtDegeri: "714.300 TL üzeri", yas1_3: "6.452", yas4_6: "5.612", yas7_11: "3.506", yas12_15: "1.886", yas16: "691" },
  { kwAraligi: "180 kW - 210 kW'e kadar", taşıtDegeri: "714.300 TL'ye kadar", yas1_3: "9.007", yas4_6: "8.105", yas7_11: "4.882", yas12_15: "2.437", yas16: "892" },
  { kwAraligi: "180 kW - 210 kW'e kadar", taşıtDegeri: "714.300 TL üzeri", yas1_3: "9.827", yas4_6: "8.841", yas7_11: "5.325", yas12_15: "2.657", yas16: "975" },
  { kwAraligi: "211 kW - 240 kW'e kadar", taşıtDegeri: "1.143.400 TL'ye kadar", yas1_3: "14.162", yas4_6: "12.229", yas7_11: "7.202", yas12_15: "3.214", yas16: "1.279" },
  { kwAraligi: "211 kW - 240 kW'e kadar", taşıtDegeri: "1.143.400 TL üzeri", yas1_3: "15.451", yas4_6: "13.341", yas7_11: "7.858", yas12_15: "3.506", yas16: "1.396" },
  { kwAraligi: "241 kW ve üzeri", taşıtDegeri: "1.357.700 TL'ye kadar", yas1_3: "23.181", yas4_6: "17.382", yas7_11: "10.294", yas12_15: "4.626", yas16: "1.794" },
  { kwAraligi: "241 kW ve üzeri", taşıtDegeri: "1.357.700 TL üzeri", yas1_3: "25.288", yas4_6: "18.963", yas7_11: "11.231", yas12_15: "5.047", yas16: "1.958" }
]

export function MtvBilgiIcerik() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Araç MTV Hesaplama Aracı */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç MTV Hesaplama Aracı
            </h2>
            <p className="text-lg text-gray-600">
              Karayolları Trafik Kanunu kapsamında taşıtlardan vergi alınmaktadır. Bu vergiler taşıtın türüne göre ve daha birçok ayrıntıya göre değişiyor olup araç sahipleri ne kadar ödeme yapacağını merak etmektedir. <strong>Araç MTV hesaplama</strong> aracı ile saniyeler içinde vergi miktarını öğrenebilirsiniz.
            </p>
          </div>

          {/* MTV Nedir? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              MTV Nedir?
            </h2>
            <p className="text-lg text-gray-600">
              Motorlu Taşıtlar Vergisi olarak adlandırılan MTV, farklı araçlarca değişik miktarlarda ödenmektedir. İlgili aracın trafik sicil kaydı yapıldıktan sonra ödenir ve ayrıca bu sicil kaydı silinene kadar ödemek zorunludur. Taksitli şekilde ödenebilen bu vergi, ocak ve temmuz aylarında olmak üzere iki defada verilebilir.
            </p>
          </div>

          {/* MTV Hesaplaması Nasıl Yapılır? */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              MTV Hesaplaması Nasıl Yapılır?
            </h2>
            <p className="text-lg text-gray-600">
              MTV hesaplama işlemi gerçekleştirilirken göz önünde bazı ayrıntılar bulundurulmaktadır. Öncelikle aracın silindir hacmine bakılır. Otobüs için ise MTV hesaplanırken oturma kapasitesine dikkat edilir. Ayrıca yaşı da burada önemli bir unsurdur. Kamyon sahipleri ise ödeyecekleri verginin taşıtın yaşı yanı sıra maksimum toplam ağırlık değerinin de göz önünde bulundurularak hesaplama yapıldığını bilmelidir.
            </p>
          </div>

          {/* Binek Araç MTV Hesaplaması */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Binek Araç MTV Hesaplaması
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Binek araçlar için <strong>MTV hesaplama 2023</strong> yılına göre aşağıdaki tabloda gösterilmiştir. 1.1.2023 tarihinden itibaren uygulanması gereken vergi tutarları belirtilmiştir.
            </p>
            
            <h4 className="text-xl font-bold text-center mb-6">(I) Sayılı Tarife</h4>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Motor Silindir Hacmi</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Taşıt Değeri</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">1-3 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">4-6 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">7-11 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">12-15 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">16+ yaş</th>
                  </tr>
                </thead>
                <tbody>
                  {binekAracData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2">{item.silindirHacmi}</td>
                      <td className="border border-gray-300 px-2 py-2">{item.taşıtDegeri}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas1_3}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas4_6}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas7_11}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas12_15}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas16}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mb-8">
              Kaynak: <a href="https://www.resmigazete.gov.tr/eskiler/2020/12/20201229M1-7.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.resmigazete.gov.tr/eskiler/2020/12/20201229M1-7.htm
              </a>
            </p>
          </div>

          {/* Motosiklet MTV Hesaplaması */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">2- Motosikletler</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Motor Silindir Hacmi</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">1-3 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">4-6 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">7-11 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">12-15 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">16+ yaş</th>
                  </tr>
                </thead>
                <tbody>
                  {motosikletData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2">{item.silindirHacmi}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas1_3}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas4_6}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas7_11}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas12_15}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas16}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ticari Araç MTV Hesaplaması */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Ticari Araç MTV Hesaplaması
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              MTV hesaplama tablosu aracılığı ile ticari araçlar için belirtilen değerlere ve göz önünde bulundurulan özelliklere ulaşabilirsiniz. Ticari araç MTV hesaplama işleminde aracın oturma yeri tabloda da görüleceği üzere toplam ağırlık ile birlikte vergi tutarında belirleyici rol oynamaktadır.
            </p>
            
            <h4 className="text-xl font-bold text-center mb-6">(II) Sayılı Tarife</h4>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Taşıt Cinsi ve Özellikler</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">1-6 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">7-15 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">16+ yaş</th>
                  </tr>
                </thead>
                <tbody>
                  {ticariAracData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2">{item.araçTipi}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas1_6}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas7_15}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas16}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Elektrikli Araç MTV Hesaplaması */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Elektrikli Araç MTV Hesaplaması
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Elektrikli araç sahipleri aşağıda yer alan tabloda bulunan Resmi Gazete'de belirtilen değerler ile <strong>MTV ödeme hesaplama</strong> yaparak en güvenilir sonuca ulaşmaktadır. Uçak ve helikopterler <strong>elektrikli araç MTV hesaplama</strong> kategorisinde tarifelendirilir.
            </p>
            
            <h4 className="text-xl font-bold text-center mb-6">(IV) Sayılı Tarife</h4>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Kilowatt (kW) aralığı</th>
                    <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Araç Değeri (KDV Hariç)</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">1-3 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">4-6 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">7-11 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">12-15 yaş</th>
                    <th className="border border-gray-300 px-2 py-2 text-center font-semibold">16+ yaş</th>
                  </tr>
                </thead>
                <tbody>
                  {elektrikliData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-2 py-2">{item.kwAraligi}</td>
                      <td className="border border-gray-300 px-2 py-2">{item.taşıtDegeri}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas1_3}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas4_6}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas7_11}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas12_15}</td>
                      <td className="border border-gray-300 px-2 py-2 text-center font-semibold text-blue-600">{item.yas16}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MTV Bedelini Etkileyen Unsurlar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              MTV Bedelini Etkileyen Unsurlar
            </h2>
            <ul className="space-y-2 text-lg text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Aracın yaşı</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Silindir hacmi</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Toplam maksimum ağırlığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Oturma kapasitesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Taşıt değeri</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600">
              Gibi unsurlar göz önünde bulundurularak <strong>araç MTV değerleri</strong> hesaplanmaktadır.
            </p>
          </div>

          {/* Özel Durumlar */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Motorlu Taşıtlar Vergisi ile İlgili Özel Durumlar
            </h2>
            <p className="text-lg text-gray-600">
              Vergiden muaf olan motorlu taşıtlar da bulunmaktadır. Genel ve özel bütçeli idareler, belediye, sosyal güvenlik kurumları, köy tüzel kişilikleri, il özel idareleri, Türkiye Kızılay Derneği adına kaydedilmiş veya tescil edilmiş taşıtlar vergiden muaftır. Ayrıca Türkiye'de bulunan elçilik, konsolosluklar ve bunların yabancı uyruktaki memurlarına, görev için ülkeye gelen heyet, delege ve bunlara mensup yabancı uyruktakilere ait taşıtlar da muaftır. Engellilik oranı yüzde doksan veya daha fazla olan kişilerin adına kayıt edilmiş araçlar MTV'den muaftır.
            </p>
          </div>

          {/* Ödeme İşlemi */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              MTV Ödeme İşlemi
            </h2>
            <p className="text-lg text-gray-600">
              Gelir İdaresi Başkanlığı'nın borç ödeme sayfasından gerçekleştirilebilmektedir. Sorgulama yaparak araç kaydını görebilir ardından herhangi bir mobil ödeme kanalıyla işleminizi gerçekleştirebilirsiniz. Anlaşmalı bankalara ise GİB web sitesinde yer alan vergi tahsil yetkisi olan bankalar kısmından ulaşabilirsiniz.
            </p>
          </div>

          {/* Araç Yaşı Nasıl Hesaplanır */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Araç Yaşı Nasıl Hesaplanır?
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Araç MTV hesaplaması</strong> için yaşının belirlenmesi en önemli belirleyici unsurlardan birisidir. <strong>MTV araç yaşı hesaplama</strong> ve <strong>sıfır araç MTV hesaplama</strong> işlemleri için vergi ödemesinin ait olduğu yıldan aracın modelini çıkarıp ardından çıkan değere 1 ekleyerek araç yaşını hesaplayabilirsiniz. Örneğin 2021-2012(aracın modeli) + 1 = 10 şeklinde hesaplama yapılmaktadır.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

