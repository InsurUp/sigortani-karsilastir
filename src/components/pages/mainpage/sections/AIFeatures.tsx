import React from "react";
import Image from "next/image";
import { aiFeatures } from "@/data/aiFeatures";

const AIFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0D0D0D] mb-4">
            Neden Biz?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {aiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight" style={{minHeight:45}}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AIFeatures };