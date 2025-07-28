import React from "react";

interface BannerProps {
    text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
    return (
        <section
            style={{
                background: "rgba(217, 237, 250, 0.41)",
                minHeight: 250,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <h1 className="text-4xl lg:text-6xl font-bold text-center">
                {text}
            </h1>
        </section>
    );
};

export { Banner };
