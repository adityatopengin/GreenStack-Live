/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",      // Deep Industrial Charcoal for the background
          card: "#1E293B",      // Lighter Slate for the Bento tiles
          emerald: "#10B981",   // Your signature GreenStack energy color
          glow: "#34D399",      // A brighter green for hovering over buttons
          text: "#F8FAFC",      // Crisp white for maximum readability
          muted: "#94A3B8",     // Soft grey for secondary text and specs
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.15)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.15), transparent 50%)',
      }
    },
  },
  plugins: [],
};

