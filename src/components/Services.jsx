import { motion } from "framer-motion";
import { ShieldCheck, Box, Container, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Services() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

  return (
    <section id="services" className="py-24 bg-pale relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-cyan font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-navy mb-4">Comprehensive Business Solutions</h3>
          <p className="text-gray-600">We cater to industrial and commercial clients with reliable services and top-tier industrial supplies.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Box />, title: "Packaging Services", desc: "Professional packaging of goods for others, ensuring safety and compliance for industrial dispatches." },
            { icon: <Container />, title: "Container Handling", desc: "Efficient and safe container handling services tailored for shipping and logistics operations." },
            { icon: <Wrench />, title: "Industrial Trading", desc: "Trading of high-quality industrial products and consumables sourced from reliable suppliers." },
            { icon: <ShieldCheck />, title: "Supply Chain Support", desc: "End-to-end supply chain support services to keep your business moving without delays." },
            { icon: <TrendingUp />, title: "Material Supply", desc: "Bulk industrial material supply with a focus on timely delivery and competitive pricing." },
            { icon: <CheckCircle2 />, title: "Custom Solutions", desc: "Tailored packaging and handling solutions based on your specific industrial requirements." },
          ].map((srv, i) => (
            <motion.div whileHover={{ y: -8, scale: 1.02 }} variants={fadeUp} key={i} className="bg-white p-8 rounded-2xl border border-line shadow-sm hover:shadow-2xl hover:border-cyan/30 transition-all group cursor-default">
              <div className="w-14 h-14 bg-cyan/10 text-cyan rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{srv.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}