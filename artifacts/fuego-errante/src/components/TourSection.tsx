import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TicketModal } from "./TicketModal";

const SHOWS = [
  { id: "s1", date: "12 JUN 2026", city: "Bogotá, CO", venue: "Teatro El Dorado", status: "ÚLTIMAS" },
  { id: "s2", date: "21 JUN 2026", city: "Medellín, CO", venue: "Arena Costura 15", status: "DISPONIBLE" },
  { id: "s3", date: "04 JUL 2026", city: "Cartagena, CO", venue: "Plaza de la Aduana", status: "DISPONIBLE" },
  { id: "s4", date: "18 JUL 2026", city: "Austin, TX", venue: "Stubb's Amphitheater", status: "ÚLTIMAS" },
  { id: "s5", date: "02 AGO 2026", city: "CDMX, MX", venue: "Foro Indie Rocks", status: "AGOTADO" },
  { id: "s6", date: "16 AGO 2026", city: "Madrid, ES", venue: "Sala Riviera", status: "DISPONIBLE" },
];

export function TourSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedShow, setSelectedShow] = useState<typeof SHOWS[0] | null>(null);

  useEffect(() => {
    const targetDate = new Date("2026-06-12T20:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tour" className="py-24 bg-card relative z-10 border-t border-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-center md:text-left">Próximas Paradas</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Countdown Left — sticky so it follows the scroll through all dates */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="font-mono text-secondary mb-6 text-center lg:text-left tracking-widest text-sm">
              PRÓXIMO SHOW EN BOGOTÁ, CO
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "DÍAS", value: timeLeft.days },
                { label: "HORAS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEG", value: timeLeft.seconds }
              ].map((unit, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-background border border-secondary/40 rounded-sm">
                  <div className="font-serif text-3xl md:text-5xl text-primary mb-2 drop-shadow-md">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="font-mono text-xs text-foreground/70">{unit.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tour Dates Right */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              {SHOWS.map((show, idx) => {
                const isAgotado = show.status === "AGOTADO";
                return (
                  <motion.div 
                    key={show.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row md:items-center justify-between p-6 border ${isAgotado ? 'bg-background/50 border-border/20 opacity-60' : 'bg-background hover:bg-background/80 hover:border-secondary border-secondary/30'} transition-all`}
                    data-testid={`tour-row-${show.id}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4 md:mb-0">
                      <div className="font-mono text-primary font-bold">{show.date}</div>
                      <div>
                        <div className="font-serif text-xl text-foreground">{show.city}</div>
                        <div className="font-mono text-sm text-foreground/60">{show.venue}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6">
                      <div className={`font-mono text-xs px-2 py-1 border ${
                        show.status === 'ÚLTIMAS' ? 'text-yellow-500 border-yellow-500/50' : 
                        show.status === 'AGOTADO' ? 'text-red-500 border-red-500/50' : 
                        'text-green-500 border-green-500/50'
                      }`}>
                        {show.status}
                      </div>
                      
                      <button
                        onClick={() => setSelectedShow(show)}
                        disabled={isAgotado}
                        className={`font-mono text-sm tracking-widest px-6 py-2 border ${
                          isAgotado 
                            ? 'border-border/30 text-border/50 cursor-not-allowed' 
                            : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_10px_rgba(163,22,33,0.5)] transition-all'
                        }`}
                        data-testid={`btn-tickets-${show.id}`}
                      >
                        {isAgotado ? 'AGOTADO' : 'COMPRAR TICKET'}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <TicketModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </section>
  );
}
