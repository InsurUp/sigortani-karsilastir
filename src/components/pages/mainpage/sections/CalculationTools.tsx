import Link from 'next/link';

const calculationTools = [
  {
    title: 'Kasko Değer Hesaplama',
    description: 'Aracınızın güncel kasko değerini hızlıca görüntüleyin.',
    href: '/kasko-deger-hesaplama',
    accent: 'from-[#FDE7E7] to-[#FFF7F5]',
    iconBg: 'bg-[#F04438]',
  },
  {
    title: 'ÖTV ve KDV Hesaplama',
    description: 'Araç maliyetlerini vergi etkisiyle birlikte pratik şekilde hesaplayın.',
    href: '/otv-kdv-hesaplama',
    accent: 'from-[#E8F7FF] to-[#F6FBFF]',
    iconBg: 'bg-[#0E64EC]',
  },
  {
    title: 'MTV Hesaplama',
    description: 'Motorlu taşıtlar vergisini araç tipine göre hemen öğrenin.',
    href: '/mtv-hesaplama',
    accent: 'from-[#ECFDF3] to-[#F7FFFA]',
    iconBg: 'bg-[#12B76A]',
  },
  {
    title: 'Araç Yakıt Tüketimi Hesaplama',
    description: 'Yakıt giderinizi kullanım alışkanlığınıza göre önceden planlayın.',
    href: '/arac-yakit-tuketimi-hesaplama',
    accent: 'from-[#FFF3E8] to-[#FFF9F2]',
    iconBg: 'bg-[#F79009]',
  },
  {
    title: 'DASK Adres Kodu Sorgulama',
    description: 'DASK işlemleri için gereken adres kodunu kolayca bulun.',
    href: '/dask-adres-kodu-sorgulama',
    accent: 'from-[#F4EBFF] to-[#FBF8FF]',
    iconBg: 'bg-[#7A5AF8]',
  },
];

const CalculationTools = () => {
  return (
    <section className="bg-white py-18 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:mb-12">
          <div className="mx-auto max-w-5xl">
            <span className="mb-4 inline-flex rounded-full bg-[#F0443814] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F04438]">
              Hesaplama Araçları
            </span>
            <h2 className="text-3xl font-bold leading-tight text-[#101828] md:text-5xl xl:whitespace-nowrap">
              Tüm Hesaplama Araçları Tek Yerde!
            </h2>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#475467] md:text-base">
            Kasko, MTV, yakıt tüketimi ve vergi hesaplamalarını saniyeler içinde yapın. İhtiyacınız olan tüm araçlara hızlıca ulaşın.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {calculationTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={`group flex min-h-[230px] flex-col justify-between rounded-[28px] border border-slate-200 bg-gradient-to-br ${tool.accent} p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]`}
            >
              <div className="space-y-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tool.iconBg} text-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]`}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 5h14v14H5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M8 9h8M8 13h3M13 13h3M8 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold leading-snug text-[#101828]">
                    {tool.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#475467]">
                    {tool.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#101828] transition-colors duration-200 group-hover:text-[#F04438]">
                <span>Hesapla</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4.167 10h11.666" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="m10.833 5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CalculationTools };
