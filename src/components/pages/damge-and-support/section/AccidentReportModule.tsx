import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AccidentReportModuleProps {
  image: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
}

const AccidentReportModule: React.FC<AccidentReportModuleProps> = ({
  image,
  text,
  buttonText = "Kaza Tespit Tutanağı",
  buttonLink = "#",
}) => {
  return (
    <>
      <section className="pb-20">
        <div className="container max-w-[800px]!">
          <div className="text-center">
            <Image
              src={image}
              alt="Kaza Tespit Tutanağı"
              width={230}
              height={230}
              className="mx-auto mb-4 rounded-xl object-contain"
            />
            <div className="text-base opacity-70 mb-4">{text}</div>
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#262163] text-white py-3 px-6 rounded-lg font-semibold text-sm shadow transition-transform duration-150 focus:scale-95 focus:outline-none"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default AccidentReportModule; 