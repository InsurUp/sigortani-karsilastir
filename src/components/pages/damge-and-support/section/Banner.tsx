import Image from 'next/image'
import Link from 'next/link';

interface BannerProps {
    text: string;
    image: string;
}

function Banner({ text, image }: BannerProps) {
    return (
        <section
            style={{
                background: "rgba(217, 237, 250, 0.41)",
                minHeight: 250,
                display: "flex",
                paddingBlock: "50px 40px",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
            }}
        >
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
                {text}
            </h1>
            <Image
                src={image}
                alt="Hasar Banner"
                width={300}
                height={200}
                style={{ objectFit: "cover", borderRadius: 12, marginBottom: 16 }}
            />
            <p className="text-center mb-4 max-w-2xl opacity-70">
                Herhangi bir kaza sonucu sigortalının malında oluşabilecek her türlü hasarı sigorta şirketine bildirmesi gerekir.
                Bu bildirinin gerçekleşmesi için bazı kurallar bulunmaktadır.
                Bu sayfada hasar bildirimine dair tüm bilgilere detaylarıyla birlikte ulaşabilirsiniz.
            </p>
            <Link
                href="#" 
                rel="noopener noreferrer"
                className="inline-block bg-[#262163] text-white py-3 px-7 rounded-lg font-semibold text-sm shadow transition-transform duration-150 focus:scale-95 focus:outline-none"
            >
                Hasar Bildir
            </Link>
        </section>
    )
}

export { Banner }