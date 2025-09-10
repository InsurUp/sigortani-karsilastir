import { Banner } from '@/components/common/banner/Banner'
import { getSiteUrl, getSiteName } from '@/utils/site'

function Consent() {
  return (
    <>
      <Banner text="Açık Rıza Metni" />
      <section>
        <div className="container">
          <article>

            <div className="ql-editor">
              <p className="ql-align-center text-center">
                <strong>SİGORTANI KARŞILAŞTIR SİGORTA ARACILIK HİZMETLERİ LTD ŞTİ</strong>&nbsp;
              </p>
              <p className="ql-align-center text-center  ">
                <strong>SİGORTALI/SİGORTA ETTİREN AÇIK RIZA METNİ</strong>
              </p> 
              <p>
                Türkiye’de kurulu SİGORTANI KARŞILAŞTIR SİGORTA VE ARACILIK HİZMETLERİ LTD. ŞTİ. (“Şirket”) olarak; veri sorumlusu sıfatıyla,
              </p>
              <p>
                duruma göre aşağıda belirtilen şekillerde elde ettiğimiz kişisel verilerinizin,
              </p>
              <p>
                hukuki ilişkilerimiz kapsamında,
              </p>
              <p>
                işlenmelerini gerektiren amaç çerçevesinde ve bu amaçla bağlantılı, sınırlı ve ölçülü şekilde,
              </p>
              <p>
                tarafımıza bildirdiğiniz veya bildirildiği şekliyle kişisel verilerin doğruluğunu ve en güncel halini koruyarak,
              </p>
              <p>
                kaydedileceğini, depolanacağını, muhafaza edileceğini, yeniden düzenleneceğini, kanunen bu kişisel verileri talep etmeye yetkili olan kurumlar ile paylaşılacağını ve KVKK’nın öngördüğü şartlarda, yurtiçinde üçüncü kişilere aktarılacağını, devredileceğini, sınıflandırılabileceğini ve KVKK’da sayılan sair şekillerde işlenebileceğini bildiririz.
              </p>
              <p> 
              </p>
              <p>
                <strong style={{ fontSize: '16px' }}>KİŞİSEL VERİLERİNİZİN YURT DIŞINA AKTARIMI</strong>
              </p>
              <p>
                Kişisel verileriniz, Kişisel Verilerin Korunması Kanunu’na uygun olarak, özellikle Şirket’in verinin paylaşılmasında ilgili bir sözleşmenin ifasını gerektiriyorsa yurt dışındaki kişilere/firmalara aktarılabilir ve kişisel veriler bu kişiler/firmalar tarafından işlenebilir.
              </p>
              <p>
                Tarafımızca, yurt dışına aktarılabilecek kişisel verileriniz aşağıdaki gibidir:
              </p>
              <p>
                Kişisel Veriler Açıklama
              </p>
              <p>
                Kimlik Verisi Adı, soyadı, TCKN, doğum tarihi, medeni durumu, cinsiyeti
              </p>
              <p>
                İletişim Verisi Telefonu, e-postası, adresi
              </p>
              <p>
                Çalışma Verisi Çalıştığı şirket, departmanı, çalışma şekli, mesleği, unvanı, eğitim durumu, tecrübe
              </p>
              <p>
                Görsel ve İşitsel Veri Gerçek kişiye ait fotoğraf
              </p>
              <p>
                Poliçe bilgileri Poliçe numarası, poliçe şirketi, hangi branşta teklif ve poliçe aldığı, poliçe vadesi, aldığı teklif bilgileri (hangi branş, teklif sayısı, teklif tutarı)
              </p>
              <p>
                Diğer Araç bilgileri, Şirket müşteri kartı numarası
              </p>
              <p> 
              </p>
              <p>
                <strong style={{ fontSize: '16px' }}>KİŞİSEL VERİLERİNİZİN YURT DIŞINA AKTARIM AMAÇLARI</strong>
              </p>
              <p>
                Yukarıda belirtilen kişisel verileriniz aşağıda belirtilen amaç ve sebeplerle aktarılmaktadır. Bu açık rıza metnine ilişkin “Açık rıza metnini okudum ve anladım. Kişisel verilerimin metinde belirtilen şekillerde işlenmesini onaylıyorum ve izin veriyorum” onay kutucuğunu işaretlemekle aşağıda belirtilen amaç ve sebeplerle yukarıda belirtilen kişisel verilerinizin yurt dışındaki aşağıdaki alıcı gruplarına ve belirlenen amaçlarla aktarılmasına rıza göstermiş olacaksınız;
              </p>
              <p>
                Acentelik hizmetinin ifasıyla doğrudan ilgili işlemleri gerçekleştirmek ve yasal sorumluluklarımızı yerine getirebilmek üzere tarafınıza teklif formu, poliçe, zeyilname iletilmesi, poliçenize ilişkin gerekli bilgilendirmelerin yapılabilmesi için e-posta ve sms gönderebilmek, başvuru, şikayet, zeyil işlemi, hasar ve poliçe iptal süreçlerine ilişkin iletişimi sağlayabilmek için e-posta kullanmak amaçlarıyla kişisel verilerinizi yurt içinde ve yurt dışında anlaşmalı olduğumuz ilgili hizmeti veren tedarikçilere aktarıyoruz.
              </p>
              <p> 
              </p>
              <p>
                <strong style={{ fontSize: '16px' }}>İLETİŞİM BİLGİLERİ</strong>
              </p>
              <p>
                {getSiteName()} Sigorta ve Aracılık Hizmetleri LTD. ŞTİ.
              </p>
              <p>
                Mersis No: 0770108619900001
              </p>
              <p>
                İletişim linki: <a href={getSiteUrl()} rel="noopener noreferrer" target="_blank" className="acerapps-text-editor-link">{getSiteUrl()}</a>
              </p>
              <p>
                Adres: Hepkebirler Mah. Adalet Cad. No: 26 Merkez / Kastamonu
              </p>
              <p>
                Tel: <a href="tel:4442237" rel="noopener noreferrer" className="acerapps-text-editor-link">444 22 37</a>
              </p>
            </div>

          </article>
        </div>
      </section>
    </>
  )
}

export default Consent
