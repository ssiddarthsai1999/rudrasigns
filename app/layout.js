import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScroll from "@/components/layout/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rudra Signs | Chennai's Trusted Signage & Branding Partner",
  description:
    "At Rudra Signs, we specialize in creating custom signs that are visually stunning and effective at attracting new customers. Signage solutions, web services, and wall painting in Chennai.",
  keywords:
    "signage, sign boards, LED signs, neon signs, Chennai, Tamil Nadu, web design, wall painting, branding",
  openGraph: {
    title: "Rudra Signs | Chennai's Trusted Signage & Branding Partner",
    description:
      "Custom signage solutions, web services, and wall painting for businesses in Chennai. 4.9★ rated on Google.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
