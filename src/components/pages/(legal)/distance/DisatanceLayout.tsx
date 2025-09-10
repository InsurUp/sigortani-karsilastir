import { Banner } from "@/components/common/banner/Banner"
import { getSiteUrl, getSiteName } from '@/utils/site'

function DisatanceLayout() {
    return (
        <>
            <Banner text="Mesafeli Satış Sözleşmesi" />
            <section>
                <div className="container">
                    <article>


                        <h1 className="text-center mb-3 text-2xl font-bold text-gray-800">MESAFELİ SATIŞ SÖZLEŞMESİ</h1>
                        <h2>MADDE 1: TARAFLAR</h2>
                        <p>
                            İşbu sözleşme <a href="{getSiteUrl()}">{getSiteUrl().replace('https://', '').replace('http://', '')}</a> internet siteleri üzerinden sigorta ve bireysel emeklilik ürünü satın almak isteyen ALICI ile SATICI arasında aşağıdaki hüküm ve koşullar dahilinde akdedilmiştir.
                        </p>

                        <h2>MADDE 2: KONU</h2>
                        <p>
                            İşbu mesafeli satış sözleşmesinin konusu, ARACI’ya ait <a href="{getSiteUrl()}">{getSiteUrl().replace('https://', '').replace('http://', '')}</a> (bundan sonra “Web-Sitesi” olarak anılacaktır.) internet sitesi üzerinden ARACI’nın ALICI’ya sunacağı, anlaşmalı olduğu sigorta şirketlerine ait sigorta ürünlerine ilişkin teklif, poliçe ve elektronik ortamda mesafeli olarak satış hizmetiyle ilgili tarafların 6502 sayılı Tüketicinin Korunması Hakkında Kanun, Mesafeli Sözleşmeler Yönetmeliği, 28982 sayılı Sigortacılık Kapsamında Değerlendirilecek Faaliyetlere, Tüketici Lehine Yapılan Sigorta Sözleşmeleri İle Mesafeli Akdedilen Sigorta Sözleşmelerine İlişkin Yönetmelik (beraber “Mevzuat” olarak anılacaktır.) çerçevesinde hak ve yükümlülüklerin belirlenmesidir.
                        </p>
                        <p>
                            ALICI, işbu sözleşmeyi okuduğunu ve kabul ettiğini onaylamadan, sonraki adımlara geçemeyecek ve poliçe teklifi ve elektronik ortamda mesafeli olarak sigorta ürünü satın alım işlemlerini gerçekleştiremeyecektir.
                        </p>
                        <p>
                            ALICI, ARACI’nın isim, unvan, açık adres, telefon ve diğer erişim bilgileri, satışa konu sigorta ürününün temel nitelikleri, vergiler dâhil olmak üzere satış fiyatı, ödeme şekli, teslimat ve iade koşulları ve masrafları vs. satışa konu mal ile ilgili tüm ön bilgiler ve “cayma” hakkının kullanılması ve bu hakkın nasıl kullanılacağı, şikâyet ve itirazlarını iletebilecekleri resmi makamlar vs. konusunda açık, anlaşılır ve internet ortamına uygun şekilde ARACI tarafından bilgilendirildiğini, bu önbilgileri elektronik ortamda teyit ettiğini ve sonrasında sigorta ürünü aldığını işbu Sözleşme hükümleri çerçevesinde kabul, beyan ve taahhüt eder.
                        </p>
                        <p>
                            ALICI, ARACI’nın poliçe teklifi ve satışı işlemleri için ve bu amaçla sınırlı olmak üzere kişisel verilerini işleme yetkisi verdiğini kabul ve beyan etmektedir. Ayrıca ARACI, ALICI’nın kişisel verilerini işbu sözleşme amaçları ile sınırlı olmak kaydıyla gerektiğinde kamu kurumları ve iş ortakları ile paylaşabilecektir.
                        </p>

                        <h2>MADDE 3: SATIŞA KONU ÜRÜN/ÜRÜNLER, ÖDEME BİLGİLERİ VE TESLİMAT</h2>
                        <p>
                            Ürünün özelliklerine (cinsi ve türü) ilişkin bilgiler her sigorta veya bireysel emeklilik ürününün türüne göre değişiklik göstermekte olup, ürün seçildiğinde ürünün bedeli kullanıcı ekranında görüntülenmektedir. Bu bilgiler ALICI tarafından da onaylanmıştır.
                        </p>
                        <p>
                            Ödeme Şekli: Sadece Kredi Kartı ile ödeme kabul edilmektedir.
                        </p>
                        <p>
                            Satın alınan sigorta ürününe dair poliçeyi ALICI pdf formatında internet sitesinden indirebilecektir. Ayrıca ARACI tarafından ALICI’ya poliçe elektronik posta ile de gönderecektir. ALICI tarafından verilen elektronik posta adresinin yanlış olmasından veya başkasına ait olmasından dolayı poliçenin ulaşmaması durumunda ALICI ARACI’dan herhangi bir talepte bulunamayacağını kabul, beyan ve taahhüt eder.
                        </p>

                        <h2>MADDE 4: SÖZLEŞME TARİHİ</h2>
                        <p>
                            İşbu sözleşme ALICI’nın seçtiği sigorta türüne göre yapması gereken ödemeyi yaptığı anda akdedilmiş sayılır.
                        </p>

                        <h2>MADDE 5: GENEL HÜKÜMLER</h2>
                        <p>
                            ALICI, Web-Sitesi’nde sözleşme konusu ürünün tüm özelliklerine, temel nitelikleri, kapsadığı rizikoları bildiğini, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul, beyan ve taahhüt eder.
                        </p>
                        <p>
                            ALICI, işbu Sözleşme çerçevesinde verdiği kişisel bilgilerin doğru olduğunu beyan ve taahhüt eder. Kişisel bilgilerin doğruluğundan ALICI sorumludur. ARACI’nın bu bilgilerin doğru olmaması nedeniyle uğrayacağı tüm zararlardan ALICI sorumludur.
                        </p>
                        <p>
                            ALICI, doğruluğu, güncelliği ve verdiği bilgilerin kendisine ait olduğu veya üçüncü kişilere ait olmakla birlikte sigorta veya bireysel emeklilik ürünü satın alabilmek veya üçüncü kişileri lehdar olarak göstermek üzere gerekli açık rızanın kendisi tarafından alınmış olduğunu, bu bilgilerle ilgili olarak bir ihlal ortaya çıkması ve ARACI’nın bu ihlal nedeniyle bir zarar görmesi durumunda ARACI’nın zararlarını nakden ve defaten tazmin edeceğini kabul, beyan ve taahhüt eder.
                        </p>
                        <p>
                            Sözleşmeye konu sigorta ürününe ait korumanın başlamış sayılması için işbu mesafeli satış sözleşmesi ile ön bilgilendirme formunun elektronik ortamda teyit edilmiş olması ve ürün/ürünlerin bedelinin ALICI tarafından kredi kartı ile ödenmiş olması şarttır. Herhangi bir nedenle ürün/ürünlerin bedeli ödenmez veya banka kayıtlarında iptal edilir ise, taraflar arasında bir sigorta sözleşmesinin kurulmamış olacağını taraflar kabul, beyan ve taahhüt eder.
                        </p>

                        <h2>MADDE 6: CAYMA HAKKI</h2>
                        <p>
                            ALICI, sözleşmenin imzalandığı tarihten itibaren 14 (ondört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. İşbu 14 (ondört) günlük süre, tüketicinin sözleşmenin imzalandığı günden itibaren başlar. Cayma hakkının kullanılması için bu süre içinde ARACI’ya aşağıda detayları belirtilen iletişim bilgileri vasıtasıyla ALICI yazılı olarak bildirimde bulunmak zorundadır. Bu bildirimin ARACI’ya ulaşmasını takiben ARACI bildirimin kendisine ulaştığına ilişkin teyit bilgisini ALICI ile paylaşacak ve Cayma talebini ilgili Sigorta Şirketine iletecektir. Sigorta Şirketinin uygun görmesi ve yasal mevzuata uygun olması şartıyla bildirimin ulaşma tarihini takiben de 14 (ondört) gün içinde cayma hakkına konu ürünün/ürünlerin bedelini ödeme şekline uygun bir şekilde ALICI’ya iade edebilecektir. ARACI’nın yukarıda belirtilen yükümlülüklerini yerine getirmemesi hâlinde, ALICI cayma hakkını kullanmak için 14 (ondört) günlük süreye bağlı değildir. Her halükarda bu süre cayma süresinin bittiği tarihten itibaren bir yıl sonra sona erer.
                        </p>

                        <table cellPadding={8} cellSpacing={0}>
                            <tbody><tr>
                                <th>Ünvan</th>
                                <td>{getSiteName()} Sigorta Aracılık Hiz. Ltd. Şti.</td>
                            </tr>
                                <tr>
                                    <th>Adres</th>
                                    <td>Hepkebirler Mah. Adalet Cad. No:26 Merkez / KASTAMONU</td>
                                </tr>
                                <tr>
                                    <th>Telefon</th>
                                    <td>444 22 37</td>
                                </tr>
                                <tr>
                                    <th>E-posta</th>
                                    <td><a href="mailto:teklif@sigortanikarsilastir.com">teklif@sigortanikarsilastir.com</a></td>
                                </tr>
                            </tbody></table>

                        <p>
                            ALICI, Seyahat Sağlık, DASK ve Trafik sigortası ve benzeri bazı sigorta ürünlerinde getirilebilecek yasal gereklilikler nedeniyle ve hali hazırda Web-Sitesi’nde de yayınlanan ilgili genel şartlarında belirtilen hususlarda ve bu hususların gerçekleşmemesi halinde cayma hakkının kullanılamayacağını bildiğini kabul, beyan ve taahhüt eder.
                        </p>

                        <h2>MADDE 7: YETKİLİ MAHKEME</h2>
                        <p>
                            İşbu Mesafeli Satış Sözleşmesi'nin uygulanmasında, Gümrük ve Ticaret Bakanlığınca ilan edilen değere kadar Alıcının Mal veya Hizmeti satın aldığı ve ikametgahının bulunduğu yerdeki Tüketici Hakem Heyetleri ile Tüketici Mahkemeleri yetkilidir. 6502 Sayılı Tüketicinin Korunması Hakkında Kanun'un 68'nci. Maddesinin 1. fıkrasında belirtilen alt ve üst limitler doğrultusunda tüketici talepleri hakkında ilçe/il tüketici hakem heyetleri yetkilidir.
                        </p>
                        <p>
                            Tüketici sıfatını haiz olmayan ALICI için, taraflar arasında işbu Sözleşme’den doğabilecek uyuşmazlıkların çözümünde Kastamonu Merkez Mahkemeleri ve İcra Müdürlükleri yetkilidir.
                        </p>
                        <p>
                            İşbu mesafeli satış sözleşmesinin elektronik ortamda taraflarca okunup, kabul edilip, teyit edilmiştir.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default DisatanceLayout
