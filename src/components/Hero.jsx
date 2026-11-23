import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

  return (
    <section className="relative pt-32 md:pt-40 pb-20 lg:pt-48 lg:pb-32 bg-grid">
      <div className="absolute top-20 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-cyan/10 text-cyan font-semibold text-xs md:text-sm mb-6">
              <ShieldCheck size={16} /> Trusted B2B Partner in Chennai
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight mb-6">
              Premium Packaging. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-navy">Secure Logistics.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              M/s. Tharun Agencies is a leading provider of Packaging Services, Container Handling, and Industrial Supplies. We combine 15+ years of expertise with high-quality execution.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="https://wa.me/918043895048?text=Hi Tharun Agencies, I would like to request a quote for your services." 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-cyan text-white rounded-xl font-bold hover:bg-cyan/90 transition-all shadow-lg hover:shadow-cyan/30 flex items-center justify-center gap-2 group"
              >
                Request a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-line h-[300px] md:h-[500px]">
              <img 
                src="/images/open-top.png" 
                alt="Tharun Agencies Cargo Handling" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-line flex items-center gap-4 w-max">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-navy">100%</p>
                <p className="text-xs md:text-sm text-gray-500 font-semibold">Quality Assured</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}