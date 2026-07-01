"use client";

import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import FAQ from '@/components/FAQ';

// Metadata cannot be exported from a Client Component. We would normally move this to a layout, but for now we remove it to fix the Next.js restriction on "use client" + metadata.

export default function KontaktPage() {
  return (
    <div className="bg-white min-h-screen pt-12 md:pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-brand-dark mb-6">
            Porozmawiajmy o Twoim <span className="text-brand-teal italic">biznesie</span>
          </h1>
          <p className="text-brand-gray text-lg font-light leading-relaxed">
            Masz pytania dotyczące naszej oferty lub potrzebujesz wyceny hurtowej? Skontaktuj się z naszym zespołem ekspertów.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-12"
          >
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-mint/50 p-3.5 rounded-2xl text-brand-teal mt-1 border border-brand-teal/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1 text-base">Adres Centrali</h3>
                    <p className="text-brand-gray font-light text-[15px] leading-relaxed">
                      Alopak Sp. z o.o.<br/>
                      ul. Składowa 3<br/>
                      63-500 Ostrzeszów
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-mint/50 p-3.5 rounded-2xl text-brand-teal mt-1 border border-brand-teal/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1 text-base">Infolinia B2B</h3>
                    <p className="text-brand-gray font-light text-[15px]">
                      62 730 16 72
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-mint/50 p-3.5 rounded-2xl text-brand-teal mt-1 border border-brand-teal/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1 text-base">E-mail</h3>
                    <p className="text-brand-gray font-light text-[15px]">
                      kontakt@alopak.pl
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-cream/40 p-8 md:p-10 rounded-[2.5rem] border border-brand-silver/40">
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-8">Wyślij zapytanie</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Imię i nazwisko</label>
                    <input type="text" className="w-full bg-white border border-brand-silver/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal rounded-xl px-4 py-3 text-[15px] transition-all outline-none" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">Firma</label>
                    <input type="text" className="w-full bg-white border border-brand-silver/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal rounded-xl px-4 py-3 text-[15px] transition-all outline-none" placeholder="Nazwa firmy" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Adres e-mail</label>
                  <input type="email" className="w-full bg-white border border-brand-silver/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal rounded-xl px-4 py-3 text-[15px] transition-all outline-none" placeholder="jan.kowalski@firma.pl" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">Treść wiadomości</label>
                  <textarea rows={4} className="w-full bg-white border border-brand-silver/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal rounded-xl px-4 py-3 text-[15px] transition-all outline-none" placeholder="W czym możemy pomóc?"></textarea>
                </div>

                <button type="button" className="w-full bg-brand-teal text-white font-medium py-4 rounded-xl hover:bg-brand-teal-hover transition-colors flex items-center justify-center gap-2">
                  <span>Wyślij wiadomość</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            </motion.div>

          {/* Right Column: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-[400px] lg:h-[800px] w-full rounded-[2.5rem] overflow-hidden border border-brand-silver/50 relative shadow-lg"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9873995647573!2d17.92548817684695!3d51.42163901160359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ac39009949669%3A0xc47e335dd0e40854!2zU2vFgmFkb3dhIDMsIDYzLTUwMCBPc3RyesO1c3rDs3c!5e0!3m2!1spl!2spl!4v1717329598286!5m2!1spl!2spl" 
               width="100%" 
               height="100%" 
               style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
               allowFullScreen={false} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa dojazdu Alopak"
               className="grayscale hover:grayscale-0 transition-all duration-1000"
             ></iframe>
          </motion.div>

        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
