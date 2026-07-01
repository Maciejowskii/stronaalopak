"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/sklep?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-brand-silver/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="focus:outline-none" onClick={closeMobileMenu}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarisz7KxjM9TjUHQsHZNoJ7lI_EEuWzV1KBZaktOj&s=10" 
              alt="Alopak" 
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex gap-8 items-center text-[15px] font-medium tracking-wide">
          <Link href="/" className={`hover:text-brand-teal transition-colors ${pathname === '/' ? 'text-brand-teal' : 'text-brand-dark'}`}>Strona Główna</Link>
          <Link href="/sklep" className={`hover:text-brand-teal transition-colors ${pathname === '/sklep' ? 'text-brand-teal' : 'text-brand-dark'}`}>Katalog B2B</Link>
          <Link href="/blog" className={`hover:text-brand-teal transition-colors ${pathname.startsWith('/blog') ? 'text-brand-teal' : 'text-brand-dark'}`}>Baza Wiedzy</Link>
          <Link href="/kontakt" className={`hover:text-brand-teal transition-colors ${pathname === '/kontakt' ? 'text-brand-teal' : 'text-brand-dark'}`}>Kontakt</Link>
        </nav>

        {/* Right: Icons & Mobile Toggle */}
        <div className="flex items-center gap-6 shrink-0 text-brand-dark">
          <div className="hidden sm:block relative h-9 w-48 flex justify-end">
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                <motion.form 
                  key="search-form"
                  initial={{ width: 40, opacity: 0 }}
                  animate={{ width: 192, opacity: 1 }}
                  exit={{ width: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onSubmit={handleSearch} 
                  className="absolute right-0 flex items-center"
                >
                  <input
                    type="text"
                    autoFocus
                    placeholder="Szukaj..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => {
                      if (!searchQuery) setIsSearchOpen(false);
                    }}
                    className="w-full bg-brand-cream/50 border border-brand-silver/60 rounded-full px-4 py-1.5 pr-10 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
                  />
                  <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-3 text-brand-gray hover:text-brand-dark">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.button 
                  key="search-btn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsSearchOpen(true)} 
                  className="absolute right-0 hover:text-brand-teal transition-colors p-1" 
                  aria-label="Szukaj"
                >
                  <Search className="w-[22px] h-[22px] stroke-[1.5]" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          
          <button 
            className="lg:hidden p-2 -mr-2 text-brand-dark hover:bg-brand-silver/30 rounded-lg transition-colors focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-brand-silver shadow-lg flex flex-col px-4 py-6 gap-6"
          >
            <Link 
              href="/" 
              className={`text-lg font-medium hover:text-brand-teal transition-colors ${pathname === '/' ? 'text-brand-teal' : 'text-brand-dark'}`}
              onClick={closeMobileMenu}
            >
              Strona Główna
            </Link>
            <Link 
              href="/sklep" 
              className={`text-lg font-medium hover:text-brand-teal transition-colors ${pathname === '/sklep' ? 'text-brand-teal' : 'text-brand-dark'}`}
              onClick={closeMobileMenu}
            >
              Katalog B2B
            </Link>
            <Link 
              href="/blog" 
              className={`text-lg font-medium hover:text-brand-teal transition-colors ${pathname.startsWith('/blog') ? 'text-brand-teal' : 'text-brand-dark'}`}
              onClick={closeMobileMenu}
            >
              Baza Wiedzy
            </Link>
            <Link 
              href="/kontakt" 
              className={`text-lg font-medium hover:text-brand-teal transition-colors ${pathname === '/kontakt' ? 'text-brand-teal' : 'text-brand-dark'}`}
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
            
            <div className="mt-4 pt-4 border-t border-brand-silver/50">
              <form onSubmit={handleSearch} className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" />
                <input
                  type="text"
                  placeholder="Szukaj produktów..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-cream/50 border border-brand-silver/60 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-teal"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
