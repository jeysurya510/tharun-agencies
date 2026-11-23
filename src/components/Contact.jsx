import { motion } from "framer-motion";
import { ShieldCheck, MapPin, ArrowRight, Phone } from "lucide-react";
import { useState } from "react"; // <-- Add this

export default function Contact() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  
  // New states for form
  const [formData, setFormData] = useState({ name: "", phone: "", requirement: "Packaging Services", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Requirement:* ${formData.requirement}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918043895048?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {/* ... Existing Contact Info Code ... */}
            <h2 className="text-cyan font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4 md:mb-6">Let's discuss your requirements.</h3>
            <p className="text-gray-600 text-sm md:text-base mb-8">Reach out to our team for packaging services, container handling, or industrial product supplies. We ensure a quick turnaround.</p>
            
            <div className="space-y-4 md:space-y-6 bg-pale p-6 md:p-8 rounded-2xl border border-line">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-cyan shrink-0"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-gray-500 uppercase">Location & CEO</p>
                  <p className="text-base md:text-lg font-semibold text-navy">P Devaraj (CEO)</p>
                  <p className="text-sm text-gray-500">Chennai, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-cyan shrink-0"><Phone size={20} /></div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-gray-500 uppercase">Call Us Directly</p>
                  <a href="tel:+918043895048" className="text-base md:text-lg font-semibold text-navy hover:text-cyan transition-colors">
                    +91 80438 95048
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Chandrasekar Raja (Marketing Manager)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-cyan shrink-0"><ShieldCheck size={20} /></div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-gray-500 uppercase">GSTIN</p>
                  <p className="text-base md:text-lg font-semibold text-navy">33AKYPD2682F3ZY</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-line">
            <h4 className="text-xl md:text-2xl font-bold text-navy mb-6">Send an Enquiry</h4>
            {/* FORM WITH WHATSAPP SUBMIT */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-cyan outline-none bg-gray-50 text-sm md:text-base" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">Phone</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-cyan outline-none bg-gray-50 text-sm md:text-base" placeholder="Your Phone" />
                </div>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">Requirement</label>
                <select value={formData.requirement} onChange={(e) => setFormData({...formData, requirement: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-cyan outline-none bg-gray-50 text-sm md:text-base">
                  <option>Packaging Services</option>
                  <option>Container Handling</option>
                  <option>Lashing Services</option>
                  <option>Cargo Services</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold text-gray-700 mb-1 block">Message</label>
                <textarea required rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-line focus:ring-2 focus:ring-cyan outline-none bg-gray-50 text-sm md:text-base" placeholder="Describe your requirement..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-cyan text-white rounded-xl font-bold hover:bg-cyan/90 transition-all shadow-lg flex justify-center items-center gap-2 text-sm md:text-base mt-2">
                Submit Enquiry via WhatsApp <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}