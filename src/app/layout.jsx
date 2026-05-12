import Header from "@/components/ui/Header";
import "./globals.css";
import { Space_Grotesk, Inter, Geist } from "next/font/google";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ferdous Ahmed | Portfolio",
  description: "Building modern web applications with a focus on aesthetics, functionality and accessibility.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)} data-theme="dark">
      <head>
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container`}>
          <Header/>
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
         
      </body>
    </html>
  );
}
