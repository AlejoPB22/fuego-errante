import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/images/hero-horizon_1779347335996.jpeg")` }}
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Red horizon glow at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#A31621]/30 to-transparent pointer-events-none" />

      <div className="hero-particles" />

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
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={() => scrollTo("single")}
            className="flex items-center gap-3 px-8 py-4 bg-[#A31621] text-[#EAE0D5] font-mono font-bold tracking-widest hover:bg-[#c01a28] hover:shadow-[0_0_28px_rgba(163,22,33,0.8)] transition-all duration-300"
            data-testid="hero-single-btn"
          >
            <Play className="w-4 h-4 fill-current" />
            ESCUCHAR EL SINGLE
          </button>
          <button 
            onClick={() => scrollTo("almacén")}
            className="px-8 py-4 border-2 border-[#EAE0D5] text-[#EAE0D5] font-mono font-bold tracking-widest bg-black/30 hover:bg-[#EAE0D5]/10 transition-all duration-300"
            data-testid="hero-merch-btn"
          >
            EXPLORAR MERCH
          </button>
          <button 
            onClick={() => scrollTo("tour")}
            className="px-8 py-4 border-2 border-[#A31621] text-[#EAE0D5] font-mono font-bold tracking-widest bg-black/30 hover:bg-[#A31621]/20 hover:shadow-[0_0_20px_rgba(163,22,33,0.5)] transition-all duration-300"
            data-testid="hero-tickets-btn"
          >
            COMPRAR TICKETS
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo("banda")}
      >
        <ChevronDown className="w-8 h-8 text-[#B0813D] opacity-80 hover:opacity-100 hover:scale-110 transition-all" />
      </motion.div>

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
