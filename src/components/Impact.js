import { motion } from 'framer-motion';
import { Tractor, ArrowRight, Factory, Power } from 'lucide-react';

export default function Impact({ variants }) {
  const steps = [
    { 
      title: "Agri-Waste", 
      desc: "Farmers sell crop residue instead of burning.", 
      icon: <Tractor size={24} className="text-brand-emerald" /> 
    },
    { 
      title: "GreenStack", 
      desc: "Waste is compressed into high-energy pellets.", 
      icon: <Factory size={24} className="text-brand-emerald" /> 
    },
    { 
      title: "Industry", 
      desc: "Clean, carbon-neutral co-firing power.", 
      icon: <Power size={24} className="text-brand-emerald" /> 
    }
  ];

  return (
    <motion.div 
      variants={variants} 
      className="glass-panel glass-panel-hover p-6 md:col-span-3 lg:col-span-4 flex flex-col justify-center items-center text-center mt-4 border-t border-brand-emerald/20"
    >
      <h3 className="text-2xl font-bold text-brand-text mb-2 tracking-wide">
        The Waste-to-Wealth Cycle
      </h3>
      <p className="text-brand-muted text-sm max-w-2xl mx-auto mb-8">
        GreenStack Fuels empowers local farming communities across Maharashtra by turning agricultural liability into industrial asset, directly combating stubble burning and rural poverty.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6">
            
            {/* The Step Card */}
            <div className="flex flex-col items-center p-4 bg-brand-dark/50 rounded-2xl border border-white/5 shadow-inner w-48 hover:border-brand-emerald/30 hover:bg-brand-emerald/5 transition-all">
              <div className="bg-brand-emerald/10 p-4 rounded-full mb-4 ring-1 ring-brand-emerald/20">
                {step.icon}
              </div>
              <h4 className="font-bold text-brand-text mb-1">{step.title}</h4>
              <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
            </div>

            {/* The Connecting Arrow (Hidden on mobile, visible on desktop) */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block text-brand-emerald/40 mt-[-20px]">
                <ArrowRight size={32} />
              </div>
            )}
            
            {/* Mobile Arrow (Visible only on small screens) */}
             {index !== steps.length - 1 && (
              <div className="block md:hidden text-brand-emerald/40 rotate-90 my-2">
                <ArrowRight size={24} />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

