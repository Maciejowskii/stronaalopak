"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Check, ShieldCheck, Mail, FileText, Globe } from "lucide-react";
import { PRODUCTS } from "@/data/mockData";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = PRODUCTS.find((p) => p.id === id);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    quantity: "5000",
    message: "",
  });

  const [sampleOrdered, setSampleOrdered] = useState(false);

  if (!product) {
    notFound();
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSampleRequest = () => {
    setSampleOrdered(true);
    setTimeout(() => {
      setSampleOrdered(false);
      alert("Zamówienie na darmowe próbki (do 10 szt.) zostało zarejestrowane! Nasz logistyk wyśle je na adres firmy.");
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back navigation */}
      <Link
        href="/sklep"
        className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-brand-teal-hover transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Wróć do katalogu produktów</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Image and certifications */}
        <div className="lg:col-span-6 space-y-8">
          <div className="aspect-[4/3] relative rounded-3xl overflow-hidden border border-brand-silver bg-white shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Quality Certifications badging */}
          <div className="bg-white rounded-2xl border border-brand-silver p-6 space-y-4">
            <h4 className="font-serif text-lg font-bold text-brand-dark">Certyfikacja i Bezpieczeństwo B2B</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-2.5 items-start">
                <div className="bg-brand-mint text-brand-teal p-1.5 rounded-lg shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-brand-dark">Atest Higieniczny PZH</span>
                  <span className="text-brand-gray font-light">Bezpieczny kontakt z żywnością tłustą i suchą.</span>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="bg-brand-mint text-brand-teal p-1.5 rounded-lg shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-brand-dark">ISO 9001:2015</span>
                  <span className="text-brand-gray font-light">Certyfikowany system zarządzania jakością produkcji.</span>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="bg-brand-mint text-brand-teal p-1.5 rounded-lg shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-brand-dark">AluRecycling Ready</span>
                  <span className="text-brand-gray font-light">Produkt w 100% zdatny do powtórnego przetworzenia.</span>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <div className="bg-brand-mint text-brand-teal p-1.5 rounded-lg shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-semibold block text-brand-dark">Odporność Termiczna</span>
                  <span className="text-brand-gray font-light">Wytrzymuje temperatury od -40°C do +350°C.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details & Technical specifications & Conversions */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <span className="text-xs bg-brand-mint text-brand-teal px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
              {product.name}
            </h1>
            <p className="text-brand-gray text-sm md:text-base font-light leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Spec Table */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-brand-dark">Specyfikacja Techniczna</h3>
            <div className="border border-brand-silver rounded-2xl overflow-hidden bg-white">
              <table className="w-full text-xs text-left">
                <tbody>
                  <tr className="border-b border-brand-silver">
                    <th className="py-3 px-4 font-semibold text-brand-gray w-1/3 bg-brand-cream/30">Wymiary zewnętrzne</th>
                    <td className="py-3 px-4 text-brand-dark font-medium">{product.specs.dimensions}</td>
                  </tr>
                  <tr className="border-b border-brand-silver">
                    <th className="py-3 px-4 font-semibold text-brand-gray w-1/3 bg-brand-cream/30">Pojemność nominalna</th>
                    <td className="py-3 px-4 text-brand-dark font-medium">{product.specs.capacity}</td>
                  </tr>
                  <tr className="border-b border-brand-silver">
                    <th className="py-3 px-4 font-semibold text-brand-gray w-1/3 bg-brand-cream/30">Grubość materiału</th>
                    <td className="py-3 px-4 text-brand-dark font-medium">{product.specs.thickness}</td>
                  </tr>
                  <tr className="border-b border-brand-silver">
                    <th className="py-3 px-4 font-semibold text-brand-gray w-1/3 bg-brand-cream/30">Surowiec i stop</th>
                    <td className="py-3 px-4 text-brand-dark font-medium">{product.specs.material}</td>
                  </tr>
                  <tr className="border-b border-brand-silver">
                    <th className="py-3 px-4 font-semibold text-brand-gray w-1/3 bg-brand-cream/30">Certyfikacja</th>
                    <td className="py-3 px-4 text-brand-dark font-medium text-[11px]">{product.specs.certification}</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 font-semibold text-brand-gray w-1/3 bg-brand-cream/30">Pakowanie zbiorcze</th>
                    <td className="py-3 px-4 text-brand-dark font-medium">{product.specs.packing}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Tabs / B2B conversion section */}
          <div className="bg-white rounded-3xl border border-brand-silver p-6 md:p-8 space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-dark">Rozpocznij współpracę</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={handleSampleRequest}
                className="bg-brand-cream hover:bg-brand-silver/30 border border-brand-silver text-brand-dark text-xs font-semibold py-3.5 px-4 rounded-xl transition-all flex flex-col items-center text-center justify-center gap-1.5"
              >
                <FileText className="w-5 h-5 text-brand-teal" />
                <span>Zamów darmowe próbki</span>
                <span className="text-[10px] text-brand-gray font-light">Do 10 sztuk testowych</span>
              </button>

              <a
                href="#inquiry-form"
                className="bg-brand-mint hover:bg-brand-teal/10 border border-brand-mint text-brand-teal text-xs font-semibold py-3.5 px-4 rounded-xl transition-all flex flex-col items-center text-center justify-center gap-1.5"
              >
                <Mail className="w-5 h-5" />
                <span>Zapytaj o wycenę B2B</span>
                <span className="text-[10px] text-brand-teal font-light">Indywidualna oferta hurtowa</span>
              </a>
            </div>

            {/* Quick B2B Inquiry form */}
            <div id="inquiry-form" className="pt-6 border-t border-brand-silver space-y-4">
              <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Formularz szybkiego zapytania</h4>
              
              {formSubmitted ? (
                <div className="bg-brand-mint text-brand-teal p-5 rounded-2xl text-center space-y-2">
                  <ShieldCheck className="w-10 h-10 mx-auto" />
                  <span className="font-bold block text-sm">Wysłano zapytanie ofertowe</span>
                  <p className="text-[11px] font-light">Pracujemy nad kalkulacją i skontaktujemy się telefonicznie wkrótce.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Nazwa firmy"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Adres email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                    />
                  </div>
                  <input
                    type="number"
                    min="1000"
                    required
                    placeholder="Wymagana ilość (min. 1000 szt.)"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                  />
                  <textarea
                    rows={2}
                    placeholder="Twoje pytania lub dodatkowa specyfikacja..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                  />
                  <button
                    type="submit"
                    className="w-full bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-semibold py-3 rounded-xl transition-all"
                  >
                    Wyślij zapytanie
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
