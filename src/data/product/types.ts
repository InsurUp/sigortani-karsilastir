export interface Product {
    id: number;
    banner: {
        title: string;
        text: string;
        icon: string;
        bgImage: string;
        formType: "online" | "offline";
    };
    WhyDesc: {
        title: string;
        desc: string;
    };
    guarantee: {
        title: string;
        text: string[];
    };
    offerSteps: {
        title: string;
        content: string[];
    }; 
    avantage:{
        title: string;
        desc: string;
    }
    cta:{
        title: string; 
        buttonText: string;
        buttonLink: string;
    } 
}