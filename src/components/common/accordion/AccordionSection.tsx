import React from "react";
import { CustomAccordion } from "@/components/common";
import { sssData } from "@/data/sss";

const AccordionSection = () => {
    return (
        <section className="py-20 bg-[#EFF7FC]">
            <div className="container max-w-[900px]">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-12 text-center">
                    Sıkça Sorulan Sorular
                </h2>
                <CustomAccordion items={sssData} />
            </div>
        </section>
    );
};

export { AccordionSection }; 