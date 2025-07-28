import React from "react";
import Image from "next/image";
import { ourGoalsData } from "@/data/about";

const OurGoals = () => {
  return (
    <section  className="py-20 bg-[#F0F0F0] relative "
    style={{ clipPath: 'polygon(0 5%, 100% 0%, 100% 100%, 0 100%)', zIndex: 1 }}>
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-15">Hedefimiz Size Sunduklarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto">
          {ourGoalsData.map((feature, idx) => (
            <div
              key={idx}
              className="relative flex-1 bg-white rounded-[10px] px-5 pt-10 pb-8 flex flex-col items-center transition-transform duration-200"
              style={{
                paddingTop: 40,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 30,
                boxShadow: "none",
              }} 
            >
              {/* Yuvarlak icon kutusu */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: "50%",
                  background: "#ED1D24",
                  position: "absolute",
                  top: -32.5,
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={feature.icon} alt="icon" width={32} height={32} />
              </div>
              <div className="mt-4 text-center">
                <span
                  style={{
                    fontSize: 16,
                    color: "#000",
                    opacity: 0.7,
                  }}
                >
                  {feature.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { OurGoals }; 