import { motion } from 'framer-motion';

export default function Hero({ variants }) {
  return (
    <motion.div 
      variants={variants} 
      className="glass-panel glass-panel-hover p-8 md:col-span-2 md:row-span-2 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="relative z-10">
        
        {/* A crisp new pre-header badge */}
        <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-brand-emerald uppercase bg-brand-emerald/10 rounded-full border border-brand-emerald/20">
          Zero-Coal Alternative
        </div>
        
        {/* Action-oriented headline instead of just repeating the name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
          Powering Maharashtra's <span className="text-brand-emerald">Industrial Future.</span>
        </h1>
        
        <p className="text-brand-text/80 text-lg leading-relaxed mb-8 max-w-md">
          We are building the state's most advanced biomass pellet hub. Delivering high-calorific, carbon-neutral fuel to replace coal and empower local farmers.
        </p>
        
        <button className="bg-brand-emerald text-brand-dark px-6 py-3 rounded-lg font-bold w-max hover:bg-brand-glow transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
          Join the Waitlist
        </button>
      </div>
      
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
    </motion.div>
  );
}

