import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="hero-particles" />
      
      {/* Abstract Background SVGs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,100 100,100 100,80 80,90 60,75 40,85 20,70 0,90" fill="#000" />
          <circle cx="50" cy="100" r="40" fill="url(#sun-glow)" opacity="0.5" />
          <defs>
            <radialGradient id="sun-glow" cx="50%" cy="100%" r="50%">
              <stop offset="0%" stopColor="#A31621" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight text-foreground relative mb-6">
            <span className="relative z-10">FUEGO ERRANTE</span>
            <span className="absolute inset-0 text-primary blur-[2px] opacity-70 translate-x-[4px] translate-y-[4px] z-0">FUEGO ERRANTE</span>
          </h1>
        </motion.div>

        <motion.p 
          className="font-mono text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Rock cowboy latino. Slide eléctrico, cumbia rugosa y conciencia social. Cuatro errantes cabalgan el polvo de América.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={() => scrollTo("almacén")}
            className="px-8 py-4 bg-primary text-primary-foreground font-mono font-bold tracking-widest hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(163,22,33,0.6)] transition-all duration-300"
            data-testid="hero-merch-btn"
          >
            EXPLORAR MERCH
          </button>
          <button 
            onClick={() => scrollTo("tour")}
            className="px-8 py-4 border border-primary text-foreground font-mono font-bold tracking-widest hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(163,22,33,0.4)] hover:border-primary transition-all duration-300 relative overflow-hidden group"
            data-testid="hero-tickets-btn"
          >
            <span className="relative z-10">COMPRAR TICKETS</span>
          </button>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollTo("banda")}
        >
          <ChevronDown className="w-8 h-8 text-secondary opacity-70" />
        </motion.div>
      </div>

      {/* Adding actual particles to DOM for the CSS animation */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="particle" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s` 
          }} 
        />
      ))}
    </section>
  );
}
