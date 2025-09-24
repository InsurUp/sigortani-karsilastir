import React from "react";
import Link from "next/link";
import { CustomAccordion } from "@/components/common";
import { sssData } from "@/data/sss";

const AccordionSection = () => {
    // İlk 5 SSS'yi al
    const limitedSSSData = sssData.slice(0, 5);

    return (
        <section className="py-20 bg-[#EFF7FC]">
            <div className="container max-w-[900px]">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-12 text-center">
                    Sıkça Sorulan Sorular
                </h2>
                <CustomAccordion items={limitedSSSData} />
                
                <div className="text-center mt-12">
                    <Link 
                        href="/sss"
                        className="inline-flex items-center gap-2 bg-[#ED1D24] text-white px-8 py-3 rounded-full hover:bg-[#d01a20] transition-colors duration-200 font-semibold text-lg hover:shadow-lg"
                    >
                        Tümünü Gör
                        <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                            className="transform transition-transform duration-200 group-hover:translate-x-1"
                        >
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { AccordionSection }; 