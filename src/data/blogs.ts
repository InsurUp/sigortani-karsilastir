export interface BlogContentSection {
  type: 'paragraph' | 'heading' | 'list' | 'cta' | 'highlight' | 'image';
  content: string;
  level?: number; // heading level için
  items?: string[]; // list için
  ctaText?: string; // CTA butonu metni
  ctaLink?: string; // CTA butonu linki
  highlightType?: 'info' | 'warning' | 'success'; // highlight türü
  imageSrc?: string; // resim kaynağı
  imageAlt?: string; // resim alt metni
  imageCaption?: string; // resim açıklaması
}

export interface Blog {
  id: number;
  title: string;
  href: string;
  desc: string;
  image: string;
  detail_image: string;
  content: string; // Kısa özet için
  fullContent?: BlogContentSection[]; // Detaylı içerik için
  date: string;
  category: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  suggest_blogs: boolean;  
}

// Blog kategorileri
export const blogCategories = {
  'evim': { name: 'Evim', color: '#10B981' },
  'aracim': { name: 'Aracım', color: '#3B82F6' },
  'sagligim': { name: 'Sağlığım', color: '#EF4444' },
  'diger': { name: 'Diğer', color: '#6366F1' }
};

// Blog tagları
export const blogTags = {
  // Evim kategorisi
  'konut': { name: 'Konut', category: 'evim' },
  'dask': { name: 'DASK', category: 'evim' },
  
  // Aracım kategorisi
  'kasko': { name: 'Kasko', category: 'aracim' },
  'trafik': { name: 'Trafik', category: 'aracim' },
  'imm': { name: 'İMM', category: 'aracim' },
  
  // Sağlığım kategorisi
  'tss': { name: 'Tamamlayıcı Sağlık', category: 'sagligim' },
  'ozel-saglik': { name: 'Özel Sağlık', category: 'sagligim' },
  'seyahat-saglik': { name: 'Seyahat Sağlık', category: 'sagligim' },
  
  // Diğer kategorisi
  'cep-telefonu': { name: 'Cep Telefonu', category: 'diger' }
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "2. El Araç Alım Satımında Trafik Sigortası ve Noter Süreci: 2025 Rehberi",
    href: "/blog/2-el-arac-alim-satiminda-trafik-sigortasi-noter-sureci",
    desc: "İkinci el araç alım satımında noter işlemleri ve zorunlu trafik sigortası süreçleri. 2025 yılındaki yeni düzenlemeler ve dikkat edilmesi gerekenler...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "İkinci el araç alım satımı, hem alıcı hem de satıcı için dikkatli planlama gerektiren bir süreçtir. Noter işlemleri ve zorunlu trafik sigortası, bu sürecin en kritik adımlarıdır. Özellikle 5 Aralık 2024 tarihinde yürürlüğe giren yeni düzenlemeler, trafik sigortası süreçlerini değiştirdi.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "2. El Araç Alım Satımı Nedir?",
          "Noter İşlemleri Nasıl Yapılır?",
          "Trafik Sigortası Zorunluluğu ve Yeni Düzenlemeler",
          "Gerekli Belgeler Nelerdir?",
          "Noter Ücretleri ve Masraflar",
          "Dikkat Edilmesi Gerekenler",
          "sigortanikarsilastir.com ile Trafik Sigortası Teklifi Alın",
          "Sıkça Sorulan Sorular"
        ]
      },
      {
        type: "paragraph",
        content: "İkinci el araç alım satımı, hem alıcı hem de satıcı için dikkatli planlama gerektiren bir süreçtir. Noter işlemleri ve zorunlu trafik sigortası, bu sürecin en kritik adımlarıdır. Özellikle 5 Aralık 2024 tarihinde yürürlüğe giren yeni düzenlemeler, trafik sigortası süreçlerini değiştirdi. sigortanikarsilastir.com olarak, bu rehberde 2025 yılında ikinci el araç alım satımında noter işlemlerini, trafik sigortası gerekliliklerini ve dikkat edilmesi gereken noktaları tarafsız bir şekilde açıklıyoruz. Hemen platformumuz üzerinden en uygun trafik sigortası tekliflerini karşılaştırarak bu süreci güvenle tamamlayabilirsiniz!"
      },
      {
        type: "heading",
        content: "2. El Araç Alım Satımı Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "İkinci el araç alım satımı, bir aracın mevcut sahibinden başka bir kişiye devredilmesi işlemidir. Bu süreç, noter huzurunda resmi bir satış sözleşmesiyle gerçekleştirilir ve alıcının adına araç tescil edilir. Ayrıca, yeni düzenlemeler doğrultusunda alıcının satış öncesi zorunlu trafik sigortası yaptırması gerekir. Bu işlem, hem alıcıyı hem de satıcıyı yasal olarak korur ve aracın trafikte güvenli bir şekilde kullanılmasını sağlar."
      },
      {
        type: "cta",
        content: "Hemen Trafik Sigortası Teklifi Al, Süreci Hızlandır!",
        ctaText: "Trafik Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Noter İşlemleri Nasıl Yapılır?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Noter, ikinci el araç alım satımında resmiyet sağlayan bir kurumdur. İşlem, alıcı ve satıcının noter huzurunda bir araya gelmesiyle tamamlanır. Süreç şu adımları içerir:"
      },
      {
        type: "list",
        items: [
          "Belgelerin Hazırlanması: Alıcı ve satıcı, gerekli belgeleri eksiksiz olarak notere sunar.",
          "Araç Kontrolü: Noter, aracın rehin, haciz veya vergi borcu gibi engellerini sistem üzerinden kontrol eder.",
          "Satış Sözleşmesi: Taraflar, noter tarafından hazırlanan satış sözleşmesini imzalar.",
          "Ödeme ve Tescil: Ödeme, noter gözetiminde (genellikle banka havalesi veya blokeli ödeme sistemiyle) yapılır. Ardından, alıcı adına geçici tescil belgesi düzenlenir.",
          "Plaka Değişikliği (Opsiyonel): Eğer plaka değişecekse, bu talep noter işlemi sırasında belirtilir ve sigorta poliçesine zeyilname eklenir."
        ]
      },
      {
        type: "highlight",
        content: "Ödeme, noter tasdikinden önce yapılmalıdır. Aksi takdirde, satıcı hukuki hak iddia edemez.",
        highlightType: "warning"
      },
      {
        type: "heading",
        content: "Trafik Sigortası Zorunluluğu ve Yeni Düzenlemeler",
        level: 2
      },
      {
        type: "paragraph",
        content: "5 Aralık 2024 tarihinde yürürlüğe giren yeni düzenlemeyle, ikinci el araç alım satımında trafik sigortası kuralları değişti. Artık alıcı, noter işlemi öncesinde kendi adına zorunlu trafik sigortası yaptırmak zorundadır. Daha önce, satıcının trafik sigortası 15 gün geçerliydi ve alıcı bu süre içinde sigorta yaptırabiliyordu. Ancak bu uygulama, Anayasa Mahkemesi tarafından kaldırıldı."
      },
      {
        type: "list",
        items: [
          "Satış Öncesi Sigorta: Alıcı, satıcının ruhsat bilgileriyle (plaka numarası, ruhsat seri numarası ve tescil tarihi) kendi adına trafik sigortası yaptırır. Noter, bu sigortayı kontrol eder ve sigorta yoksa satış işlemi başlatılmaz.",
          "Satıcının Sigortası: Satıcı, noter işlemi sonrası mevcut sigortasını iptal ettirerek kalan prim iadesini alabilir.",
          "Plaka Değişikliği: Plaka değişirse, alıcı sigorta şirketine başvurarak poliçeye zeyilname ekletmelidir.",
          "Sürprim Riski: Eğer satıcının sigortası yoksa veya süresi dolmuşsa, alıcı adına yapılan sigortaya %5 gecikme sürprimi uygulanabilir. Bu durumda, sigorta şirketinden otorizasyon talep edilerek sürprim kaldırılabilir."
        ]
      },
      {
        type: "cta",
        content: "En Uygun Trafik Sigortası Teklifini Hemen Karşılaştır!",
        ctaText: "Trafik Sigortası Tekliflerini Karşılaştır",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Gerekli Belgeler Nelerdir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "İkinci el araç alım satımı için noter ve sigorta işlemleri için aşağıdaki belgeler gereklidir:"
      },
      {
        type: "list",
        items: [
          "Kimlik Belgeleri: Alıcı ve satıcının T.C. kimlik belgeleri (nüfus cüzdanı, ehliyet veya pasaport).",
          "Araç Ruhsatı: Aracın tescil belgesi (orijinal).",
          "Zorunlu Trafik Sigortası: Alıcı adına düzenlenmiş geçerli bir sigorta poliçesi.",
          "Vergi Borcu Sorgulama Belgesi: Aracın Motorlu Taşıtlar Vergisi (MTV) veya trafik cezası borcu olmadığını gösteren belge (e-Devlet üzerinden alınabilir).",
          "Ekspertiz Raporu (Opsiyonel): Aracın teknik durumunu gösteren rapor, güvenilirlik için önerilir.",
          "Vekaletname (Gerekirse): Alıcı veya satıcı işlemde bulunamayacaksa, noter onaylı vekaletname gereklidir."
        ]
      },
      {
        type: "highlight",
        content: "Araçta haciz, rehin veya ödenmemiş borç varsa satış yapılamaz. Bu nedenle, e-Devlet üzerinden araç sorgulaması yapmanız önerilir.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Noter Ücretleri ve Masraflar",
        level: 2
      },
      {
        type: "paragraph",
        content: "2025 yılında noter ücretleri, Hazine ve Maliye Bakanlığı'nın yeniden değerleme oranına (%43,93) göre güncellenmiştir. İkinci el araç satışında noter masrafları genellikle alıcı tarafından ödenir, ancak taraflar arasında anlaşma yapılabilir. Güncel ücretler:"
      },
      {
        type: "list",
        items: [
          "İkinci El Araç Satış Ücreti: 1.489,36 TL",
          "Tescil Ücreti: 19,10 TL",
          "Minimum Harç: 44,56 TL",
          "Plaka Değişikliği (Opsiyonel): Türkiye Şoförler ve Otomobilciler Federasyonu'na ödenen ek ücret."
        ]
      },
      {
        type: "paragraph",
        content: "Ek masraflar (örneğin, vekaletname veya ek hizmetler) toplam maliyeti artırabilir. Ödemeler, noter gözetiminde banka havalesi veya blokeli ödeme sistemiyle yapılmalıdır."
      },
      {
        type: "cta",
        content: "Noter İşlemleri Öncesi Sigorta Tekliflerini İncele!",
        ctaText: "Trafik Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Dikkat Edilmesi Gerekenler",
        level: 2
      },
      {
        type: "paragraph",
        content: "İkinci el araç alım satımında sorunsuz bir süreç için şu noktaları dikkat edin:"
      },
      {
        type: "list",
        items: [
          "Araç Kontrolü: Araçta haciz, rehin, vergi borcu veya trafik cezası olup olmadığını e-Devlet üzerinden kontrol edin.",
          "Muayene Durumu: Araç muayenesi yoksa satış yapılamaz. Satış öncesi muayene yaptırılmalıdır.",
          "Ekspertiz Raporu: Aracın teknik durumunu doğrulamak için bağımsız bir ekspertiz raporu alın.",
          "Güvenli Ödeme: Ödemeyi noter huzurunda banka havalesi veya blokeli ödeme sistemiyle yapın. Elden nakit ödemelerden kaçının.",
          "Sigorta İptali: Satıcı, satış sonrası sigortasını iptal ettirerek prim iadesi alabilir.",
          "Kapora Sınırı: Kapora, araç satış bedelinin %10'unu geçemez."
        ]
      },
      {
        type: "cta",
        content: "Güvenli Bir Satış İçin Sigorta Tekliflerini Hemen Karşılaştır!",
        ctaText: "Trafik Sigortası Tekliflerini Karşılaştır",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "sigortanikarsilastir.com ile Trafik Sigortası Teklifi Alın",
        level: 2
      },
      {
        type: "paragraph",
        content: "sigortanikarsilastir.com, ikinci el araç alım satımında zorunlu trafik sigortası sürecini kolaylaştırır. Platformumuzun avantajları:"
      },
      {
        type: "list",
        items: [
          "Tarafsızlık: Hiçbir sigorta şirketine bağlı olmadan, sadece sizin ihtiyaçlarınızı ön planda tutarız.",
          "Hız ve Kolaylık: Satış öncesi birkaç dakikada birden fazla sigorta teklifini karşılaştırabilirsiniz.",
          "Güven: Şeffaf ve kullanıcı dostu bir deneyim sunuyoruz.",
          "7/24 Destek: Sorularınız için her zaman yanınızdayız."
        ]
      },
      {
        type: "paragraph",
        content: "Hemen sigortanikarsilastir.com'u ziyaret edin, ruhsat bilgilerinizi girerek en uygun trafik sigortası tekliflerini keşfedin ve noter işleminizi güvenle tamamlayın!"
      },
      {
        type: "cta",
        content: "Şimdi Teklif Al ve Süreci Hızlandır!",
        ctaText: "Hemen Teklif Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik sigortası olmadan araç satışı yapılabilir mi?"
      },
      {
        type: "highlight",
        content: "Hayır, 5 Aralık 2024 tarihli düzenlemeyle alıcı, noter işlemi öncesi kendi adına trafik sigortası yaptırmak zorundadır.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Noter ücretlerini kim öder?"
      },
      {
        type: "highlight",
        content: "Genellikle alıcı noter ücretlerini öder, ancak bu konuda alıcı ve satıcı arasında anlaşma yapılabilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Satış sonrası satıcının sigortası ne olur?"
      },
      {
        type: "highlight",
        content: "Satıcı, noter işlemi sonrası sigorta şirketine başvurarak poliçesini iptal ettirebilir ve kalan prim iadesini alabilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Plaka değişikliği nasıl yapılır?"
      },
      {
        type: "highlight",
        content: "Plaka değişikliği, noter işlemi sırasında belirtilir ve sigorta poliçesine zeyilname eklenir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Araçta borç varsa ne yapmalıyım?"
      },
      {
        type: "highlight",
        content: "Satış öncesi vergi borcu, trafik cezası veya rehin gibi engeller ödenmeli veya kaldırılmalıdır. e-Devlet üzerinden sorgulama yapabilirsiniz.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "İkinci el araç alım satımında güven ve hız için sigortanikarsilastir.com'u tercih edin! En uygun trafik sigortası tekliflerini karşılaştırarak süreci sorunsuz tamamlayın."
      },
      {
        type: "cta",
        content: "Hemen Başla!",
        ctaText: "Trafik Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      }
    ],
    date: "2025-01-15",
    category: "aracim",
    tags: ["trafik"],
    suggest_blogs: true,
    meta_title: "2. El Araç Alım Satımında Trafik Sigortası ve Noter Süreci: 2025 Rehberi",
    meta_description: "İkinci el araç alım satımında noter işlemleri ve trafik sigortası süreçleri. 2025 yılındaki yeni düzenlemeler ve dikkat edilmesi gerekenler.",
  },
  {
    id: 2,
    title: "2025 Türkiye Trafik Cezaları: Bilmeniz Gerekenler ve Güvenli Sürüş İpuçları",
    href: "/blog/2025-turkiye-trafik-cezalari-bilmeniz-gerekenler",
    desc: "2025 yılında Türkiye'de trafik cezaları, güncel ceza miktarları ve güvenli sürüş ipuçları. Trafik sigortası ve kasko önerileri...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Trafik kuralları, hem sürücülerin hem de yayaların güvenliğini sağlamak için hayati öneme sahiptir. Ancak, bu kurallara uyulmadığında trafik cezaları kaçınılmaz olabilir. 2025 yılında Türkiye'de trafik cezaları, Hazine ve Maliye Bakanlığı tarafından belirlenen %43,93 yeniden değerleme oranı doğrultusunda güncellendi.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Neden Trafik Cezaları Arttı?",
          "2025 Yılında Güncel Trafik Cezaları",
          "Trafik Cezalarından Kaçınmak İçin İpuçları",
          "Zorunlu Trafik Sigortası ve Kasko'nun Önemi",
          "sigortanikarsilastir.com ile Sigorta Karşılaştırma",
          "Sıkça Sorulan Sorular",
          "Güvenli Sürüş, Güvenceli Gelecek"
        ]
      },
      {
        type: "paragraph",
        content: "Trafik kuralları, hem sürücülerin hem de yayaların güvenliğini sağlamak için hayati öneme sahiptir. Ancak, bu kurallara uyulmadığında trafik cezaları kaçınılmaz olabilir. 2025 yılında Türkiye'de trafik cezaları, Hazine ve Maliye Bakanlığı tarafından belirlenen %43,93 yeniden değerleme oranı doğrultusunda güncellendi. sigortanikarsilastir.com olarak, bu rehberde 2025 trafik cezalarını, cezai yaptırımları ve güvenli sürüş için dikkat etmeniz gerekenleri tarafsız bir şekilde ele alıyoruz. Ayrıca, zorunlu trafik sigortası ve kasko gibi sigorta türlerinin önemini vurgulayarak, sizleri daha güvende tutacak çözümler sunuyoruz."
      },
      {
        type: "heading",
        content: "Neden Trafik Cezaları Arttı?",
        level: 2
      },
      {
        type: "paragraph",
        content: "2025 yılında trafik cezaları, ekonomik koşullar ve yeniden değerleme oranı (%43,93) doğrultusunda güncellendi. Bu artışın temel nedenleri şunlardır:"
      },
      {
        type: "list",
        items: [
          "Trafik Kazalarını Azaltmak: Hız sınırını aşma, kırmızı ışıkta geçme gibi ihlaller, trafik kazalarının önde gelen nedenlerindendir. Daha caydırıcı cezalar, bu ihlalleri azaltmayı hedefler.",
          "Toplumsal Güvenlik: Kurallara uymayan sürücülerin hem kendilerini hem de diğer yol kullanıcılarını riske attığı biliniyor. Artan cezalar, trafik düzenini ve güvenliğini artırmayı amaçlıyor.",
          "Teknolojik Gelişmeler: Trafik ihlallerini tespit eden kameralar, plaka tanıma sistemleri ve radarlar sayesinde cezalar daha hızlı ve etkin bir şekilde uygulanıyor."
        ]
      },
      {
        type: "heading",
        content: "2025 Yılında Güncel Trafik Cezaları",
        level: 2
      },
      {
        type: "paragraph",
        content: "Aşağıda, 2025 yılında Türkiye'de en yaygın trafik ihlalleri ve güncel ceza miktarları yer alıyor. Erken ödeme durumunda %25 indirim uygulanabileceğini unutmayın (cezalar 15 gün içinde ödenirse)."
      },
      {
        type: "list",
        items: [
          "Hız Sınırını Aşma: %10-30 aşma: 2.167 TL (indirimli: 1.625,25 TL), %30-50 aşma: 4.512 TL (indirimli: 3.384 TL), %50'den fazla aşma: 9.268 TL (indirimli: 6.951 TL)",
          "Alkollü Araç Kullanma: İlk ihlal: 9.267 TL + 6 ay ehliyet askıya alma, İkinci ihlal: 11.622 TL + 2 yıl ehliyet askıya alma, Üçüncü ihlal: 18.677 TL + 5 yıl ehliyet askıya alma ve psikoteknik değerlendirme",
          "Uyuşturucu Madde Etkisiyle Araç Kullanma: 47.842 TL + 5 yıl ehliyet askıya alma",
          "Kırmızı Işıkta Geçme: 2.167 TL (indirimli: 1.625,25 TL) + 20 ceza puanı",
          "Emniyet Kemeri Takmama: 993 TL (indirimli: 744,75 TL)",
          "Cep Telefonu Kullanımı: 2.168 TL (indirimli: 1.626 TL)",
          "Yasak Park: 993 TL (indirimli: 744,75 TL)",
          "Sigortasız Araç Kullanma: 993 TL (indirimli: 744,75 TL)",
          "Ehliyetsiz Araç Kullanma: 18.678 TL (indirimli: 14.008,50 TL)",
          "Yayaya Yol Vermeme: 933 TL (indirimli: 699,75 TL) + 15 ceza puanı",
          "Sahte Plaka Kullanma: 46.302 TL",
          "Emniyet Şeridi İhlali: 9.268 TL (indirimli: 6.951 TL)",
          "Drift Yapma: 46.302 TL + ehliyete el koyma ve psikoteknik değerlendirme"
        ]
      },
      {
        type: "highlight",
        content: "Ceza miktarları, ihlalin türüne ve tekrarına bağlı olarak değişiklik gösterebilir. Ceza puanları bir yıl boyunca birikir ve 100 puana ulaşıldığında ehliyet geçici olarak askıya alınabilir. Ayrıca, kırmızı ışık ihlali gibi bazı cezalar, tekrar sayısına göre artabilir (örneğin, bir yıl içinde 6 kez kırmızı ışık ihlali yapan sürücülere 80.000 TL ceza uygulanabilir).",
        highlightType: "warning"
      },
      {
        type: "heading",
        content: "Trafik Cezalarından Kaçınmak İçin İpuçları",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik cezalarından korunmak ve güvenli bir sürüş deneyimi yaşamak için aşağıdaki önerilere dikkat edin:"
      },
      {
        type: "list",
        items: [
          "Hız Sınırlarına Uyun: Şehir içinde 50 km/s, şehir dışında 90 km/s, otoyollarda 120 km/s olan hız sınırlarını aşmayın.",
          "Emniyet Kemerini Unutmayın: Hem sürücü hem de yolcular için emniyet kemeri zorunludur. Çocuk yolcular için uygun koltuk kullanımı da önemlidir.",
          "Alkol ve Uyuşturucudan Kaçının: Alkollü veya uyuşturucu madde etkisiyle araç kullanmak, ciddi cezalar ve ehliyet kaybına yol açar.",
          "Trafik İşaretlerine Dikkat Edin: Kırmızı ışık, dur levhası ve yaya geçidi gibi işaretlere mutlaka uyun.",
          "Sigorta Yaptırmayı İhmal Etmeyin: Zorunlu trafik sigortası olmadan araç kullanmak hem yasal bir ihlal hem de maddi risktir. sigortanikarsilastir.com üzerinden en uygun sigorta tekliflerini karşılaştırabilirsiniz."
        ]
      },
      {
        type: "heading",
        content: "Zorunlu Trafik Sigortası ve Kasko'nun Önemi",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik cezalarından kaçınmanın yanı sıra, doğru sigorta poliçesine sahip olmak da büyük önem taşır. Zorunlu Trafik Sigortası, üçüncü şahıslara verilen zararları teminat altına alırken, Kasko Sigortası aracınızı kazalara, hırsızlığa ve doğal afetlere karşı korur. sigortanikarsilastir.com'da, bu sigorta türlerini karşılaştırarak bütçenize ve ihtiyaçlarınıza en uygun poliçeyi kolayca bulabilirsiniz."
      },
      {
        type: "cta",
        content: "En Uygun Sigorta Tekliflerini Karşılaştırın!",
        ctaText: "Sigorta Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "sigortanikarsilastir.com ile Sigorta Karşılaştırma",
        level: 2
      },
      {
        type: "paragraph",
        content: "Platformumuz, Türkiye'nin önde gelen sigorta şirketlerinin tekliflerini tarafsız bir şekilde sunar. Sadece birkaç dakikada:"
      },
      {
        type: "list",
        items: [
          "İhtiyacınız olan sigorta türünü seçin (trafik sigortası, kasko vb.).",
          "Araç bilgilerinizi girin.",
          "Size özel teklifleri karşılaştırın ve en uygununu seçin."
        ]
      },
      {
        type: "paragraph",
        content: "Neden bizi tercih etmelisiniz?"
      },
      {
        type: "list",
        items: [
          "Tarafsızlık: Hiçbir sigorta şirketine bağlı değiliz, sadece sizin çıkarlarınızı gözetiriz.",
          "Hız ve Kolaylık: Tek bir platformda tüm teklifleri görün.",
          "Güven: Şeffaf ve kullanıcı dostu bir deneyim sunuyoruz."
        ]
      },
      {
        type: "cta",
        content: "Hemen Sigorta Karşılaştırması Yapın!",
        ctaText: "Teklif Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik cezalarını nasıl ödeyebilirim?"
      },
      {
        type: "highlight",
        content: "Cezalar, vergi daireleri, PTT şubeleri, bankalar veya e-Devlet üzerinden ödenebilir. 15 gün içinde ödeme yaparsanız %25 indirimden faydalanabilirsiniz.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Trafik sigortası olmadan araç kullanmanın cezası nedir?"
      },
      {
        type: "highlight",
        content: "Sigortasız araç kullanmanın cezası 993 TL'dir. Ayrıca, araç trafikten men edilebilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Trafik cezaları nereye bildirilir?"
      },
      {
        type: "highlight",
        content: "Cezalar, sürücünün adresine posta yoluyla gönderilir veya e-Devlet ve ilgili mobil uygulamalar üzerinden görüntülenebilir.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Güvenli Sürüş, Güvenceli Gelecek",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik kurallarına uymak, sadece cezadan kaçınmak için değil, aynı zamanda kendinizin ve diğer yol kullanıcılarının güvenliği için kritik önem taşır. sigortanikarsilastir.com olarak, sizlere en uygun sigorta çözümlerini sunarak yolda güvende olmanızı sağlıyoruz. Hemen platformumuzu ziyaret edin, zorunlu trafik sigortası veya kasko tekliflerini karşılaştırın ve güvenle yola çıkın!"
      },
      {
        type: "cta",
        content: "Güvenli Sürüş İçin Hemen Başlayın!",
        ctaText: "Sigorta Teklifi Al",
        ctaLink: "/trafik-teklif"
      }
    ],
    date: "2025-01-20",
    category: "aracim",
    tags: ["trafik"],
    suggest_blogs: true,  
    meta_title: "2025 Türkiye Trafik Cezaları: Bilmeniz Gerekenler ve Güvenli Sürüş İpuçları",
    meta_description: "2025 yılında Türkiye'de trafik cezaları, güncel ceza miktarları ve güvenli sürüş ipuçları. Trafik sigortası ve kasko önerileri.",
  },
  {
    id: 3,
    title: "2025 Trafik Sigortası Rehberi: Teminatlar, İndirimler ve Akıllı Karar Verme",
    href: "/blog/2025-trafik-sigortasi-rehberi-teminatlar-indirimler",
    desc: "2025 yılında trafik sigortası teminatları, hasarsızlık indirimleri ve sürprim oranları. En uygun trafik sigortası nasıl bulunur?",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Trafik sigortası, Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası'nın kısa adıdır. Sürücülerin, kazaya karıştıklarında karşı tarafa verdikleri maddi, bedeni ve manevi zararları poliçe kapsamındaki teminatlar dahilinde karşılar.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Trafik Sigortası Nedir?",
          "2025 Trafik Sigortası Teminatları (Araç Türüne Göre)",
          "2025 Hasarsızlık İndirimi ve Sürprim Oranları",
          "Trafik Sigortası Fiyatları Nasıl Değişir?",
          "En Uygun Trafik Sigortası Nasıl Bulunur?",
          "Trafik Sigortasıyla İlgili Sık Sorulan 3 Soru",
          "Sonuç: 2025'te Bilinçli Sürücüler Sigortasını Karşılaştırarak Alıyor"
        ]
      },
      {
        type: "heading",
        content: "Trafik Sigortası Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik sigortası, Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası'nın kısa adıdır. Sürücülerin, kazaya karıştıklarında karşı tarafa verdikleri maddi, bedeni ve manevi zararları poliçe kapsamındaki teminatlar dahilinde karşılar."
      },
      {
        type: "heading",
        content: "2025 Trafik Sigortası Teminatları (Araç Türüne Göre)",
        level: 2
      },
      {
        type: "image",
        content: "Trafik sigortası teminat limitleri tablosu",
        imageSrc: "/images/blog/detail/teminat.png",
        imageAlt: "2025 Trafik Sigortası Teminat Limitleri",
        imageCaption: "Her araç grubu için teminat limitleri farklılık gösterir. Bu nedenle poliçenizi düzenlerken aracınızın türüne uygun teminatları kontrol etmeyi unutmayın."
      },
      {
        type: "highlight",
        content: "Her araç grubu için teminat limitleri farklılık gösterir. Bu nedenle poliçenizi düzenlerken aracınızın türüne uygun teminatları kontrol etmeyi unutmayın.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "2025 Hasarsızlık İndirimi ve Sürprim Oranları",
        level: 2
      },
      {
        type: "paragraph",
        content: "Basamak sistemine göre kazasız geçen her yıl indirim sağlarken, kazalı sürücülere ek prim uygulanır:"
      },
      {
        type: "image",
        content: "Hasarsızlık indirimi ve sürprim oranları tablosu",
        imageSrc: "/images/blog/detail/hasarsizlik.png",
        imageAlt: "2025 Hasarsızlık İndirimi ve Sürprim Oranları",
        imageCaption: "Hasarsız geçen her yıl, sürücü bir üst basamağa çıkar. Kaza yapılan yıllarda, basamak düşer ve sürprim uygulanır."
      },
      {
        type: "list",
        items: [
          "Hasarsız geçen her yıl, sürücü bir üst basamağa çıkar.",
          "Kaza yapılan yıllarda, basamak düşer ve sürprim uygulanır."
        ]
      },
      {
        type: "heading",
        content: "Trafik Sigortası Fiyatları Nasıl Değişir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "2025'te trafik sigortası primlerini etkileyen başlıca unsurlar:"
      },
      {
        type: "list",
        items: [
          "Araç türü ve modeli",
          "Aracın kayıtlı olduğu il",
          "Sigortalının kaza geçmişi (basamak durumu)",
          "Seçilen sigorta şirketinin fiyat politikası"
        ]
      },
      {
        type: "heading",
        content: "En Uygun Trafik Sigortası Nasıl Bulunur?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Sigorta şirketlerinin fiyatları ve teminat seçenekleri arasında büyük farklar olabilir. Bu farkları görebilmenin en kolay yolu sigorta karşılaştırma platformlarını kullanmaktır."
      },
      {
        type: "paragraph",
        content: "Sigortanikarsilastir.com üzerinden tek ekranda fiyatları ve teminatları karşılaştırabilir, 7/24 online satın alma yapabilirsiniz."
      },
      {
        type: "cta",
        content: "Hemen Trafik Sigortası Teklifi Alın!",
        ctaText: "Trafik Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Trafik Sigortasıyla İlgili Sık Sorulan 3 Soru",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik sigortasıyla kendi aracımı da korur muyum?"
      },
      {
        type: "highlight",
        content: "Hayır. Trafik sigortası yalnızca karşı tarafa verilen zararı karşılar.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "İhtiyari Mali Mesuliyet (İMM) nedir?"
      },
      {
        type: "highlight",
        content: "Trafik sigortası teminatlarının yetmediği durumlar için ek koruma sağlar.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Poliçemi online alabilir miyim?"
      },
      {
        type: "highlight",
        content: "Evet. Sigortanikarsilastir.com üzerinden teklif alıp kolayca online satın alabilirsiniz.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Sonuç: 2025'te Bilinçli Sürücüler Sigortasını Karşılaştırarak Alıyor",
        level: 2
      },
      {
        type: "paragraph",
        content: "Trafik sigortasını karşılaştırarak yaptırmak, hem bütçenizi hem de yasal zorunluluğunuzu güvence altına almanızı sağlar."
      },
      {
        type: "paragraph",
        content: "Sigortanikarsilastir.com üzerinden dakikalar içinde en uygun poliçeye ulaşabilirsiniz."
      },
      {
        type: "cta",
        content: "Dakikalar İçinde En Uygun Trafik Sigortasını Bulun!",
        ctaText: "Hemen Teklif Al",
        ctaLink: "/trafik-teklif"
      }
    ],
    date: "2025-01-25",
    category: "aracim",
    tags: ["trafik"],
    suggest_blogs: true,
    meta_title: "2025 Trafik Sigortası Rehberi: Teminatlar, İndirimler ve Akıllı Karar Verme",
    meta_description: "2025 yılında trafik sigortası teminatları, hasarsızlık indirimleri ve sürprim oranları. En uygun trafik sigortası nasıl bulunur?",
  },
  {
    id: 4,
    title: "Çocuk Sağlık Sigortası Nedir? 2025 Rehberi",
    href: "/blog/cocuk-saglik-sigortasi-nedir-2025-rehberi",
    desc: "Çocuk sağlık sigortası nedir, nasıl yaptırılır? 0-18 yaş arası çocuklar için sağlık sigortası çeşitleri, fiyatları ve avantajları...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Çocuklarının sağlığı, her ebeveyn için önceliklidir. Ancak, artan sağlık hizmeti maliyetleri ve devlet hastanelerindeki yoğunluk, kaliteli sağlık hizmetine erişimi zorlaştırabilir. Çocuk sağlık sigortası, çocuğunuzun rutin kontrollerini, testlerini ve tedavi masraflarını karşılayarak bu yükü hafifletir.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Çocuk Sağlık Sigortası Nedir?",
          "Çocuk Sağlık Sigortası Nasıl Yaptırılır?",
          "Çocuk Sağlık Sigortası Çeşitleri",
          "Tamamlayıcı Sağlık Sigortası Çocukları Kapsar mı?",
          "Özel Sağlık Sigortası Çocukları Kapsar mı?",
          "Çocuk Sağlık Sigortası Fiyatları",
          "Neden sigortanikarsilastir.com?",
          "Sıkça Sorulan Sorular"
        ]
      },
      {
        type: "paragraph",
        content: "Çocuklarının sağlığı, her ebeveyn için önceliklidir. Ancak, artan sağlık hizmeti maliyetleri ve devlet hastanelerindeki yoğunluk, kaliteli sağlık hizmetine erişimi zorlaştırabilir. Çocuk sağlık sigortası, çocuğunuzun rutin kontrollerini, testlerini ve tedavi masraflarını karşılayarak bu yükü hafifletir. sigortanikarsilastir.com olarak, bu rehberde çocuk sağlık sigortasının ne olduğunu, nasıl yaptırılabileceğini ve avantajlarını tarafsız bir şekilde açıklıyoruz. Hemen platformumuz üzerinden en uygun çocuk sağlık sigortası tekliflerini karşılaştırarak çocuğunuzun sağlığını güvence altına alabilirsiniz!"
      },
      {
        type: "heading",
        content: "Çocuk Sağlık Sigortası Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Çocuk sağlık sigortası, 0-18 yaş arasındaki çocukların sağlık ihtiyaçlarını karşılamak için tasarlanmış bir sigorta türüdür. Bu sigorta, hastane masraflarını, rutin kontrolleri, testleri ve acil durum tedavilerini kapsayarak ebeveynlere maddi ve manevi güvence sunar. Sağlık sektöründeki maliyet artışları ve devlet hastanelerindeki uzun bekleme süreleri düşünüldüğünde, çocuk sağlık sigortası çocuğunuzun özel hastanelerde hızlı ve kaliteli sağlık hizmeti almasını sağlar."
      },
      {
        type: "cta",
        content: "Hemen Teklif Al, Çocuğunun Sağlığını Güvence Altına Al!",
        ctaText: "Çocuk Sağlık Sigortası Teklifi Al",
        ctaLink: "/ozel-saglik-teklif"
      },
      {
        type: "heading",
        content: "Çocuk Sağlık Sigortası Nasıl Yaptırılır?",
        level: 2
      },
      {
        type: "paragraph",
        content: "\"18 yaşından küçüklere sigorta yapılır mı?\" sıkça sorulan bir sorudur. Evet, 0-17 yaş arasındaki çocuklar için sağlık sigortası yaptırılabilir, ancak sigorta şirketlerinin politikalarına göre koşullar değişir. Çocuğunuzun yaşına, sağlık durumuna ve sigorta şirketinin sürprim (ek prim) politikalarına bağlı olarak farklı seçenekler sunulur. İşte çocuğunuza sağlık sigortası yaptırmanın yolları:"
      },
      {
        type: "list",
        items: [
          "Mevcut Poliçenize Ekleme: Eğer sizde veya eşinizde özel ya da tamamlayıcı sağlık sigortası varsa, ek prim ödeyerek çocuğunuzu poliçenize dahil edebilirsiniz.",
          "Aile Sağlık Sigortası: Aile poliçeleri, tüm aile bireylerini kapsar ve %5-10 indirim gibi avantajlar sunar. Ayrıca, vergi indirimlerinden faydalanabilirsiniz.",
          "Tek Başına Çocuk Sigortası: Bazı sigorta şirketleri, yalnızca çocuklar için sağlık sigortası sunar. Ancak bu seçenek, diğer alternatiflere göre daha yüksek prim gerektirebilir."
        ]
      },
      {
        type: "highlight",
        content: "Çocuklar, 25 yaşına kadar ve evli olmadıkları sürece aile poliçesinden yararlanabilir.",
        highlightType: "info"
      },
      {
        type: "cta",
        content: "Aile veya Çocuk Sigortası Tekliflerini Hemen Karşılaştır!",
        ctaText: "Sağlık Sigortası Teklifi Al",
        ctaLink: "/ozel-saglik-teklif"
      },
      {
        type: "heading",
        content: "Çocuk Sağlık Sigortası Çeşitleri",
        level: 2
      },
      {
        type: "paragraph",
        content: "Çocuk sağlık sigortası iki ana kategoride sunulur:"
      },
      {
        type: "list",
        items: [
          "Çocuk Tamamlayıcı Sağlık Sigortası (TSS): SGK ile anlaşmalı özel hastanelerde ücretsiz veya düşük maliyetle sağlık hizmeti almanızı sağlar.",
          "Çocuk Özel Sağlık Sigortası (ÖSS): Daha geniş kapsamlı teminatlar sunar ve kişiye özel sağlık hizmetleri içerir."
        ]
      },
      {
        type: "paragraph",
        content: "Bu iki sigorta türünün detaylarını aşağıda inceleyelim."
      },
      {
        type: "heading",
        content: "Tamamlayıcı Sağlık Sigortası Çocukları Kapsar mı?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Tamamlayıcı Sağlık Sigortası (TSS), SGK anlaşmalı özel hastanelerde çocuğunuzun sağlık hizmetlerinden ücretsiz veya düşük maliyetle faydalanmasını sağlar. TSS'nin çocuklara sunduğu teminatlar iki başlıkta incelenebilir:"
      },
      {
        type: "list",
        items: [
          "Yatarak Tedavi Teminatı: 24 saatten uzun süren tedaviler, ameliyatlar, evde bakım, ambulans hizmetleri ve tıbbi malzeme masrafları limitsiz olarak karşılanır.",
          "Ayakta Tedavi Teminatı: Muayeneler, laboratuvar testleri, röntgen, fizik tedavi gibi 24 saati aşmayan hizmetler kapsanır. Yıllık muayene sayısı, sigorta şirketine göre değişir."
        ]
      },
      {
        type: "cta",
        content: "TSS Tekliflerini İncele, Çocuğuna En Uygun Sigortayı Bul!",
        ctaText: "TSS Teklifi Al",
        ctaLink: "/tss-teklif"
      },
      {
        type: "heading",
        content: "Özel Sağlık Sigortası Çocukları Kapsar mı?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Özel Sağlık Sigortası (ÖSS), daha geniş kapsamlı bir sigorta türüdür ve çocuğunuzun sağlık durumu, doğuştan gelen veya kalıtsal hastalıklarına göre kişiselleştirilir. ÖSS, sigorta şirketinin anlaşmalı olduğu doktor ve sağlık kuruluşlarında hizmet almanızı sağlar. Çocuğunuzu ÖSS kapsamına almak için şu seçenekler mevcuttur:"
      },
      {
        type: "list",
        items: [
          "Mevcut ÖSS poliçenize çocuğunuzu ekleyebilirsiniz (şirket şartlarına bağlı olarak).",
          "Aile sağlık sigortası yaptırabilirsiniz.",
          "Sadece çocuk için ÖSS poliçesi satın alabilirsiniz (bazı şirketler bu seçeneği sunar)."
        ]
      },
      {
        type: "cta",
        content: "ÖSS Tekliflerini Karşılaştır, Çocuğunun Geleceğini Güvence Altına Al!",
        ctaText: "Özel Sağlık Sigortası Teklifi Al",
        ctaLink: "/ozel-saglik-teklif"
      },
      {
        type: "heading",
        content: "Çocuk Sağlık Sigortası Fiyatları",
        level: 2
      },
      {
        type: "paragraph",
        content: "Çocuk sağlık sigortası fiyatları, sigorta şirketinin politikalarına, poliçe kapsamına ve ek teminatlara bağlı olarak değişir. Örneğin, sürprim uygulayan şirketlerde primler daha yüksek olabilir. En uygun fiyatlı ve kapsamlı poliçeyi bulmak için sigortanikarsilastir.com üzerinden teklif alabilirsiniz. Platformumuz, Türkiye'nin önde gelen sigorta şirketlerinin tekliflerini karşılaştırarak bütçenize uygun çözümler sunar."
      },
      {
        type: "cta",
        content: "Hemen Teklif Al, En Uygun Fiyatlarla Çocuğuna Sigorta Yaptır!",
        ctaText: "Çocuk Sağlık Sigortası Teklifi Al",
        ctaLink: "/ozel-saglik-teklif"
      },
      {
        type: "heading",
        content: "Neden sigortanikarsilastir.com?",
        level: 2
      },
      {
        type: "paragraph",
        content: "sigortanikarsilastir.com, çocuk sağlık sigortası arayışınızda size şu avantajları sağlar:"
      },
      {
        type: "list",
        items: [
          "Tarafsızlık: Hiçbir sigorta şirketine bağlı olmadan, sadece sizin ihtiyaçlarınızı ön planda tutarız.",
          "Hız ve Kolaylık: Birkaç dakikada birden fazla sigorta teklifini karşılaştırabilirsiniz.",
          "Güven: Şeffaf ve kullanıcı dostu bir deneyim sunuyoruz.",
          "7/24 Destek: Sorularınız için her zaman yanınızdayız."
        ]
      },
      {
        type: "paragraph",
        content: "Hemen platformumuzu ziyaret edin, çocuğunuz için en uygun sağlık sigortası tekliflerini keşfedin!"
      },
      {
        type: "cta",
        content: "Şimdi Teklif Al",
        ctaText: "Çocuk Sağlık Sigortası Teklifi Al",
        ctaLink: "/ozel-saglik-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "Çocuk sağlık sigortası ne kadar?"
      },
      {
        type: "highlight",
        content: "Fiyatlar, sigorta şirketine, poliçe kapsamına ve çocuğun yaşına göre değişir. En uygun teklifler için sigortanikarsilastir.com üzerinden karşılaştırma yapabilirsiniz.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Hangi yaş aralığı için çocuk sağlık sigortası yaptırılabilir?"
      },
      {
        type: "highlight",
        content: "0-17 yaş arasındaki çocuklar için sigorta yaptırılabilir. 25 yaşına kadar evli olmayan çocuklar aile poliçelerinden yararlanabilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Çocuğumu mevcut poliçeme ekleyebilir miyim?"
      },
      {
        type: "highlight",
        content: "Evet, birçok sigorta şirketi mevcut poliçenize çocuk ekleme imkanı sunar. Şirket şartlarını öğrenmek için sigortanikarsilastir.com'u kullanabilirsiniz.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Tamamlayıcı ve özel sağlık sigortası arasındaki fark nedir?"
      },
      {
        type: "highlight",
        content: "Tamamlayıcı sağlık sigortası, SGK anlaşmalı hastanelerde hizmet sunarken, özel sağlık sigortası daha geniş kapsamlı ve kişiselleştirilmiş teminatlar sağlar.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Çocuğunuzun sağlığı için en uygun sigorta çözümünü bulmak için sigortanikarsilastir.com'u ziyaret edin ve teklif almaya başlayın!"
      },
      {
        type: "cta",
        content: "Hemen Başla!",
        ctaText: "Çocuk Sağlık Sigortası Teklifi Al",
        ctaLink: "/ozel-saglik-teklif"
      }
    ],
    date: "2025-01-30",
    category: "sagligim",
    tags: ["ozel-saglik", "tss"],
    suggest_blogs: true,
    meta_title: "Çocuk Sağlık Sigortası Nedir? 2025 Rehberi",
    meta_description: "Çocuk sağlık sigortası nedir, nasıl yaptırılır? 0-18 yaş arası çocuklar için sağlık sigortası çeşitleri, fiyatları ve avantajları.",
  },
  {
    id: 5,
    title: "Engelli Raporu ile Araç Alımı ve Şartları: 2025 Rehberi",
    href: "/blog/engelli-raporu-ile-arac-alimi-sartlari-2025-rehberi",
    desc: "Engelli raporu ile araç alımı şartları, ÖTV muafiyeti, gerekli belgeler ve noter süreci. 2025 yılında engelli bireyler için araç alım rehberi...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Engelli bireylerin yaşam kalitesini artırmak ve ulaşım ihtiyaçlarını kolaylaştırmak için Türkiye'de ÖTV (Özel Tüketim Vergisi) muafiyeti gibi önemli teşvikler sunuluyor. Engelli raporu ile araç alımı, bu teşviklerden yararlanarak daha uygun maliyetlerle araç sahibi olma imkanı sağlıyor.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Engelli Raporu ile Araç Alımı Nedir?",
          "ÖTV Muafiyeti Şartları Nelerdir?",
          "Gerekli Belgeler Nelerdir?",
          "Noter ve Sigorta Süreci",
          "Araç Kullanımı ve Kısıtlamalar",
          "Dikkat Edilmesi Gerekenler",
          "sigortanikarsilastir.com ile Trafik ve Kasko Sigortası Teklifi Alın",
          "Sıkça Sorulan Sorular"
        ]
      },
      {
        type: "paragraph",
        content: "Engelli bireylerin yaşam kalitesini artırmak ve ulaşım ihtiyaçlarını kolaylaştırmak için Türkiye'de ÖTV (Özel Tüketim Vergisi) muafiyeti gibi önemli teşvikler sunuluyor. Engelli raporu ile araç alımı, bu teşviklerden yararlanarak daha uygun maliyetlerle araç sahibi olma imkanı sağlıyor. sigortanikarsilastir.com olarak, bu rehberde 2025 yılında engelli raporu ile araç alım sürecini, şartlarını ve noter ile sigorta işlemlerini tarafsız bir şekilde açıklıyoruz. Hemen platformumuz üzerinden en uygun trafik ve kasko sigortası tekliflerini karşılaştırarak bu süreci güvenle tamamlayabilirsiniz!"
      },
      {
        type: "heading",
        content: "Engelli Raporu ile Araç Alımı Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Engelli raporu ile araç alımı, engelli bireylerin ÖTV muafiyetinden yararlanarak sıfır kilometre araç satın almasını sağlayan bir haktır. Bu muafiyet, engelli bireylerin ulaşım ihtiyaçlarını karşılamalarını kolaylaştırarak daha bağımsız bir yaşam sürmelerine destek olur. 2025 yılında, ÖTV muafiyetli araç alımı için belirlenen üst limit 2.290.200 TL'dir (vergiler dahil) ve araçların en az %40 yerli üretim şartını karşılaması gerekmektedir. Ayrıca, engelli bireyler Motorlu Taşıtlar Vergisi'nden (MTV) de muaftır."
      },
      {
        type: "cta",
        content: "Hemen Trafik Sigortası Teklifi Al, Süreci Hızlandır!",
        ctaText: "Trafik Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "ÖTV Muafiyeti Şartları Nelerdir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "ÖTV muafiyetinden yararlanmak için engelli bireylerin belirli şartları sağlaması gerekir. Şartlar, engellilik oranına göre iki kategoride değerlendirilir:"
      },
      {
        type: "heading",
        content: "%90 ve Üzeri Engellilik Oranı",
        level: 3
      },
      {
        type: "list",
        items: [
          "Kimler Yararlanabilir? Engellilik oranı %90 ve üzeri olan bireyler, engel türüne (zihinsel, görme, işitme, ortopedik vb.) bakılmaksızın ÖTV muafiyetinden faydalanabilir.",
          "Yaş Sınırı: 18 yaşından büyük bireyler kendi adına işlem yapabilir. 18 yaş altı bireyler için anne-baba muvafakatnamesi, zihinsel engelli bireyler için vasi kararı gereklidir.",
          "Araç Kullanımı: Araç, engelli birey tarafından kullanılabileceği gibi, ruhsat sahibi dışında herhangi bir kişi tarafından da kullanılabilir (kısıtlama yoktur).",
          "Özel Tertibat: Sürekli tekerlekli sandalye veya sedye kullanan bireyler için araçta özel tertibat zorunludur. Diğer durumlarda tertibat aranmaz."
        ]
      },
      {
        type: "heading",
        content: "%40-%89 Engellilik Oranı",
        level: 3
      },
      {
        type: "list",
        items: [
          "Kimler Yararlanabilir? Ortopedik engeli olan ve sağlık raporunda \"hareket ettirici aksamda özel tertibatlı araç kullanması gerekir\" ibaresi bulunan bireyler ÖTV muafiyetinden yararlanabilir.",
          "Sürücü Belgesi: A veya B sınıfı engelli sürücü belgesi zorunludur. Raporda \"tertibatlı araç kullanır\" veya \"otomatik vitesli araç kullanabilir\" ibaresi yer almalıdır.",
          "Araç Kullanımı: Aracı sadece engelli birey kullanabilir; yakınları kullanamaz.",
          "Özel Tertibat: Fren, gaz pedalı veya vites kolunda engel durumuna uygun düzenlemeler yapılmalıdır (örneğin, el kumandası veya sol ayak pedalı)."
        ]
      },
      {
        type: "highlight",
        content: "1 Ocak 2023 itibarıyla motor silindir hacmi sınırlaması kaldırılmıştır, ancak araç fiyatı 2.290.200 TL'yi aşmamalı ve %40 yerli üretim şartını karşılamalıdır (örneğin, Fiat Egea, Renault Clio, Toyota Corolla).",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Gerekli Belgeler Nelerdir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Engelli raporu ile araç alımı için aşağıdaki belgeler gereklidir:"
      },
      {
        type: "list",
        items: [
          "Engelli Sağlık Kurulu Raporu: Tam teşekküllü bir hastaneden alınmış, engellilik oranını ve araç kullanımı için özel tertibat gerekliliklerini belirten rapor.",
          "Kimlik Belgeleri: Engelli bireyin nüfus cüzdanı, fotokopisi ve 5 adet vesikalık fotoğraf.",
          "Sürücü Belgesi: %40-%89 engellilik oranı için A veya B sınıfı engelli sürücü belgesi (raporda belirtilen kodlarla).",
          "Muvafakatname veya Vasi Kararı: 18 yaş altı bireyler için anne-baba muvafakatnamesi; zihinsel engelli bireyler için mahkemece onaylı vasi kararı.",
          "Vergi Dairesi Taahhütnamesi: 2025 itibarıyla, ÖTV muafiyetinden yararlananların vergi dairesine taahhütname sunması gereklidir.",
          "Vekaletname (Gerekirse): İşlemleri vekil yapacaksa noter onaylı vekaletname."
        ]
      },
      {
        type: "cta",
        content: "Belgelerinizi Hazırlayın, Hemen Sigorta Teklifi Alın!",
        ctaText: "Trafik Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Noter ve Sigorta Süreci",
        level: 2
      },
      {
        type: "heading",
        content: "Noter Süreci",
        level: 3
      },
      {
        type: "list",
        items: [
          "Başvuru: Alıcı (engelli birey veya vasisi) ve satıcı, gerekli belgelerle notere başvurur. Noter, araçta haciz/rehin olup olmadığını kontrol eder.",
          "ÖTV Muafiyeti Onayı: Noter, engelli sağlık raporunu ve vergi dairesinden alınan ÖTV muafiyet yazısını kontrol eder.",
          "Satış Sözleşmesi: ÖTV muafiyeti onaylanırsa, noter satış sözleşmesini hazırlar ve araç engelli birey adına tescil edilir.",
          "Ücretler: 2025 noter ücretleri yaklaşık 1.489 TL (satış ücreti) + 19 TL (tescil ücreti) + 44 TL (minimum harç). Alıcı, ÖTV ödemez, ancak KDV öder (%18)."
        ]
      },
      {
        type: "heading",
        content: "Trafik Sigortası",
        level: 3
      },
      {
        type: "list",
        items: [
          "Zorunluluk: 5 Aralık 2024 düzenlemesine göre, araç alımı öncesi alıcı adına zorunlu trafik sigortası yaptırılmalıdır.",
          "Engelli İndirimi: Bazı sigorta şirketleri, engelli raporu olan bireylere trafik sigortasında indirim sunar. İndirim oranları şirketlere göre değişir.",
          "Kasko Sigortası: ÖTV muafiyetli araçlar için kasko sigortası, kaza, hırsızlık ve doğal afetlere karşı ek koruma sağlar."
        ]
      },
      {
        type: "cta",
        content: "Trafik ve Kasko Sigortası Tekliflerini Hemen Karşılaştır!",
        ctaText: "Sigorta Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Araç Kullanımı ve Kısıtlamalar",
        level: 2
      },
      {
        type: "list",
        items: [
          "%90 ve Üzeri Engellilik: Araç, engelli birey adına kayıtlı olsa da herhangi bir kişi tarafından kullanılabilir (özel tertibat aranmayan durumlarda).",
          "%40-%89 Engellilik: Aracı sadece engelli birey kullanabilir; özel tertibat zorunludur.",
          "Satış Kısıtlaması: ÖTV muafiyetli araçlar 10 yıl boyunca satılamaz veya devredilemez (ÖTV ödenmeden). Ancak, kaza, sel veya yangın gibi durumlarda pert olan araçlar için yeni araç alımı ÖTV'siz yapılabilir.",
          "Yerlilik Şartı: 2025 itibarıyla araçların en az %40 yerli üretim olması gerekir (örneğin, Renault, Fiat, Toyota modelleri)."
        ]
      },
      {
        type: "heading",
        content: "Dikkat Edilmesi Gerekenler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Rapor Süresi: Engelli sağlık raporunun süreli veya süresiz olduğunu kontrol edin. Süreli raporlar yenilenmelidir.",
          "Araç Kontrolü: Satın almadan önce araçta haciz/rehin olup olmadığını e-Devlet üzerinden sorgulayın.",
          "Ekspertiz: Sıfır araçlarda bile ekspertiz raporu talep edin.",
          "Sigorta Seçimi: Trafik sigortası için engelli indirimlerini araştırın. Kasko sigortası ile aracı tam koruma altına alın.",
          "Yasal Süreç: ÖTV muafiyet yazısını vergi dairesinden alın ve noter işlemine eksiksiz belgelerle gidin."
        ]
      },
      {
        type: "cta",
        content: "Güvenli Bir Alım İçin Sigorta Tekliflerini İncele!",
        ctaText: "Trafik ve Kasko Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "sigortanikarsilastir.com ile Trafik ve Kasko Sigortası Teklifi Alın",
        level: 2
      },
      {
        type: "paragraph",
        content: "sigortanikarsilastir.com, engelli raporu ile araç alımı sürecinde zorunlu trafik sigortası ve isteğe bağlı kasko sigortası için en uygun teklifleri sunar. Platformumuzun avantajları:"
      },
      {
        type: "list",
        items: [
          "Tarafsızlık: Hiçbir sigorta şirketine bağlı olmadan, sadece sizin ihtiyaçlarınızı ön planda tutarız.",
          "Hız ve Kolaylık: Birkaç dakikada birden fazla sigorta teklifini karşılaştırabilirsiniz.",
          "Güven: Şeffaf ve kullanıcı dostu bir deneyim sunuyoruz.",
          "7/24 Destek: Sorularınız için her zaman yanınızdayız."
        ]
      },
      {
        type: "paragraph",
        content: "Hemen sigortanikarsilastir.com'u ziyaret edin, engelli indirimli trafik sigortası ve kasko tekliflerini keşfederek ÖTV muafiyetli aracınızı güvence altına alın!"
      },
      {
        type: "cta",
        content: "Şimdi Teklif Al ve Aracını Koru!",
        ctaText: "Trafik ve Kasko Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "Engelli raporu ile araç alımı için yaş sınırı nedir?"
      },
      {
        type: "highlight",
        content: "18 yaş ve üzeri bireyler kendi adına işlem yapabilir. 18 yaş altı için anne-baba muvafakatnamesi, zihinsel engelli bireyler için vasi kararı gereklidir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "%90 altı engelliler ÖTV muafiyetinden yararlanabilir mi?"
      },
      {
        type: "highlight",
        content: "Evet, ortopedik engelli bireyler, özel tertibatlı araç kullanmaları şartıyla ve A/B sınıfı engelli sürücü belgesiyle muafiyetten yararlanabilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "ÖTV muafiyetli araç satılabilir mi?"
      },
      {
        type: "highlight",
        content: "10 yıl içinde satılması için ÖTV ödenmelidir. Kaza, sel veya yangın sonucu pert olan araçlar için yeni araç alımı ÖTV'siz yapılabilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Hangi araçlar ÖTV muafiyetine dahildir?"
      },
      {
        type: "highlight",
        content: "Vergiler dahil fiyatı 2.290.200 TL'yi aşmayan, %40 yerli üretim şartını karşılayan sıfır kilometre binek otomobiller, motosikletler ve eşya taşıma araçları.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Trafik sigortasında engelli indirimi var mı?"
      },
      {
        type: "highlight",
        content: "Bazı sigorta şirketleri engelli raporu olan bireylere indirim sunar. Detaylı teklifler için sigortanikarsilastir.com'u kullanabilirsiniz.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Engelli raporu ile araç alımı sürecini kolaylaştırmak için sigortanikarsilastir.com'u ziyaret edin ve en uygun sigorta tekliflerini hemen alın!"
      },
      {
        type: "cta",
        content: "Hemen Başla!",
        ctaText: "Trafik ve Kasko Sigortası Teklifi Al",
        ctaLink: "/trafik-teklif"
      }
    ],
    date: "2025-02-05",
    category: "aracim",
    tags: ["trafik", "kasko"],
    suggest_blogs: true,
    meta_title: "Engelli Raporu ile Araç Alımı ve Şartları: 2025 Rehberi",
    meta_description: "Engelli raporu ile araç alımı şartları, ÖTV muafiyeti, gerekli belgeler ve noter süreci. 2025 yılında engelli bireyler için araç alım rehberi.",
  },
  {
    id: 6,
    title: "🏠 Ev Eşya Sigortası: Evinizi ve Eşyalarınızı Güvence Altına Almanın Kolay Yolu",
    href: "/blog/ev-esya-sigortasi-evinizi-esyalarinizi-guvence-altina-almanin-kolay-yolu",
    desc: "Ev eşya sigortası nedir, nasıl yapılır? Yangın, hırsızlık, su baskını gibi risklere karşı evinizdeki eşyalarınızı koruyun. En uygun ev eşya sigortası teklifleri...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Ev Eşya Sigortası; evinizde bulunan mobilya, elektronik cihazlar, beyaz eşyalar ve kişisel eşyaları; yangın, su baskını, hırsızlık gibi risklere karşı koruma altına alan bir sigorta türüdür. Bu sigorta, evin yapısal değil; taşınabilir eşyalarına odaklanır ve zarar durumunda maddi kayıpların karşılanmasına yardımcı olur.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Ev Eşya Sigortası Nedir?",
          "Ev Sahipleri ve Kiracılar İçin Neden Önemlidir?",
          "Ev Eşya Sigortası Hangi Durumlarda Devreye Girer?",
          "Ev Eşya Sigortası ile Konut Sigortası Arasındaki Farklar",
          "Doğru Poliçeyi Seçerken Nelere Dikkat Etmelisiniz?",
          "Ev Eşyalarının Değerini Nasıl Hesaplayabilirsiniz?",
          "Sigorta Fiyatları Neye Göre Değişir?",
          "Hangi Durumlar Kapsam Dışıdır?",
          "Hasar Durumunda Ne Yapmalısınız?",
          "Sıkça Sorulan Sorular"
        ]
      },
      {
        type: "heading",
        content: "Ev Eşya Sigortası Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ev Eşya Sigortası; evinizde bulunan mobilya, elektronik cihazlar, beyaz eşyalar ve kişisel eşyaları; yangın, su baskını, hırsızlık gibi risklere karşı koruma altına alan bir sigorta türüdür."
      },
      {
        type: "paragraph",
        content: "Bu sigorta, evin yapısal değil; taşınabilir eşyalarına odaklanır ve zarar durumunda maddi kayıpların karşılanmasına yardımcı olur."
      },
      {
        type: "heading",
        content: "Ev Sahipleri ve Kiracılar İçin Neden Önemlidir?",
        level: 2
      },
      {
        type: "list",
        items: [
          "Ev sahipleri, evdeki demirbaşların yanında eşyalarını da güvenceye almak ister.",
          "Kiracılar ise kendi eşyaları için ayrı poliçe yaptırarak riskleri minimize edebilir.",
          "Bazı sigorta şirketleri, kiracılar için özel hazırlanmış eşya poliçeleri sunar. Bu sayede her iki taraf da ayrı ayrı korunmuş olur."
        ]
      },
      {
        type: "heading",
        content: "Ev Eşya Sigortası Hangi Durumlarda Devreye Girer?",
        level: 2
      },
      {
        type: "list",
        items: [
          "Yangın",
          "Su baskını",
          "Hırsızlık",
          "Fırtına veya dolu hasarı",
          "Deprem (poliçeye ek teminat olarak dahil edilebilir)",
          "Elektrik arızası sonucu elektronik eşyalarda oluşan hasarlar (bazı poliçelerde)"
        ]
      },
      {
        type: "highlight",
        content: "Teminatlar poliçeye göre değişiklik gösterir.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Ev Eşya Sigortası ile Konut Sigortası Arasındaki Farklar",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ev Eşya Sigortası ile Konut Sigortası arasındaki temel farkları aşağıdaki tabloda görebilirsiniz:"
      },
      {
        type: "paragraph",
        content: `<div class="overflow-x-auto my-6">
          <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead class="bg-blue-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Özellik</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Konut Sigortası</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Ev Eşya Sigortası</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Kapsam</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Binanın fiziksel yapısı</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Evdeki taşınabilir eşyalar</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Örnek Teminat</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Duvar çatlağı, çatı hasarı</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Televizyon, koltuk, buzdolabı</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Kimler İçin?</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Ev sahipleri</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Ev sahipleri ve kiracılar</td>
              </tr>
            </tbody>
          </table>
        </div>`
      },
      {
        type: "highlight",
        content: "En geniş koruma için iki sigortayı birlikte yaptırmanız önerilir.",
        highlightType: "info"
      },
      {
        type: "cta",
        content: "Konut Sigortası Tekliflerini Karşılaştırın!",
        ctaText: "Konut Sigortası Teklifi Al", 
        ctaLink: "/konut-teklif"
      },
      {
        type: "heading",
        content: "Doğru Poliçeyi Seçerken Nelere Dikkat Etmelisiniz?",
        level: 2
      },
      {
        type: "list",
        items: [
          "Teminat limitleri",
          "Dahil edilen riskler",
          "Ek teminatlar (değerli eşyalar, asistans hizmetleri)",
          "Poliçenin yıllık prim bedeli",
          "Sigorta şirketinin hasar ödeme süreci ve müşteri memnuniyeti"
        ]
      },
      {
        type: "paragraph",
        content: "Sigorta karşılaştırması yapmak, en doğru kararı vermenizi kolaylaştırır."
      },
      {
        type: "paragraph",
        content: "Sigortanikarsilastir.com üzerinden dakikalar içinde farklı firmaların tekliflerini inceleyebilirsiniz."
      },
      {
        type: "heading",
        content: "Ev Eşyalarının Değerini Nasıl Hesaplayabilirsiniz?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ev sigortası yapılırken eşyalarınızın toplam değeri önemlidir. Doğru hesaplama için:"
      },
      {
        type: "list",
        items: [
          "Eşyaları kategoriye göre listeleyin",
          "Tahmini piyasa değerini belirleyin",
          "Varsa fatura ya da garanti belgesi saklayın",
          "Değerli ürünler için ek teminat isteyin"
        ]
      },
      {
        type: "heading",
        content: "Konut Sigortası Fiyatları Neye Göre Değişir?",
        level: 2
      },
      {
        type: "list",
        items: [
          "Eşyaların toplam değeri",
          "Poliçe kapsamı ve ek teminatlar",
          "Yaşanılan bölgenin risk seviyesi",
          "Binanın yapı özellikleri (kat sayısı, bina yaşı vs.)"
        ]
      },
      {
        type: "highlight",
        content: "Örnek: 500.000 TL'lik eşyalar için İstanbul'da yapılan sigorta primi yıllık ortalama 1.500 – 3.000 TL arasında olabilir.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Kapsam Dışında Kalan Durumlar",
        level: 2
      },
      {
        type: "paragraph",
        content: "Aşağıdaki durumlar genellikle sigorta kapsamı dışında kalır:"
      },
      {
        type: "list",
        items: [
          "Kullanım hataları",
          "Evcil hayvanın sebep olduğu zararlar",
          "İhmal ve kasıtlı zararlar",
          "Rutin bakım ve küçük tamiratlar"
        ]
      },
      {
        type: "highlight",
        content: "Poliçedeki \"hariç tutulan haller\" bölümünü dikkatle inceleyin.",
        highlightType: "warning"
      },
      {
        type: "heading",
        content: "Hasar Durumunda Ne Yapmalısınız?",
        level: 2
      },
      {
        type: "list",
        items: [
          "Hasar tespit edilir edilmez sigorta şirketine başvuru yapın",
          "Gerekli belgeleri hazırlayın: Zarar gören eşya fotoğrafları, Faturalar (varsa), İtfaiye, emniyet gibi resmi tutanaklar",
          "Eksper süreci başlar",
          "Değerlendirme sonrası ödeme yapılır"
        ]
      },
      {
        type: "highlight",
        content: "Süreç genellikle 1 ila 3 hafta içinde tamamlanır.",
        highlightType: "success"
      },
      {
        type: "cta",
        content: "Ev Eşya Sigortası ile Güvende Olun!",
        ctaText: "Konut Sigortası Teklifi Al",
        ctaLink: "/konut-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ev Eşya Sigortası kiracılar için gerekli mi?"
      },
      {
        type: "highlight",
        content: "Evet, kiracılar da kendi eşyaları için bu sigortayı yaptırabilir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Hangi eşyalar sigortaya dahil edilebilir?"
      },
      {
        type: "highlight",
        content: "Mobilya, beyaz eşya, elektronik cihazlar, kişisel eşyalar ve ek teminatla mücevher, sanat eseri gibi değerli ürünler.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Sigorta ne kadar sürede ödeme yapar?"
      },
      {
        type: "highlight",
        content: "Eksper raporu sonrası ortalama 1-3 hafta içinde ödeme yapılır.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Değerli eşyalar için ek teminat gerekir mi?"
      },
      {
        type: "highlight",
        content: "Evet, yüksek bedelli eşyalar mutlaka ayrıca teminat altına alınmalıdır.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Poliçe iptal edilebilir mi?"
      },
      {
        type: "highlight",
        content: "Evet, iptal mümkündür. Ancak her şirketin farklı iptal ve iade koşulları bulunur.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Sonuç: Evdeki Huzurun Güvencesi",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ev Eşya Sigortası, yaşadığınız alanı sadece maddi olarak değil, duygusal anlamda da güvence altına alır."
      },
      {
        type: "list",
        items: [
          "Hem ev sahipleri hem kiracılar için uygundur",
          "Beklenmeyen risklere karşı ekonomik çözümler sunar",
          "Sigortanikarsilastir.com ile en uygun poliçeyi kolayca bulabilirsiniz"
        ]
      },
      {
        type: "cta",
        content: "Şimdi teklifleri karşılaştırın, evinizi güvence altına alın!",
        ctaText: "Konut Sigortası Teklifi Al",
        ctaLink: "/konut-teklif"
      }
    ],
    date: "2025-02-10",
    category: "evim",
    tags: ["konut"],
    suggest_blogs: true,
    meta_title: "Ev Eşya Sigortası: Evinizi ve Eşyalarınızı Güvence Altına Almanın Kolay Yolu",
    meta_description: "Ev eşya sigortası nedir, nasıl yapılır? Yangın, hırsızlık, su baskını gibi risklere karşı evinizdeki eşyalarınızı koruyun. En uygun ev eşya sigortası teklifleri.",
  },
  {
    id: 7,
    title: "Pert Kasko ve Ağır Hasarlı Araçlara Kasko Sigortası Hakkında Bilmeniz Gerekenler",
    href: "/blog/pert-kasko-agir-hasarli-araclara-kasko-sigortasi-hakkinda-bilmeniz-gerekenler",
    desc: "Pert kasko nedir, nasıl çalışır? Ağır hasarlı araçlara kasko yaptırılabilir mi? Pert kasko fiyatları ve teminatları hakkında detaylı bilgi...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Pert araç, bir kaza veya hasar sonucunda tamir maliyetinin aracın piyasa değerini aşması nedeniyle ekonomik olarak onarılması mümkün olmayan araçları ifade eder. Sigorta şirketleri, aracın hasar durumunu ve tamir masraflarını detaylı bir eksper raporu ile değerlendirerek \"pert\" kararını verir.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Pert Araç Nedir?",
          "Pert Kasko Nedir ve Nasıl Çalışır?",
          "Ağır Hasarlı Araçlara Kasko Yaptırılabilir Mi?",
          "Pert Kasko Sigortası Hangi Durumlarda Teminat Sağlar?",
          "Pert Kasko Fiyatları Nasıl Belirlenir?",
          "Pert Araç Satın Alırken Nelere Dikkat Edilmeli?",
          "Sigorta Şirketleri Pert Araçlara Nasıl Yaklaşır?",
          "Sonuç",
          "Sıkça Sorulan Sorular"
        ]
      },
      {
        type: "heading",
        content: "Pert Araç Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Pert araç, bir kaza veya hasar sonucunda tamir maliyetinin aracın piyasa değerini aşması nedeniyle ekonomik olarak onarılması mümkün olmayan araçları ifade eder. Sigorta şirketleri, aracın hasar durumunu ve tamir masraflarını detaylı bir eksper raporu ile değerlendirerek \"pert\" kararını verir."
      },
      {
        type: "list",
        items: [
          "Tam Hasar (Pert): Araç trafiğe çıkamayacak derecede hasar görmüş ve onarımı ekonomik açıdan uygun olmayan araçlardır.",
          "Onarılabilir Ağır Hasar: Büyük hasar almış, ancak tamir edilerek trafiğe çıkması mümkün olan araçlardır."
        ]
      },
      {
        type: "cta",
        content: "Aracınızın pert olup olmadığını öğrenmek için hemen eksper raporu alabilir, SigortaNikarsilastir.com üzerinden teklifleri karşılaştırabilirsiniz!",
        ctaText: "Teklif Al",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Pert Kasko Nedir ve Nasıl Çalışır?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Pert kasko, daha önce ağır hasar almış veya pert kaydı bulunan araçlar için geliştirilen özel bir kasko sigortası türüdür. Standart kaskoya kıyasla daha sınırlı teminatlar sunar ve genellikle prim tutarları daha yüksektir."
      },
      {
        type: "heading",
        content: "Pert Kasko ile Standart Kasko Arasındaki Temel Farklar:",
        level: 3
      },
      {
        type: "image",
        content: "Pert kasko ile standart kasko karşılaştırma tablosu",
        imageSrc: "/images/blog/detail/kasko-fark.png",
        imageAlt: "Pert Kasko ile Standart Kasko Arasındaki Farklar",
        imageCaption: "Pert kasko poliçesi kapsamında, aracın yeni hasarları sigorta kapsamına girer."
      },
      {
        type: "paragraph",
        content: "Pert kasko poliçesi kapsamında, aracın yeni hasarları sigorta kapsamına girer. Hasar durumunda araç sahibi sigorta şirketine bildirimde bulunur, eksper incelemesi yapılır ve tazminat ödemesi aracın güncel piyasa değeri doğrultusunda yapılır."
      },
      {
        type: "cta",
        content: "Pert kasko tekliflerini karşılaştırmak ve en uygun poliçeyi bulmak için hemen SigortaNikarsilastir.com'u ziyaret edin!",
        ctaText: "Hemen Karşılaştır",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Ağır Hasarlı Araçlara Kasko Yaptırılabilir Mi?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Standart kasko poliçeleri genellikle ağır hasarlı ya da pert kaydı bulunan araçları kapsam dışı bırakır. Ancak bazı sigorta şirketleri, pert araçlar için özel olarak tasarlanmış pert kasko poliçeleri sunmaktadır."
      },
      {
        type: "paragraph",
        content: "Bu poliçeler aracın trafik güvenliği ve teknik uygunluğuna göre verilir. Aracın motor, şasi, fren sistemi ve güvenlik donanımlarının eksiksiz ve çalışır durumda olması gerekir. Ayrıca aracın hasar geçmişi ve sigorta geçmişi de prim ve kabul koşullarını etkiler."
      },
      {
        type: "cta",
        content: "Aracınız ağır hasarlıysa ve kasko arıyorsanız, şimdi teklif alın, uygun seçenekleri kaçırmayın!",
        ctaText: "Teklif Al",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Pert Kasko Sigortası Hangi Durumlarda Teminat Sağlar?",
        level: 2
      },
      {
        type: "list",
        items: [
          "Trafik kazası sonucu aracın kullanılamaz hale gelmesi",
          "Yangın, sel, deprem gibi doğal afetler nedeniyle ağır hasar görmesi",
          "Çalınma ve bulunamama durumları (genellikle belirli bekleme süresinden sonra)",
          "Değer kaybı ve onarım masraflarının poliçe kapsamında olması halinde"
        ]
      },
      {
        type: "paragraph",
        content: "Poliçe kapsamı ve teminat limitleri sigorta şirketine ve seçilen poliçe türüne göre değişiklik gösterebilir. Bu nedenle poliçenizi detaylı şekilde incelemeniz tavsiye edilir."
      },
      {
        type: "cta",
        content: "Sigorta şartlarınızı karşılaştırarak size en uygun pert kasko tekliflerini görmek için hemen tıklayın!",
        ctaText: "Fiyatları Gör",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Pert Kasko Fiyatları Nasıl Belirlenir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Pert kasko primleri, aracın:"
      },
      {
        type: "list",
        items: [
          "Modeli ve üretim yılı",
          "Hasar geçmişi ve önceki pert kayıtları",
          "Güncel piyasa değeri",
          "Sigorta şirketinin ağır hasarlı araçlara yönelik politikaları"
        ]
      },
      {
        type: "paragraph",
        content: "gibi kriterlere bağlı olarak hesaplanır. Ağır hasarlı araçlar daha yüksek risk grubunda yer aldığından prim tutarları standart kaskoya göre genellikle daha yüksektir."
      },
      {
        type: "cta",
        content: "Pert kasko fiyatlarını öğrenmek ve bütçenize uygun poliçeyi bulmak için ücretsiz teklif alın!",
        ctaText: "Ücretsiz Teklif Al",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Pert Araç Satın Alırken Nelere Dikkat Edilmeli?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ağır hasarlı araç satın almak isteyenler için bazı kritik noktalar şunlardır:"
      },
      {
        type: "list",
        items: [
          "Araç için kapsamlı bir ekspertiz raporu alınmalı",
          "Onarım geçmişi ve kullanılan yedek parça kalitesi kontrol edilmeli",
          "Aracın trafiğe uygunluğu ve güvenlik standartları incelenmeli",
          "Finansman seçenekleri ve sigorta imkanları araştırılmalıdır"
        ]
      },
      {
        type: "paragraph",
        content: "Bu adımlar, ileride oluşabilecek risklerin önüne geçmek için önemlidir."
      },
      {
        type: "cta",
        content: "Pert araç satın almadan önce sigorta imkanlarınızı değerlendirmek için hemen teklif alın!",
        ctaText: "Hemen Başvur",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Sigorta Şirketleri Pert Araçlara Nasıl Yaklaşır?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Sigorta şirketleri, ağır hasarlı araçları yüksek risk grubunda değerlendirir ve bu nedenle poliçe kabulü konusunda titiz davranır. Eksper raporu, aracın teknik durumu ve önceki sigorta kayıtları başvurunun değerlendirilmesinde anahtar rol oynar."
      },
      {
        type: "heading",
        content: "Sonuç",
        level: 2
      },
      {
        type: "paragraph",
        content: "Ağır hasarlı ya da pert kaydı bulunan araçlar için sigorta seçenekleri standart kaskodan farklıdır. Pert kasko, bu araçları güvence altına almak için geliştirilmiş özel bir üründür. Aracınızın durumu, poliçe kapsamı ve fiyatlandırma detayları hakkında bilgi almak için SigortaNikarsilastir.com üzerinden teklif alabilir, karşılaştırma yapabilirsiniz."
      },
      {
        type: "cta",
        content: "Size en uygun pert kasko poliçesini bulmak için hemen teklif al ve karşılaştırmaya başla!",
        ctaText: "Teklif Al",
        ctaLink: "/kasko-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "Pert kasko ile standart kasko arasındaki en önemli fark nedir?"
      },
      {
        type: "highlight",
        content: "Pert kasko, ağır hasarlı araçlar için sınırlı teminat sunar ve primleri daha yüksektir. Standart kasko ise hasarsız araçlar için daha geniş teminat sağlar.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Pert kaydı olan araçlar kasko yaptırabilir mi?"
      },
      {
        type: "highlight",
        content: "Evet, ancak genellikle pert kasko poliçesi ile ve standart kaskoya göre daha yüksek primlerle mümkündür.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Pert araçlarda tazminat nasıl hesaplanır?"
      },
      {
        type: "highlight",
        content: "Eksper raporu ve aracın güncel piyasa değeri temel alınarak hesaplanır.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Herhangi bir sorunuz olursa ya da teklif almak isterseniz, SigortaNikarsilastir.com üzerinden kolayca karşılaştırma yapabilir, size en uygun sigortayı bulabilirsiniz."
      }
    ],
    date: "2025-02-15",
    category: "aracim",
    tags: ["kasko"],
    suggest_blogs: true,
    meta_title: "Pert Kasko ve Ağır Hasarlı Araçlara Kasko Sigortası Hakkında Bilmeniz Gerekenler",
    meta_description: "Pert kasko nedir, nasıl çalışır? Ağır hasarlı araçlara kasko yaptırılabilir mi? Pert kasko fiyatları ve teminatları hakkında detaylı bilgi.",
  },
  {
    id: 8,
    title: "SGK'lılara Özel: Tamamlayıcı Sağlık Sigortası ile Özel Hastanede Ek Ücret Ödemeyin",
    href: "/blog/sgk-lilara-ozel-tamamlayici-saglik-sigortasi-ile-ozel-hastanede-ek-ucret-odemeyin",
    desc: "Tamamlayıcı Sağlık Sigortası nedir, kimler yaptırabilir? SGK'lılar için TSS avantajları, kapsamı ve fiyatları. Özel hastanede ek ücret ödemeden hizmet alın...",
    image: "/images/blog-gorsel.png",
    detail_image: "/images/blog/blog-detail.png",
    content: "Tamamlayıcı Sağlık Sigortası (TSS), SGK güvencesi olan bireylerin özel hastanelerde fark ücreti ödemeden sağlık hizmeti alabilmesini sağlayan bir sağlık sigortası türüdür. SGK'nın karşılamadığı ya da sınırlı olarak karşıladığı özel hastane masraflarının farkını sigorta şirketi karşılar.",
    fullContent: [
      {
        type: "heading",
        content: "İçindekiler",
        level: 2
      },
      {
        type: "list",
        items: [
          "Tamamlayıcı Sağlık Sigortası Nedir?",
          "Kimler Tamamlayıcı Sağlık Sigortası Yaptırabilir?",
          "Tamamlayıcı Sağlık Sigortası Neleri Kapsar?",
          "TSS ile ÖSS Arasındaki Farklar",
          "Tamamlayıcı Sağlık Sigortası Yaptırmanın Avantajları",
          "Sıkça Sorulan Sorular",
          "Size Özel Hızlı Teklif Çağrısı"
        ]
      },
      {
        type: "heading",
        content: "Tamamlayıcı Sağlık Sigortası Nedir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "Tamamlayıcı Sağlık Sigortası (TSS), SGK güvencesi olan bireylerin özel hastanelerde fark ücreti ödemeden sağlık hizmeti alabilmesini sağlayan bir sağlık sigortası türüdür."
      },
      {
        type: "paragraph",
        content: "SGK'nın karşılamadığı ya da sınırlı olarak karşıladığı özel hastane masraflarının farkını sigorta şirketi karşılar. Bu sayede hem bütçenizi korur hem de özel hastane konforunda hizmet alabilirsiniz."
      },
      {
        type: "heading",
        content: "Kimler Tamamlayıcı Sağlık Sigortası Yaptırabilir?",
        level: 2
      },
      {
        type: "paragraph",
        content: "TSS yalnızca SGK'lı bireyler için geçerlidir. 0-65 yaş arası herkes bu sigortayı yaptırabilir. Ayrıca;"
      },
      {
        type: "list",
        items: [
          "Aile bireyleri için ortak poliçe düzenlenebilir.",
          "Yeni doğan bebekler için belirli süre sonra poliçeye dahil edilme mümkündür."
        ]
      },
      {
        type: "heading",
        content: "Tamamlayıcı Sağlık Sigortası Neleri Kapsar?",
        level: 2
      },
      {
        type: "paragraph",
        content: "TSS, anlaşmalı özel hastanelerde geçerlidir ve iki ana teminattan oluşur:"
      },
      {
        type: "list",
        items: [
          "Yatarak Tedavi Teminatı: Ameliyatlar, yoğun bakım, hastanede yatış gibi giderleri kapsar.",
          "Ayakta Tedavi Teminatı: Doktor muayenesi, tahlil, MR, röntgen gibi işlemler belirli limitlerle karşılanır."
        ]
      },
      {
        type: "highlight",
        content: "Kapsam sigorta şirketine göre farklılık gösterebilir.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "TSS ile ÖSS Arasındaki Farklar",
        level: 2
      },
      {
        type: "paragraph",
        content: "Tamamlayıcı Sağlık Sigortası ile Özel Sağlık Sigortası arasındaki temel farkları aşağıdaki tabloda görebilirsiniz:"
      },
      {
        type: "paragraph",
        content: `<div class="overflow-x-auto my-6">
          <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead class="bg-blue-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Özellik</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Tamamlayıcı Sağlık Sigortası (TSS)</th>
                <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-300">Özel Sağlık Sigortası (ÖSS)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">SGK Gerekli mi?</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Evet</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Hayır</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Fiyat</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Daha uygun</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Daha yüksek</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Kapsam</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">SGK'nın ödemediği fark ücretlerini kapsar</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Geniş kapsam (ayakta + yatarak + doğum vb.)</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Yurtdışı Kullanımı</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Yok</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Ek teminatla mümkün</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-200">Anlaşmalı Kurumlar</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">SGK + sigorta şirketi hastaneleri</td>
                <td class="px-4 py-3 text-sm text-gray-600 border-b border-gray-200">Sadece sigorta şirketi anlaşmalı hastaneler</td>
              </tr>
            </tbody>
          </table>
        </div>`
      },
      {
        type: "heading",
        content: "Tamamlayıcı Sağlık Sigortası Yaptırmanın Avantajları",
        level: 2
      },
      {
        type: "list",
        items: [
          "Uygun fiyatlarla özel hastane hizmetinden yararlanma",
          "Bekleme süresi dolduğunda doğum dahil birçok hizmetten faydalanma",
          "Çocuklar için geniş koruma",
          "Hızlı ve konforlu sağlık hizmeti",
          "Acil durumlarda özel hastane imkanı"
        ]
      },
      {
        type: "cta",
        content: "Tamamlayıcı Sağlık Sigortası ile Özel Hastanede Ek Ücret Ödemeyin!",
        ctaText: "TSS Teklifi Al",
        ctaLink: "/tss-teklif"
      },
      {
        type: "heading",
        content: "Sıkça Sorulan Sorular",
        level: 2
      },
      {
        type: "paragraph",
        content: "TSS ile devlet hastanesinde hizmet alabilir miyim?"
      },
      {
        type: "highlight",
        content: "Hayır. TSS yalnızca anlaşmalı özel hastanelerde geçerlidir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "TSS doğum giderlerini karşılar mı?"
      },
      {
        type: "highlight",
        content: "Evet, bazı poliçelerde doğum teminatı vardır. Ancak genellikle 12 ay bekleme süresi bulunur.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "Yalnızca yatarak teminat seçilebilir mi?"
      },
      {
        type: "highlight",
        content: "Evet. Ayakta tedavi teminatı opsiyoneldir.",
        highlightType: "info"
      },
      {
        type: "paragraph",
        content: "TSS primleri neye göre belirlenir?"
      },
      {
        type: "highlight",
        content: "Yaş, teminat kapsamı, sigorta şirketi ve varsa sağlık geçmişine göre belirlenir.",
        highlightType: "info"
      },
      {
        type: "heading",
        content: "Size Özel Hızlı Teklif Çağrısı",
        level: 2
      },
      {
        type: "paragraph",
        content: "Tamamlayıcı sağlık sigortası ile özel hastanede ücret ödemeden muayene olmak ister misiniz?"
      },
      {
        type: "paragraph",
        content: "Hemen sigortanikarsilastir.com adresinden bilgilerinizi girin, saniyeler içinde teklifinizi alın!"
      },
      {
        type: "cta",
        content: "Hemen Teklif Al, Özel Hastanede Ek Ücret Ödeme!",
        ctaText: "TSS Teklifi Al",
        ctaLink: "/tss-teklif"
      }
    ],
    date: "2025-02-20",
    category: "sagligim",
    tags: ["tss"],
    suggest_blogs: true,
    meta_title: "SGK'lılara Özel: Tamamlayıcı Sağlık Sigortası ile Özel Hastanede Ek Ücret Ödemeyin",
    meta_description: "Tamamlayıcı Sağlık Sigortası nedir, kimler yaptırabilir? SGK'lılar için TSS avantajları, kapsamı ve fiyatları. Özel hastanede ek ücret ödemeden hizmet alın.",
  },
];