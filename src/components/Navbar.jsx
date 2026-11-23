import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/tharun-logo.png" 
            alt="Tharun Agencies Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#about" className="hover:text-cyan transition-colors">About</a>
          <a href="#products" className="hover:text-cyan transition-colors">Products</a>
          <a href="#whyus" className="hover:text-cyan transition-colors">Why Us</a>
          <a href="#expansion" className="hover:text-cyan transition-colors">Expansion</a>
          <a href="#contact" className="px-6 py-2.5 bg-navy text-white rounded-lg hover:bg-cyan transition-all shadow-md">Contact Us</a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-navy p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu Full Screen Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-line shadow-xl px-6 py-8 flex flex-col gap-6"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-navy border-b border-line pb-2">About</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-navy border-b border-line pb-2">Products</a>
            <a href="#whyus" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-navy border-b border-line pb-2">Why Us</a>
            <a href="#expansion" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-navy border-b border-line pb-2">Expansion</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 text-center bg-cyan text-white rounded-xl font-bold text-lg mt-2 shadow-lg">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}