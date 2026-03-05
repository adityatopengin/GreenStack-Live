import Head from 'next/head';
import { motion } from 'framer-motion';

import Hero from '../components/Hero';
import Specs from '../components/Specs';
import Roadmap from '../components/Roadmap';
import Contact from '../components/Contact';
import Impact from '../components/Impact';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <div className="min-h-screen relative p-4 md:p-8 flex justify-center items-center flex-col">
      <Head>
        <title>GreenStack Fuels | Naveen Urjecha Vishwas</title>
        <meta name="description" content="Maharashtra's premier biomass pellet production hub." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-0 left-0 w-full h-[600px] bg-radial-glow -z-10 pointer-events-none" />

      {/* UPDATED: Navigation Bar with the New Logo */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-6xl flex justify-between items-center mb-8 px-2"
      >
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="GreenStack Fuels Logo" 
            className="h-16 w-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          />
        </div>
        <div className="text-sm font-medium text-brand-emerald bg-brand-emerald/10 px-3 py-1 rounded-full border border-brand-emerald/20 shadow-glass">
          Launch: 2026
        </div>
      </motion.nav>

      <motion.main 
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto grid-flow-dense"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Hero variants={itemVariants} />
        <Specs variants={itemVariants} />
        <Contact variants={itemVariants} />
        <Roadmap variants={itemVariants} />
        <Impact variants={itemVariants} />
      </motion.main>

      {/* UPDATED: Footer with a subtle mini-logo */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full max-w-6xl mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted pb-8"
      >
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-6 w-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          />
          <p>© 2026 GreenStack Fuels. All rights reserved.</p>
        </div>
        <p className="tracking-wide">नवीन ऊर्जेचा विश्वास | Maharashtra, India</p>
      </motion.footer>
    </div>
  );
}

