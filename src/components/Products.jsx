import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Box, X, Phone, ShieldCheck, Clock, MapPin, Truck, CreditCard, ChevronRight } from "lucide-react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubProduct, setSelectedSubProduct] = useState(null);

  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };


  const categories = [
    { 
      title: "Lashing Services", 
      desc: "ODC Cargo Lashing, Lashing Belt Choking, Air Bag Lashing, Drum Lashing & more.", 
      img: "/images/lashing-service.png", 
      count: "12 Services",
      subProducts: [
        { name: "ODC Cargo Lashing Service", price: "₹29,000/Container", img: "/images/odc-lashing.png", desc: "Heavy machinery and oversized cargo lashing service with international safety standards.", meta: "Offline | 1 Week" },
        { name: "Lashing Belt Choking Service", price: "Ask Price", img: "/images/belt-choking.png", desc: "Safe and secure belt choking for heavy containers and exports.", meta: "Offline | 1 Week" },
        { name: "Air Bag Lashing Service", price: "₹8,500/Container", img: "/images/air-bag.png", desc: "Air bags used to fill voids and secure cargo during transit.", meta: "Offline | 1 Week" },
        { name: "Drum Lashing Choking Service", price: "₹6,000/Container", img: "/images/drum-lashing.png", desc: "Specialized choking for drums to prevent movement in containers.", meta: "Offline | 1 Week" },
        { name: "Lashing Choking Noombal CFS Service", price: "₹6,500/Container", img: "/images/noombal-cfs.png", desc: "Lashing services at Noombal CFS yard.", meta: "Offline | 1 Week" },
        { name: "Open Top Container Lashing Service", price: "₹20,000/Container", img: "/images/open-top.png", desc: "Securing cargo in open top containers with tarpaulin and lashing belts.", meta: "Offline | 1 Week" },
        { name: "Car Lashing Service", price: "₹10,500/Container", img: "/images/car-lashing.png", desc: "Car securing service inside containers for export.", meta: "Offline | 1 Week" },
        { name: "Tarpaulin Lashing and Choking Service", price: "₹5,000/Container", img: "/images/tarpaulin.png", desc: "Tarpaulin covering with proper choking for weather protection.", meta: "Offline | 1 Week" },
        { name: "Drum Lashing Service", price: "Ask Price", img: "/images/drum-lashing-2.png", desc: "Securing drums on flatbeds and containers.", meta: "Offline | 1 Week" },
        { name: "Wooden Pallet Lashing Services", price: "Ask Price", img: "/images/wooden-pallet.png", desc: "Lashing of goods stacked on wooden pallets.", meta: "Offline | 1 Week" },
        { name: "Heavy Vehicle Lashing Services", price: "₹1,20,000/Container", img: "/images/heavy-vehicle.png", desc: "Lashing of excavators and heavy construction vehicles.", meta: "Offline | 1 Week" },
        { name: "Lashing Choking Service", price: "₹5,000/Container", img: "/images/general-lashing.png", desc: "General lashing and choking service for standard containers.", meta: "Offline | 1 Week" }
      ]
    },
    { 
      title: "Lashing Belt", 
      desc: "Heavy container lashing and premium belt choking.", 
      img: "/images/lashing-belt.png", 
      count: "2 Services",
      subProducts: [
        { name: "Heavy Container Lashing Service", price: "Ask Price", img: "/images/heavy-container.png", desc: "Heavy duty lashing service using high tensile belts.", meta: "Offline | 1 Week" },
        { name: "Lashing Belt Choking Service", price: "Ask Price", img: "/images/belt-choking.png", desc: "Premium lashing belt choking for safe container transit.", meta: "Offline | 1 Week" }
      ]
    },
    { 
      title: "Packaging Services", 
      desc: "Wooden Box Packaging, Lashing Belt Choking & more.", 
      img: "/images/packaging-service.png", 
      count: "3 Services",
      subProducts: [
        { name: "Wooden Box Packaging Service", price: "₹15,000/Container", img: "/images/wooden-box.png", desc: "Export quality wooden box packaging for heavy machinery.", meta: "Offline | 1 Week" },
        { name: "Lashing Belt Choking Service", price: "Ask Price", img: "/images/belt-choking.png", desc: "Lashing belt service combined with packaging.", meta: "Offline | 1 Week" },
        { name: "Lashing Services", price: "Ask Price", img: "/images/lashing-service.png", desc: "General lashing services with packaging.", meta: "Offline | 1 Week" }
      ]
    },
    { 
      title: "Cargo Services", 
      desc: "Heavy Weight Cargo Service.", 
      img: "/images/cargo-service.png", 
      count: "1 Service",
      subProducts: [
        { name: "Heavy Weight Cargo Service", price: "₹45,000/Kg", img: "/images/cargo-service.png", desc: "Heavy weight cargo handling and transport.", meta: "Offline | 1 Week" }
      ]
    },
    { 
      title: "Palletizing Services", 
      desc: "Plastic Pallet Service.", 
      img: "/images/palletizing-service.png", 
      count: "1 Service",
      subProducts: [
        { name: "Plastic Pallet Service", price: "Ask Price", img: "/images/plastic-pallet.png", desc: "Efficient plastic palletizing for storage and transport.", meta: "Offline | 1 Week" }
      ]
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 border-b border-line pb-6 md:pb-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-cyan font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Products</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">Explore Categories</h3>
            <p className="text-gray-600 text-sm md:text-lg">High-quality industrial services and packaging solutions.</p>
          </div>
        </motion.div>

        {/* Main Categories Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((item, i) => (
            <motion.div variants={fadeUp} key={i} className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-line shadow-sm hover:shadow-2xl hover:border-cyan/30 transition-all duration-500 flex flex-col cursor-pointer" onClick={() => setSelectedCategory(item)}>
              <div className="relative h-[220px] md:h-[280px] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-navy shadow-sm flex items-center gap-1.5">
                  <Box size={14} className="text-cyan" /> {item.count}
                </div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md">{item.title}</h4>
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 md:h-[60px]">{item.desc}</p>
                <div className="inline-flex items-center text-cyan font-bold text-sm group-hover:text-navy transition-colors">
                  View Products <ArrowUpRight size={16} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POPUP 1: CATEGORY -> SHOW BIG SUB PRODUCT CARDS */}
      <AnimatePresence>
        {selectedCategory && !selectedSubProduct && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-pale rounded-3xl w-full max-w-6xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              {/* Popup Header */}
              <div className="p-6 md:p-8 bg-white border-b border-line flex justify-between items-center sticky top-0 z-10 shrink-0">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-navy">{selectedCategory.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Showing {selectedCategory.subProducts.length} premium services</p>
                </div>
                <button onClick={() => setSelectedCategory(null)} className="bg-gray-100 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm">
                  <X size={24} />
                </button>
              </div>

              {/* Sub-Product Big Grid */}
              <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCategory.subProducts.map((sub, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedSubProduct(sub)}
                      className="bg-white rounded-2xl overflow-hidden border border-line shadow-sm hover:shadow-xl hover:border-cyan/50 transition-all cursor-pointer group flex flex-col"
                    >
                      <div className="relative h-[180px] overflow-hidden shrink-0">
                        <img src={sub.img} alt={sub.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-navy shadow-sm">
                          {sub.price}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <h4 className="font-bold text-navy text-lg leading-tight mb-2 group-hover:text-cyan transition-colors">{sub.name}</h4>
                        <p className="text-gray-500 text-xs line-clamp-2 mb-4">{sub.desc}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-line">
                          <span className="text-xs font-semibold text-gray-400 flex items-center gap-1"><Clock size={14}/> 1 Week</span>
                          <span className="text-cyan text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">View <ChevronRight size={16}/></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPUP 2: SUB PRODUCT FULL DETAILS */}
      <AnimatePresence>
        {selectedSubProduct && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedSubProduct(null)}
            className="fixed inset-0 z-[110] bg-navy/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedSubProduct(null)}
                className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors shadow-md"
              >
                <X size={24} />
              </button>

              {/* Left Side: Big Image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-gray-100 flex items-center justify-center">
                <img src={selectedSubProduct.img} alt={selectedSubProduct.name} className="w-full h-full object-cover" />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan font-bold text-[11px] uppercase tracking-wide mb-4 w-max">
                  <ShieldCheck size={14} /> Verified Service
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-3">{selectedSubProduct.name}</h3>
                <div className="text-2xl font-bold text-cyan mb-6">{selectedSubProduct.price}</div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {selectedSubProduct.desc} We guarantee the highest standard of safety and professionalism for your cargo needs.
                </p>

                {/* Meta Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8 bg-pale p-5 rounded-2xl border border-line">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 font-semibold uppercase">Service Mode</span>
                    <span className="text-sm font-bold text-navy flex items-center gap-1.5"><Truck size={16} className="text-cyan"/> Offline</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 font-semibold uppercase">Payment Mode</span>
                    <span className="text-sm font-bold text-navy flex items-center gap-1.5"><CreditCard size={16} className="text-cyan"/> Online/Offline</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 font-semibold uppercase">Duration</span>
                    <span className="text-sm font-bold text-navy flex items-center gap-1.5"><Clock size={16} className="text-cyan"/> 1 Week</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 font-semibold uppercase">Location</span>
                    <span className="text-sm font-bold text-navy flex items-center gap-1.5"><MapPin size={16} className="text-cyan"/> Pan India</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/918043895048?text=Hi Tharun Agencies, I am interested in your service: ${selectedSubProduct.name} (Price: ${selectedSubProduct.price}). Please share more details.`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => { setSelectedSubProduct(null); setSelectedCategory(null); }}
                  className="w-full py-4 bg-cyan text-white rounded-xl font-bold hover:bg-navy transition-all shadow-lg flex justify-center items-center gap-2 mt-auto"
                >
                  <Phone size={18} /> Enquire Now on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}