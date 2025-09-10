import React from 'react'

interface BannerProps {
    text: string;
}

function Banner({ text }: BannerProps) {
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
        </section>
    )
}

export { Banner }