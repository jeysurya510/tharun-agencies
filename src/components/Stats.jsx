import { motion } from "framer-motion";

export default function Stats() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

  return (
    <section className="border-y border-line bg-white/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-line text-center">
          {[
            { label: "Established", value: "2009" },
            { label: "Employees", value: "51-100" },
            { label: "GSTIN Verified", value: "Yes" },
            { label: "Headquarters", value: "Chennai, TN" },
          ].map((stat, i) => (
            <motion.div variants={fadeUp} key={i} className="px-4">
              <p className="text-2xl md:text-3xl font-extrabold text-navy">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}