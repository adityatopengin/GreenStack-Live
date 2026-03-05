import { motion } from 'framer-motion';
import { Flame, Wind, Droplets, Leaf } from 'lucide-react';

export default function Specs({ variants }) {
  // Organizing the data so it's easy for you to update later
  const specsData = [
    { 
      label: "Gross Calorific Value", 
      value: "3,800 - 4,200 kcal/kg", 
      icon: <Flame size={18} className="text-brand-emerald" /> 
    },
    { 
      label: "Ash Content", 
      value: "< 3%", 
      icon: <Wind size={18} className="text-brand-emerald" /> 
    },
    { 
      label: "Moisture Content", 
      value: "< 10%", 
      icon: <Droplets size={18} className="text-brand-emerald" /> 
    },
    { 
      label: "Raw Material", 
      value: "Cotton Stalk, Soy, Bamboo", 
      icon: <Leaf size={18} className="text-brand-emerald" /> 
    },
  ];

  return (
    <motion.div 
      variants={variants} 
      className="glass-panel glass-panel-hover p-6 md:col-span-2 flex flex-col justify-between"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-brand-text">Target Specifications</h3>
        <span className="text-xs font-medium bg-brand-emerald/10 text-brand-emerald px-2 py-1 rounded-full border border-brand-emerald/20">
          MNRE Standard
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {specsData.map((spec, index) => (
          <div key={index} className="flex items-start space-x-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5 hover:border-brand-emerald/20 transition-colors">
            <div className="mt-0.5 bg-brand-dark p-2 rounded-lg border border-white/5">
              {spec.icon}
            </div>
            <div>
              <p className="text-sm text-brand-muted">{spec.label}</p>
              <p className="font-semibold text-brand-text">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

