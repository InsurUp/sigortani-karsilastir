"use client";
import React, { useState } from "react";
import { damageDocuments } from "@/data/damage";
import DamageCard from "./DamageCard";
import DamageAccordion from "./DamageAccordion";
import AccidentReportModule from "./AccidentReportModule";

const DamageSection: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section>
      <div className="container max-w-[610px]! py-[60px_100px]">
        <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 32 }}>
          Hasar Anında Gerekli Evraklar
        </h2>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 32 }}>
          {damageDocuments.map((item, idx) => (
            <DamageCard
              key={item.title}
              title={item.title}
              image={item.image}
              active={selected === idx}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
        <DamageAccordion documents={damageDocuments[selected].documents} />
       </div>
    </section>
  );
};

export default DamageSection; 