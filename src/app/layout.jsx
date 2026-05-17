import Header from "@/components/ui/Header";
import "./globals.css";
import { Space_Grotesk, Inter, Geist, JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],variable:'--jetbrainsMono',});



export const metadata = {
  title: "Ferdous Ahmed | Portfolio",
  description: "Building modern web applications with a focus on aesthetics, functionality and accessibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={jetbrainsMono.variable.className} >
          <Header/>
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
      </body>
    </html>
  );
}
