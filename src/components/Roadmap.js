import { motion } from 'framer-motion';
import { CheckCircle2, Clock, CircleDashed } from 'lucide-react';

export default function Roadmap({ variants }) {
  // The timeline data. You can easily change 'status' as you progress.
  const milestones = [
    { 
      label: "Site Acquisition & Design", 
      time: "Q1 2026", 
      status: "completed",
      icon: <CheckCircle2 size={20} className="text-brand-emerald" />
    },
    { 
      label: "Machinery & Infrastructure", 
      time: "Q2 2026", 
      status: "current",
      icon: <Clock size={20} className="text-brand-glow animate-pulse" />
    },
    { 
      label: "Quality Testing & Pilot Run", 
      time: "Q3 2026", 
      status: "upcoming",
      icon: <CircleDashed size={20} className="text-brand-muted/50" />
    },
    { 
      label: "Commercial Distribution", 
      time: "Q4 2026", 
      status: "upcoming",
      icon: <CircleDashed size={20} className="text-brand-muted/50" />
    }
  ];

  return (
    <motion.div 
      variants={variants} 
      className="glass-panel glass-panel-hover p-6 flex flex-col"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-brand-text mb-1">Project Roadmap</h3>
        <p className="text-sm text-brand-muted">Targeting full commercial capacity.</p>
      </div>

      <div className="relative pl-3 space-y-6 border-l border-white/10 ml-2">
        {milestones.map((step, index) => (
          <div key={index} className="relative flex flex-col pl-6">
            {/* The Timeline Icon matching the status */}
            <div className="absolute -left-[11px] top-0 bg-brand-dark rounded-full">
              {step.icon}
            </div>
            
            <p className={`text-sm font-semibold ${
              step.status === 'completed' ? 'text-brand-text' : 
              step.status === 'current' ? 'text-brand-emerald' : 'text-brand-muted'
            }`}>
              {step.label}
            </p>
            <p className="text-xs text-brand-muted mt-1">{step.time}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

