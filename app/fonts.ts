import { Montserrat, Fira_Mono } from "next/font/google";

export const fira_mono = Fira_Mono({ 
    weight: "400", 
    subsets: ["latin"], 
});

export const montserrat = Montserrat({ 
    weight: ["100", "200", "300", "600"], 
    subsets: ["latin"], 
});
