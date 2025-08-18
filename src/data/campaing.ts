export interface Campaign {
    id: number;
    title: string;
    thumbnail: string;
    image: string;
    sales: string;
    description: string;
    campaing_start: string;
    campaing_end: string;
    href: string;
    is_active: boolean;
    is_suggest: boolean;
    content: string;
    meta_title: string;
    meta_description: string;
}

export const campaigns: Campaign[] = [
    {
        id: 1,
        title: "Yaz Tatili Özel Kasko Kampanyası",
        thumbnail: "/images/campaing.png",
        image: "/images/campaing.png",
        sales: "%25 İndirim",
        description: "Yaz tatili öncesi araçlarınızı güvence altına alın. Özel kasko paketlerinde %25 indirim fırsatı!",
        campaing_start: "2024-06-01",
        campaing_end: "2024-08-31",
        href: "/kampanyalar/yaz-tatili-kasko",
        is_active: true,
        is_suggest: true,
        content: "Yaz tatili sezonunda araçlarınızı güvence altına almak için özel olarak hazırladığımız kasko kampanyası. Hasar, hırsızlık ve doğal afetlerden koruma kapsamında %25 indirim fırsatı. Kampanya 31 Ağustos 2024 tarihine kadar geçerlidir.",
        meta_title: "Yaz Tatili Özel Kasko Kampanyası - %25 İndirim",
        meta_description: "Yaz tatili öncesi araçlarınızı güvence altına alın. Özel kasko paketlerinde %25 indirim fırsatı!"
    },
    {
        id: 2,
        title: "Öğrenci Konut Sigortası Kampanyası",
        thumbnail: "/images/campaing.png",
        image: "/images/campaing.png",
        sales: "%30 İndirim",
        description: "Öğrenciler için özel konut sigortası paketi. Eğitim yılı boyunca güvenli yaşam alanları!",
        campaing_start: "2024-09-01",
        campaing_end: "2024-12-31",
        href: "/kampanyalar/ogrenci-konut",
        is_active: true,
        is_suggest: false,
        content: "Öğrenciler için özel olarak tasarlanmış konut sigortası paketi. Yangın, hırsızlık, su baskını ve doğal afetlerden koruma kapsamında %30 indirim. Kampanya 31 Aralık 2024 tarihine kadar geçerlidir.",
        meta_title: "Öğrenci Konut Sigortası Kampanyası - %30 İndirim",
        meta_description: "Öğrenciler için özel konut sigortası paketi. Eğitim yılı boyunca güvenli yaşam alanları!"
    },
    {
        id: 3,
        title: "Kış Sezonu Sağlık Sigortası",
        thumbnail: "/images/campaing.png",
        image: "/images/campaing.png",
        sales: "%20 İndirim",
        description: "Kış aylarında sağlığınızı koruyun. Özel sağlık sigortası paketlerinde %20 indirim!",
        campaing_start: "2024-12-01",
        campaing_end: "2025-02-28",
        href: "/kampanyalar/kis-saglik",
        is_active: true,
        is_suggest: true,
        content: "Kış aylarında sağlığınızı korumak için özel olarak hazırladığımız sağlık sigortası kampanyası. Hastane yatışı, ameliyat, ilaç ve tedavi masrafları kapsamında %20 indirim. Kampanya 28 Şubat 2025 tarihine kadar geçerlidir.",
        meta_title: "Kış Sezonu Sağlık Sigortası - %20 İndirim",
        meta_description: "Kış aylarında sağlığınızı koruyun. Özel sağlık sigortası paketlerinde %20 indirim!"
    },
    {
        id: 4,
        title: "Bahar Temizliği Konut Sigortası",
        thumbnail: "/images/campaing.png",
        image: "/images/campaing.png",
        sales: "%15 İndirim",
        description: "Bahar aylarında evinizi güvence altına alın. Konut sigortası paketlerinde %15 indirim fırsatı!",
        campaing_start: "2024-03-01",
        campaing_end: "2024-05-31",
        href: "/kampanyalar/bahar-konut",
        is_active: false,
        is_suggest: false,
        content: "Bahar aylarında evinizi güvence altına almak için özel olarak hazırladığımız konut sigortası kampanyası. Yangın, hırsızlık, su baskını ve doğal afetlerden koruma kapsamında %15 indirim. Kampanya 31 Mayıs 2024 tarihinde sona ermiştir.",
        meta_title: "Bahar Temizliği Konut Sigortası - %15 İndirim",
        meta_description: "Bahar aylarında evinizi güvence altına alın. Konut sigortası paketlerinde %15 indirim fırsatı!"
    },
    {
        id: 5,
        title: "Yılbaşı Özel Seyahat Sigortası",
        thumbnail: "/images/campaing.png",
        image: "/images/campaing.png",
        sales: "%40 İndirim",
        description: "Yılbaşı tatilinde güvenle seyahat edin. Seyahat sağlık sigortası paketlerinde %40 indirim!",
        campaing_start: "2023-12-15",
        campaing_end: "2024-01-15",
        href: "/kampanyalar/yilbasi-seyahat",
        is_active: false,
        is_suggest: false,
        content: "Yılbaşı tatilinde güvenle seyahat etmek için özel olarak hazırladığımız seyahat sağlık sigortası kampanyası. Sağlık masrafları, uçuş iptali, bagaj kaybı ve kaza kapsamında %40 indirim. Kampanya 15 Ocak 2024 tarihinde sona ermiştir.",
        meta_title: "Yılbaşı Özel Seyahat Sigortası - %40 İndirim",
        meta_description: "Yılbaşı tatilinde güvenle seyahat edin. Seyahat sağlık sigortası paketlerinde %40 indirim!"
    }
];

export default campaigns;