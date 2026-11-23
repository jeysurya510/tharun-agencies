import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Expansion() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section id="expansion" className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[120px] -z-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cyan font-bold text-sm mb-6 border border-white/10">Growing Forward</div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Proposed Manufacturing of Industrial Consumables.</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">With increasing demand from existing customers and the growing industrial sector, we are diversifying into domestic manufacturing. This expansion will reduce dependence on external suppliers and strengthen our position in the market.</p>
            <ul className="space-y-4 mb-8">
              {["Domestic Manufacturing", "Reduced Supplier Dependence", "Strengthened Market Position"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="text-cyan" size={20} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            <img src="/images/manu.png" alt="Manufacturing" className="rounded-3xl border border-white/10 opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}