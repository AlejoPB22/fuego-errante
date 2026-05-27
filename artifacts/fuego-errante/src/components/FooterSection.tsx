import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer id="rebelión" className="bg-background pt-24 pb-12 border-t border-secondary border-b-[8px] border-b-primary relative">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-secondary tracking-[0.3em] text-sm mb-4">
            La Rebelión
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-6">
            Únete a la Rebelión
          </h2>
          <p className="font-mono text-foreground/80 mb-12 max-w-xl mx-auto">
            Recibe las próximas paradas, lanzamientos y manifiestos sonoros directo desde la carretera.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 justify-center mb-24"
            onSubmit={(e) => { e.preventDefault(); alert("Pacto sellado."); }}
          >
            <input
              type="email"
              placeholder="tu@correo.com"
              required
              className="bg-card border border-secondary/50 text-foreground font-mono px-6 py-4 focus:outline-none focus:border-primary w-full sm:w-96"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-mono font-bold tracking-widest px-8 py-4 hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(163,22,33,0.6)] transition-all"
            >
              SELLAR PACTO
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-8 font-mono text-sm tracking-widest text-foreground/60 mb-16">
            {["INSTAGRAM", "SPOTIFY", "YOUTUBE", "TIKTOK", "BANDCAMP"].map(social => (
              <a key={social} href="#" className="hover:text-secondary transition-colors">
                {social}
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-foreground/40 pt-8 border-t border-secondary/20">
            <div>© 2026 FUEGO ERRANTE · HECHO CON POLVO Y FUEGO</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">BRAND MANUAL</a>
              <a href="#" className="hover:text-foreground">PRENSA</a>
              <a href="#" className="hover:text-foreground">PRIVACIDAD</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
