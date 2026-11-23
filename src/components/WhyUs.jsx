import { motion } from "framer-motion";
import { CheckCircle2, Star, Handshake } from "lucide-react";

export default function WhyUs() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <section id="whyus" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-cyan font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us?</h2>
            <h3 className="text-4xl font-bold text-navy mb-6">The Tharun Agencies Advantage</h3>
            <p className="text-gray-600 mb-8 text-lg">Our unique ability to serve the growing desires of customers remarkably is what places us ahead of our competitors.</p>
            <div className="space-y-4">
              {[
                "Prompt delivery and timely execution",
                "Superior quality and magnificent finishing",
                "Wide distribution network across India",
                "Ethical business practices",
                "Fair and transparent policies"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <div className="bg-pale p-8 rounded-2xl border border-line relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <Handshake className="text-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold text-navy mb-2">Authoritative Vendor Base</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We procure from vendors with notable financial potency and market standing. They manufacture as per preferred requirements within promised time borders.</p>
            </div>
            <div className="bg-navy p-8 rounded-2xl border border-navy-light relative overflow-hidden group hover:shadow-lg transition-all text-white">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <Star className="text-cyan mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">100% Client Satisfaction</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Our fair business policies, easy payment modes, and timely project execution have helped us earn a huge and loyal clientele in the industry.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}