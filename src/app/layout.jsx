import { Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const ArimoSans = Arimo({
  variable: "--font-arimo-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meme Musuem",
  description: "A LCFILIB Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ArimoSans.variable} antialiased`}>
        <div className="relative min-h-screen w-screen bg-transparent">
          <div className="absolute inset-0 bg-[url('/background_waves.png')] bg-repeat bg-cover"></div>
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
