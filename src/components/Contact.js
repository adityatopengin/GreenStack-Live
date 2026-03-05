import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact({ variants }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In the future, this will connect to your email or CRM (like EmailJS or Formspree)
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      variants={variants} 
      className="glass-panel glass-panel-hover p-6 md:col-span-1 md:row-span-2 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-brand-emerald mb-2">Partner With Us</h3>
        <p className="text-sm text-brand-muted">
          Secure your 2026 biomass supply. Register for pre-launch bulk pricing.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 relative z-10">
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1 block">Company Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-2 text-brand-text focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all"
              placeholder="e.g. Maharashtra Textiles Ltd."
            />
          </div>
          
          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1 block">Monthly Need (Tons)</label>
            <select className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-2 text-brand-text focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all appearance-none">
              <option value="<50">Less than 50 Tons</option>
              <option value="50-200">50 - 200 Tons</option>
              <option value="200-500">200 - 500 Tons</option>
              <option value="500+">500+ Tons</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1 block">Phone / WhatsApp</label>
            <input 
              type="tel" 
              required
              className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-2 text-brand-text focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all"
              placeholder="+91..."
            />
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/50 hover:bg-brand-emerald hover:text-brand-dark font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all group"
          >
            <span>Request Quote</span>
            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-8 z-10"
        >
          <CheckCircle size={48} className="text-brand-emerald mb-4" />
          <h4 className="text-lg font-bold text-brand-text mb-2">Request Received</h4>
          <p className="text-sm text-brand-muted">
            Our team will contact you shortly with the GreenStack Project Prospectus.
          </p>
        </motion.div>
      )}

      {/* Decorative ambient glow inside the tile */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
    </motion.div>
  );
}

