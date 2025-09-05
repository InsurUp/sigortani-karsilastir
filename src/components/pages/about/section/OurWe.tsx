import { aboutData } from "@/data/about";
import Image from "next/image";

const OurWe = () => {
    return (
        <section className="py-20 pt-0">
            <div className="px-4 max-w-[992px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative">
                {/* Sol: Görsel */}
                <div className="flex-shrink-0 relative">
                    <Image
                        src={aboutData.image}
                        alt="Biz Kimiz görsel"
                        width={380}
                        height={270}
                        className="rounded-lg object-cover"
                    />
                                     <div
                    className="hidden md:block"
                    style={{
                        width: 1,
                        height: "80%",
                        background: "#E4E4E7",
                        position: "absolute",
                        right: -20 ,
                        top: "10%", 
                        zIndex: 0,
                    }}
                />
                </div>

                <div className="relative z-10 md:ml-8 max-w-xl">
                    <h2
                        style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            color: "#000",
                            marginBottom: 16,
                        }}
                    >
                        {aboutData.title}
                    </h2>
                    <p
                        style={{
                            color: "#000",
                            opacity: 0.7,
                            fontSize: 16,
                            margin: 0,
                        }}
                    >
                        {aboutData.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export { OurWe };