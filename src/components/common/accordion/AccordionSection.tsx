import React from "react";
import { CustomAccordion } from "@/components/common";
import { sssData } from "@/data/sss";

const AccordionSection = () => {
    return (
        <section style={{ background: "#EFF7FC", padding: "45px 0" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>
                <h2 style={{ fontSize: 48, fontWeight: 700, marginBottom: 40, textAlign: "center" }}>
                    Sıkça Sorulan Sorular
                </h2>
                <CustomAccordion items={sssData} />
            </div>
        </section>
    );
};

export { AccordionSection }; 