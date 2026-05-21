import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    year: "2019",
    title: "El primer chispazo",
    body: "Cuatro músicos se cruzan en un velorio en San Basilio de Palenque. Esa noche, entre tamboras y aguardiente, nace una promesa: hacer música que no pida permiso.",
  },
  {
    year: "2021",
    title: "El polvo del camino",
    body: "Grabamos en una finca abandonada del Cauca, con gallinas de coro y el río como reverb natural. El demo se vuelve casete pirata en plazas de mercado.",
  },
  {
    year: "2023",
    title: "Cabalgata Sonora",
    body: "Primer LP. Gira de 32 pueblos. Tocamos donde no hay luz, donde no hay escenario, donde la canción es la única forma de protesta posible.",
  },
  {
    year: "2024",
    title: "Tierra y Cuero",
    body: "Colaboración con artesanas de Mompox para diseñar la primera colección de vestuario de la banda. El escenario se convierte en un manifiesto visual.",
  },
  {
    year: "2025",
    title: "Al norte del río",
    body: "Primera gira internacional. Austin, Ciudad de México, Madrid. El slide de Mateo cruza el Atlántico. La cumbia llega a donde jamás imaginamos.",
  },
  {
    year: "2026",
    title: "Espuelas y Plomo",
    body: "Nuevo sencillo. Una carta de amor furiosa a la tierra herida y a quienes todavía la defienden con la garganta.",
  },
];

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex gap-8 pb-12 last:pb-0">
      {/* Left: year column */}
      <div className="flex flex-col items-center flex-shrink-0 w-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          className="w-4 h-4 rounded-full bg-[#A31621] flex-shrink-0 mt-1 relative z-10"
          style={{ boxShadow: "0 0 12px rgba(163,22,33,0.7)" }}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 + 0.2, ease: "easeOut" }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: "linear-gradient(to bottom, #A31621, #A3162150)" }}
          />
        )}
      </div>

      {/* Right: content */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.12 + 0.1 }}
        className="flex-1 pb-2"
      >
        <p className="font-serif text-2xl text-[#A31621] mb-2 leading-none">{item.year}</p>
        <h3 className="font-serif text-xl text-[#EAE0D5] mb-3">{item.title}</h3>
        <p className="font-mono text-sm text-[#EAE0D5]/65 leading-relaxed max-w-xl">
          {item.body}
        </p>
      </motion.div>
    </div>
  );
}

export function RaicesSection() {
  return (
    <section id="raices" className="py-24 bg-card relative z-10 border-t border-[#B0813D]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: header — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="font-mono text-xs tracking-[0.3em] text-[#B0813D] uppercase mb-6">
              — Crónica —
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#EAE0D5] leading-tight mb-6">
              Raíces{" "}
              <span className="text-[#A31621]">e Historias</span>
            </h2>
            <p className="font-mono text-sm text-[#EAE0D5]/60 italic leading-relaxed max-w-sm">
              Una cronología incompleta de cómo se enciende un fuego que no se apaga.
            </p>

            {/* Decorative border line */}
            <div
              className="mt-10 w-24 h-px"
              style={{ background: "linear-gradient(to right, #A31621, transparent)" }}
            />
          </motion.div>

          {/* Right: timeline */}
          <div className="relative mt-2">
            {timeline.map((item, idx) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={idx}
                isLast={idx === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
