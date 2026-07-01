"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Mail, Phone, ShieldCheck, X } from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function ShopContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  
  // Modal state for direct B2B inquiry
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  
  // Form input state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    volume: "10000",
    message: "",
  });

  useEffect(() => {
    if (searchParams.get("inquiry") === "true") {
      setShowInquiryModal(true);
    }
    const q = searchParams.get("q");
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "Wszystkie" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specs.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenInquiry = (product: Product | null) => {
    setInquiryProduct(product);
    setShowInquiryModal(true);
  };

  const handleCloseInquiry = () => {
    setShowInquiryModal(false);
    setInquiryProduct(null);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <span className="text-xs text-brand-teal uppercase tracking-wider font-bold">Katalog B2B</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold">
          Nasze Opakowania Aluminiowe
        </h1>
        <p className="text-brand-gray text-base font-light max-w-2xl leading-relaxed">
          Wybierz kategorię i dostosuj zapytanie do potrzeb swojego przedsiębiorstwa. Oferujemy możliwość personalizacji wymiarów, grubości oraz nadruku logo.
        </p>
      </motion.div>

      {/* Controls: Search and Categories */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center bg-white p-6 rounded-3xl border border-brand-silver"
      >
        {/* Search */}
        <div className="relative w-full lg:max-w-xs">
          <Search className="w-4 h-4 text-brand-gray absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Szukaj produktu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-cream border border-brand-silver rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
          />
        </div>

        {/* Categories (Horizontal pill-like scrolling) */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs font-semibold px-4 py-2.5 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-brand-teal text-white shadow-sm"
                  : "bg-brand-cream text-brand-dark hover:bg-brand-silver/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Product Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              key={product.id}
              className="group bg-white rounded-3xl border border-brand-silver overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
            {/* Image */}
            <div className="aspect-[4/3] relative overflow-hidden bg-brand-mint/10 border-b border-brand-silver">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs bg-brand-mint text-brand-teal px-2.5 py-1 rounded-full font-semibold">
                  {product.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                  {product.name}
                </h3>
                <p className="text-brand-gray text-xs font-light line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical features shortcut */}
              <div className="bg-brand-cream/50 rounded-2xl p-4 border border-brand-silver/40 text-xs space-y-1.5 mt-2">
                <div className="flex justify-between">
                  <span className="text-brand-gray">Pojemność:</span>
                  <span className="font-semibold text-brand-dark">{product.specs.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-gray">Materiał:</span>
                  <span className="font-semibold text-brand-dark">{product.specs.material}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-silver flex gap-3 mt-6">
                <Link
                  href={`/sklep/${product.id}`}
                  className="flex-1 bg-brand-cream hover:bg-brand-silver/30 border border-brand-silver text-brand-dark text-center text-xs font-semibold py-3 rounded-xl transition-all"
                >
                  Specyfikacja
                </Link>
                <button
                  onClick={() => handleOpenInquiry(product)}
                  className="flex-1 bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-semibold py-3 rounded-xl transition-all"
                >
                  Zapytaj o wycenę
                </button>
              </div>
            </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-brand-silver space-y-4">
          <p className="text-brand-gray">Brak produktów spełniających kryteria wyszukiwania.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Wszystkie");
            }}
            className="text-brand-teal font-semibold text-sm hover:underline"
          >
            Resetuj filtry
          </button>
        </div>
      )}

      {/* Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/50 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden border border-brand-silver shadow-2xl relative">
            <button
              onClick={handleCloseInquiry}
              className="absolute right-6 top-6 text-brand-gray hover:text-brand-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-dark">
                  {inquiryProduct
                    ? `Zapytanie ofertowe: ${inquiryProduct.name}`
                    : "Zapytanie o wycenę hurtową B2B"}
                </h3>
                <p className="text-brand-gray text-xs font-light mt-1">
                  Wypełnij krótki formularz, a nasz doradca techniczny skontaktuje się z Tobą w ciągu 24h z gotową wyceną.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-brand-mint text-brand-teal rounded-2xl p-6 text-center space-y-3">
                  <ShieldCheck className="w-12 h-12 mx-auto" />
                  <h4 className="font-bold">Zapytanie zostało wysłane!</h4>
                  <p className="text-xs font-light">
                    Dziękujemy za kontakt. Potwierdzenie oraz numer zgłoszenia zostały przesłane na wskazany adres email.
                  </p>
                  <button
                    onClick={handleCloseInquiry}
                    className="mt-4 bg-brand-teal text-white text-xs font-semibold py-2 px-6 rounded-xl hover:bg-brand-teal-hover transition-colors"
                  >
                    Zamknij okno
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">Nazwa Firmy / NIP</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                      placeholder="Np. Catering Polska Sp. z o.o."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark mb-1">Email kontaktowy</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                        placeholder="kontakt@twojafirma.pl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-dark mb-1">Telefon</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                        placeholder="+48 000 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">Szacowany nakład roczny / szt.</label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                    >
                      <option value="10000">10 000 - 50 000 szt.</option>
                      <option value="50000">50 000 - 200 000 szt.</option>
                      <option value="200000">200 000+ szt.</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-dark mb-1">Dodatkowe wymagania (opcjonalnie)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-silver rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal focus:border-brand-teal"
                      placeholder="Np. Własne logo wytłaczane na dnie, nietypowa grubość ścianki..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-md"
                  >
                    Wyślij zapytanie hurtowe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-brand-gray">Ładowanie katalogu...</div>}>
      <ShopContent />
    </Suspense>
  );
}
