"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Czy oferujecie darmowe próbki opakowań?",
    answer: "Tak, dla klientów biznesowych B2B wysyłamy darmowe pakiety próbek naszych foremek i puszek, aby można było przetestować je bezpośrednio na linii produkcyjnej. Wystarczy wypełnić formularz na stronie kontaktu.",
  },
  {
    question: "Jaki jest minimalny nakład zamówienia (MOQ)?",
    answer: "Standardowe MOQ zależy od rodzaju produktu. Dla foremek bez nadruku to zazwyczaj 1 paleta. Dla produktów dedykowanych z pełnym nadrukiem minimalne zamówienie zaczyna się od 10 000 sztuk.",
  },
  {
    question: "Czy opakowania Alopak posiadają certyfikaty kontaktu z żywnością?",
    answer: "Absolutnie. Wszystkie nasze opakowania przeznaczone dla branży gastronomicznej i farmaceutycznej posiadają rygorystyczne atesty PZH, certyfikaty FDA oraz spełniają normy ISO 22000.",
  },
  {
    question: "Jaki jest średni czas realizacji zamówienia?",
    answer: "Dla produktów standardowych z naszego magazynu czas dostawy wynosi 24-48 godzin. W przypadku produkcji z indywidualnym nadrukiem (np. tuby kosmetyczne) czas realizacji wynosi od 3 do 5 tygodni od momentu akceptacji projektu.",
  },
  {
    question: "Czy wykonujecie nadruki bezpośrednio na aluminium?",
    answer: "Tak, oferujemy najwyższej jakości druk offsetowy oraz sitodruk bezpośrednio na tubach i butelkach aluminiowych. Pozwala to uzyskać luksusowy i wyjątkowo trwały efekt wizualny bez konieczności stosowania papierowych etykiet.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs text-brand-teal uppercase tracking-wider font-bold block mb-2">Pomoc i Informacje</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Często Zadawane Pytania
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-brand-teal bg-brand-cream/30' : 'border-brand-silver bg-white hover:border-brand-gray'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-brand-dark text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-brand-teal text-white' : 'bg-brand-cream text-brand-dark'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-brand-gray leading-relaxed border-t border-brand-silver pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
