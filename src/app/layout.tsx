import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { Phone, Mail, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alopak | Ekologiczne Opakowania Aluminiowe B2B",
  description: "Polski producent najwyższej jakości opakowań aluminiowych, foremek i tub. Zrównoważone rozwiązania dla gastronomii, branży kosmetycznej i przemysłu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-brand-cream text-brand-dark font-sans selection:bg-brand-teal selection:text-white">

        {/* Main Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-brand-dark text-white border-t border-white/10 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand Col */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-brand-cream py-2 px-3 rounded-xl inline-flex shadow-sm">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarisz7KxjM9TjUHQsHZNoJ7lI_EEuWzV1KBZaktOj&s=10" 
                      alt="Alopak" 
                      className="h-8 w-auto object-contain mix-blend-multiply" 
                    />
                  </div>
                </div>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Lider w dostarczaniu ekologicznych i certyfikowanych opakowań aluminiowych dla biznesu. Polska produkcja, globalny zasięg.
                </p>
              </div>

              {/* Menu Links */}
              <div>
                <h3 className="font-serif text-lg font-medium mb-4 text-brand-mint">Nawigacja</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/" className="hover:text-white transition-colors">Strona Główna</Link></li>
                  <li><Link href="/sklep" className="hover:text-white transition-colors">Sklep i Katalog</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Legal & Standards */}
              <div>
                <h3 className="font-serif text-lg font-medium mb-4 text-brand-mint">Standardy & Certyfikaty</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full"></div>
                    Atesty PZH (kontakt z żywnością)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full"></div>
                    ISO 9001:2015 Quality System
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full"></div>
                    W 100% recyklingowalny surowiec
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-serif text-lg font-medium mb-4 text-brand-teal">Kontakt</h3>
                <address className="not-italic space-y-2 text-sm text-white/70">
                  <p>Alopak Sp. z o.o.</p>
                  <p>ul. Przemysłowa 42, 31-000 Kraków</p>
                  <p>Tel: +48 123 456 789</p>
                  <p>Email: kontakt@alopak.pl</p>
                </address>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
              <p>&copy; {new Date().getFullYear()} Alopak Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
                <a href="#" className="hover:text-white transition-colors">Regulamin zamówień</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
