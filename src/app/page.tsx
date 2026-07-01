"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { ArrowRight, Leaf, ShieldCheck, Award, HeartHandshake, CheckCircle2, ChevronRight, Star } from "lucide-react";
import { PRODUCTS, BLOG_POSTS } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);

  const bestsellers = PRODUCTS.filter(p => p.bestseller);
  const recentPosts = BLOG_POSTS.slice(0, 2);

  const testimonials = [
    {
      name: "Jan Kowalski",
      role: "Dyrektor Operacyjny, FoodPack Sp. z o.o.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Współpracujemy z Alopak od ponad 5 lat. Stabilność dostaw foremek aluminiowych oraz stała jakość partii produkcyjnych pozwoliły nam zoptymalizować nasz proces pakowania.”",
      bgColor: "bg-white",
    },
    {
      name: "Anna Nowak",
      role: "Właścicielka, GreenCatering",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Wybór Alopak to był strzał w dziesiątkę. Ich aluminiowe tacki są w 100% biodegradowalne/recyklingowalne, co idealnie wpisuje się w ekologiczną misję naszej firmy cateringowej.”",
      bgColor: "bg-brand-mint/30",
    },
    {
      name: "Michał Wiśniewski",
      role: "Kierownik Logistyki, BioMed Pharma",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Tuby aluminiowe od Alopak spełniają rygorystyczne wymagania naszej branży. Doceniamy pełną certyfikację PZH i doskonałe zabezpieczenie produktów przed czynnikami UV.”",
      bgColor: "bg-white",
    },
    {
      name: "Tomasz Kaczmarek",
      role: "CEO, Kaczmarek Foods",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Foremki Alopak nie odkształcają się podczas wypieku, co było kluczowym problemem u naszego poprzedniego dostawcy. Jakość wyższa niż zagraniczne zamienniki.”",
      bgColor: "bg-brand-cream",
    },
    {
      name: "Karolina Wójcik",
      role: "Brand Manager, PureCosmetics",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Wizualna jakość tubek aluminiowych od Alopak mocno wyróżnia nasze kremy na półkach. Farby użyte do nadruku są trwałe i prezentują się luksusowo.”",
      bgColor: "bg-white",
    },
    {
      name: "Piotr Zieliński",
      role: "Główny Technolog, VetCare",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Dostawy realizowane są w 100% na czas, a elastyczność Alopak przy mniejszych zamówieniach pomaga nam w optymalizacji stanów magazynowych.”",
      bgColor: "bg-brand-mint/20",
    },
    {
      name: "Magdalena Lewandowska",
      role: "Dyrektor Zakupów, EcoDiet",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Możliwość bezproblemowego recyklingu opakowań aluminiowych to dla naszej marki priorytet. Alopak dostarcza rozwiązania przyjazne środowisku.”",
      bgColor: "bg-white",
    },
    {
      name: "Krzysztof Szymański",
      role: "Właściciel, Browar Rzemieślniczy Chmiel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Niedawno wprowadziliśmy limitowane serie napojów w puszkach aluminiowych Alopak. Świetna ochrona produktu i całkowity brak metalicznego posmaku.”",
      bgColor: "bg-brand-mint/10",
    },
    {
      name: "Ewa Dąbrowska",
      role: "Specjalista ds. Jakości, PharmaPol",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "„Audyty wewnętrzne przebiegają sprawniej, odkąd współpracujemy z Alopak. Pełna dokumentacja, atesty i powtarzalność partii to ich główny atut.”",
      bgColor: "bg-white",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / 3);
  const currentTestimonials = testimonials.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section (FurniNest Style) */}
      <section className="relative pt-6 pb-12">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center shadow-xl">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=80"
              alt="Precyzyjna linia produkcyjna aluminium Alopak"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/50 to-transparent"></div>

            {/* Content Container */}
            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl space-y-6"
              >
                <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  Twój lider w produkcji <span className="text-brand-teal italic">opakowań aluminiowych</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-white/90 text-lg font-light leading-relaxed max-w-xl">
                  Odkryj nowoczesne, aluminiowe opakowania dla biznesu. Łączymy precyzję wykonania, innowacyjną ekologię i rygorystyczne normy w jednym, bezkompromisowym produkcie.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/sklep"
                    className="bg-brand-teal text-white font-medium px-8 py-3.5 rounded-lg hover:bg-brand-teal-hover transition-colors text-center"
                  >
                    Katalog Produktów
                  </Link>
                  <Link
                    href="/sklep?inquiry=true"
                    className="bg-white text-brand-dark font-medium px-8 py-3.5 rounded-lg hover:bg-brand-mint transition-colors text-center"
                  >
                    Darmowe Próbki
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Glassmorphism Product Cards (Bottom Right) */}
            <div className="hidden lg:flex absolute bottom-8 right-8 gap-4">
              <Link href="/sklep/foremka-al-1000" className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-2 w-36 group hover:bg-white/30 transition-all shadow-lg">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-white">
                  <Image src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=600&q=80" fill className="object-cover" alt="Foremka R10" />
                </div>
                <p className="text-white text-[13px] font-medium px-1 flex justify-between items-center">
                  Foremka R10 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>

              <Link href="/sklep/tuba-kosmetyczna-50" className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-2 w-36 group hover:bg-white/30 transition-all shadow-lg">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-white">
                  <Image src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80" fill className="object-cover" alt="Tuba 50ml" />
                </div>
                <p className="text-white text-[13px] font-medium px-1 flex justify-between items-center">
                  Tuba 50ml <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>

              <Link href="/sklep/butelka-al-500" className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-2 w-36 group hover:bg-white/30 transition-all shadow-lg">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-2 bg-white">
                  <Image src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80" fill className="object-cover" alt="Butelka 500ml" />
                </div>
                <p className="text-white text-[13px] font-medium px-1 flex justify-between items-center">
                  Butelka 500ml <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Alopak & Production Scale */}
      <section className="bg-white py-20 border-y border-brand-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Headline & Core Values */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-xs text-brand-teal uppercase tracking-wider font-bold">O firmie</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold leading-tight">
                Polska Produkcja, Globalna Odpowiedzialność
              </h2>
              <p className="text-brand-gray text-base font-light leading-relaxed">
                Od ponad dwóch dekad zaopatrujemy wiodące marki spożywcze, farmaceutyczne i kosmetyczne w opakowania wykonane w 100% z aluminium nadającego się do recyklingu. Stawiamy na innowacje technologiczne i elastyczność dostaw.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm">Nowoczesny park maszynowy</h4>
                    <p className="text-xs text-brand-gray">Automatyczne linie prasujące gwarantujące powtarzalność wymiarów.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm">Elastyczność minimum logistycznego</h4>
                    <p className="text-xs text-brand-gray">Umożliwiamy testowanie mniejszych partii próbnych dla nowych marek.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Metrics & Numbers */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-teal pl-6 space-y-2">
                <span className="block text-5xl md:text-6xl font-extrabold text-brand-dark font-serif">20+</span>
                <span className="block text-sm font-semibold text-brand-dark">Lata doświadczenia na rynku B2B</span>
                <p className="text-xs text-brand-gray font-light">Zaufane partnerstwo z dystrybutorami w całej Europie.</p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6 space-y-2">
                <span className="block text-5xl md:text-6xl font-extrabold text-brand-dark font-serif">50M+</span>
                <span className="block text-sm font-semibold text-brand-dark">Sztuk opakowań rocznie</span>
                <p className="text-xs text-brand-gray font-light">Skalowalne moce produkcyjne gotowe na każde zlecenie.</p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6 space-y-2">
                <span className="block text-5xl md:text-6xl font-extrabold text-brand-dark font-serif">100%</span>
                <span className="block text-sm font-semibold text-brand-dark">Recyklingu surowca</span>
                <p className="text-xs text-brand-gray font-light">Gwarancja czystego ekologicznie cyklu życia produktu.</p>
              </div>

              <div className="border-l-4 border-brand-teal pl-6 space-y-2">
                <span className="block text-5xl md:text-6xl font-extrabold text-brand-dark font-serif">PZH</span>
                <span className="block text-sm font-semibold text-brand-dark">Zatwierdzone atesty sanitarne</span>
                <p className="text-xs text-brand-gray font-light">Pełne bezpieczeństwo i zgodność z normami spożywczymi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Teaser (Bestsellers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs text-brand-teal uppercase tracking-wider font-bold">Nasza oferta</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold mt-2">
              Popularne Rozwiązania
            </h2>
          </div>
          <Link
            href="/sklep"
            className="group flex items-center gap-1 text-sm font-semibold text-brand-teal hover:text-brand-teal-hover transition-colors mt-4 md:mt-0"
          >
            <span>Przejdź do pełnego katalogu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {bestsellers.slice(0, 3).map((product) => (
            <motion.div
              variants={itemVariants}
              key={product.id}
              className="group bg-white rounded-3xl border border-brand-silver overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-brand-mint/20 border-b border-brand-silver">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="inline-block text-xs bg-brand-mint text-brand-teal px-2.5 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-brand-dark leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-brand-gray text-xs font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-silver flex justify-between items-center mt-6">
                  <span className="text-xs font-medium text-brand-dark">Atest: {product.specs.certification.split(',')[0]}</span>
                  <Link
                    href={`/sklep/${product.id}`}
                    className="bg-brand-mint text-brand-teal text-xs font-semibold py-2 px-4 rounded-xl group-hover:bg-brand-teal group-hover:text-white transition-colors"
                  >
                    Szczegóły & Zapytanie
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Testimonials Section (Replacing the Calculator) */}
      <section className="bg-brand-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
              Co Mówią Nasi Klienci
            </h2>
            <p className="text-brand-gray text-sm md:text-base font-light max-w-xl mx-auto">
              Opinie partnerów, którzy zaufali jakości i niezawodności opakowań aluminiowych Alopak
            </p>
          </div>

          <div className="relative overflow-hidden pt-12 pb-4 px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
              >
                {currentTestimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`${testimonial.bgColor} rounded-3xl border border-brand-silver px-6 pb-8 pt-14 relative flex flex-col items-center text-center shadow-sm h-full`}
                  >
                    {/* Profile Image overlapping at the top */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Author Info */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-brand-dark text-lg">{testimonial.name}</h4>
                      <span className="text-xs text-brand-gray font-light block">{testimonial.role}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-brand-dark text-sm font-medium leading-relaxed mb-8 flex-grow">
                      {testimonial.quote}
                    </p>

                    {/* Rating stars */}
                    <div className="flex gap-1 mt-auto">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation slider */}
          <div className="flex justify-center gap-3 mt-8">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentPage ? "bg-brand-teal scale-125" : "bg-brand-silver hover:bg-brand-gray"
                }`}
                aria-label={`Przejdź do strony ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* 5. Knowledge Base Teaser (Blog) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-xs text-brand-teal uppercase tracking-wider font-bold">Blog</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold mt-2">
              Edukacja & Zrównoważony Rozwój
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-1 text-sm font-semibold text-brand-teal hover:text-brand-teal-hover transition-colors mt-4 md:mt-0"
          >
            <span>Wszystkie artykuły</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-3xl border border-brand-silver overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-auto relative min-h-[200px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-8 w-full md:w-3/5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-brand-gray font-light">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-brand-dark leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray text-xs font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-silver">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal hover:underline"
                  >
                    <span>Przeczytaj artykuł</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Brand Partners / Trust Logo Grid */}
      <section className="bg-white py-16 border-y border-brand-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <span className="text-xs uppercase tracking-widest text-brand-gray font-semibold">Zaufali nam liderzy rynkowi</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            
            {/* Profi Logo */}
            <div className="flex items-center gap-2 group">
              <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              <span className="font-sans text-2xl font-black tracking-tighter text-brand-dark group-hover:text-brand-teal transition-colors">PROFI</span>
            </div>

            {/* FirmaX Logo */}
            <div className="flex items-center gap-2 group">
              <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              <span className="font-serif text-2xl font-bold tracking-widest text-brand-dark group-hover:text-brand-teal transition-colors">FirmaX</span>
            </div>

            {/* FirmaY Logo */}
            <div className="flex items-center gap-2 group">
              <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.5-4.5 4.5 4.5M2 17l4.5 4.5 4.5-4.5"/><path d="m22 7-4.5-4.5-4.5 4.5M22 17l-4.5 4.5-4.5-4.5"/></svg>
              <span className="font-sans text-2xl font-semibold tracking-wide text-brand-dark group-hover:text-brand-teal transition-colors">FirmaY</span>
            </div>

            {/* FirmaZ Logo */}
            <div className="flex items-center gap-2 group">
              <svg className="w-8 h-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="font-serif text-2xl font-black italic tracking-normal text-brand-dark group-hover:text-brand-teal transition-colors">FirmaZ</span>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Location & Contact CTAs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-brand-mint/20 rounded-[2.5rem] border border-brand-silver overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info & CTAs */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <span className="text-xs text-brand-teal uppercase tracking-wider font-bold">Kontakt</span>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold leading-tight">
                  Gdzie nas znajdziesz?
                </h2>
                <p className="text-brand-gray text-base font-light leading-relaxed">
                  Główna siedziba i zakład produkcyjny Alopak zlokalizowane są w Ostrzeszowie. Jesteśmy otwarci na spotkania B2B i audyty jakościowe.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm border border-brand-silver shrink-0 text-brand-teal">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm">Adres Fabryki</h4>
                    <p className="text-sm text-brand-gray font-light">ul. Składowa 3<br/>63-500 Ostrzeszów</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-2.5 rounded-xl shadow-sm border border-brand-silver shrink-0 text-brand-teal">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-sm">Napisz do nas</h4>
                    <a href="mailto:kontakt@alopak.pl" className="text-sm text-brand-teal font-medium hover:underline">kontakt@alopak.pl</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+48627301672"
                  className="bg-brand-teal text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-brand-teal-hover transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-brand-teal/20"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>62 730 16 72</span>
                </a>
                <Link
                  href="/sklep?inquiry=true"
                  className="bg-white border border-brand-silver text-brand-dark font-semibold px-6 py-3.5 rounded-xl hover:bg-brand-cream transition-colors text-center flex items-center justify-center"
                >
                  Wyślij zapytanie
                </Link>
              </div>
            </div>

            {/* Google Maps iFrame */}
            <div className="min-h-[300px] lg:min-h-full bg-brand-silver/20 relative">
              <iframe
                src="https://maps.google.com/maps?q=Sk%C5%82adowa%203,%2063-500%20Ostrzesz%C3%B3w&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
