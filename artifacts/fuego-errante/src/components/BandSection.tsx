import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Guitar, Mic, Drum, Music } from "lucide-react";

const members = [
  {
    id: "01",
    name: "Mateo 'El Errante' Vidal",
    role: "Voz / Guitarra Líder",
    quote: "La música es el único camino donde los perdidos se encuentran.",
    image: "/images/mateo.png",
    icon: Guitar,
    origin: "Valledupar, Colombia",
    instrument: "Gibson ES-335 modificada con slide de cuello de botella",
    bio: "Mateo creció escuchando las gaitas de su abuelo en el Cesar antes de descubrir el rock a los 14 años en una cinta de casete mojada. Pasó una década entre Bogotá y Austin perfeccionando su técnica de slide, fusionando el groove del blues con la urgencia del vallenato. Líder espiritual de la banda, sus letras hablan de desarraigo, amor y resistencia política.",
    influences: ["Santana", "Totó La Momposina", "Stevie Ray Vaughan"],
  },
  {
    id: "02",
    name: "Lucía Bullaranga",
    role: "Voz / Tambora / Acordeón",
    quote: "El bullarengue me enseñó que el ritmo es resistencia.",
    image: "/images/lucia.png",
    icon: Mic,
    origin: "María La Baja, Bolívar",
    instrument: "Tambora ancestral y acordeón diatónico Victoria",
    bio: "Nieta de cantadoras de bullarengue del Caribe colombiano, Lucía aprendió a cantar antes de aprender a leer. Su voz combina la potencia del rock con la cadencia del Pacífico. Activista por los derechos de las comunidades afrocolombianas, sus versos son manifiestos disfrazados de canciones de amor.",
    influences: ["Petrona Martínez", "Janis Joplin", "Shakira (era Laundry Service)"],
  },
  {
    id: "03",
    name: "Don Salomón Cruz",
    role: "Bajo / Gaita",
    quote: "Con cada nota bajo de las montañas de Colombia al escenario.",
    image: "/images/salomon.png",
    icon: Music,
    origin: "Mompox, Bolívar",
    instrument: "Bajo Fender Precision '72 y gaita hembra artesanal",
    bio: "El mayor de la banda, Don Salomón es el ancla. Constructor de barcos de madera en otra vida, sus manos enormes construyen ahora los puentes bajos que conectan el rock con la cumbia. Toca la gaita con los ojos cerrados, como si estuviera rezando. Su bajo es siempre lo primero que se siente en el pecho.",
    influences: ["Flea (RHCP)", "Compay Segundo", "Jaco Pastorius"],
  },
  {
    id: "04",
    name: "Tomás 'Pólvora' Mejía",
    role: "Producción / Timbales / Alegría",
    quote: "El fuego que no quema es el que no arde de verdad.",
    image: "/images/tomas.png",
    icon: Drum,
    origin: "Medellín, Antioquia",
    instrument: "Kit DW Collector's Series + timbales cubanos",
    bio: "El más joven y el más explosivo. Tomás estudió producción electrónica en Medellín antes de darse cuenta de que el mejor sintetizador es la membrana de un tambor. En vivo lleva dos baterías simultáneas — una acústica y una electrónica — creando polirritmos que hacen colapsar el piso. Fuera del escenario diseña visuales y produce para artistas de toda América Latina.",
    influences: ["John Bonham", "Óscar D'León", "Skrillex (lo odia pero lo admira)"],
  },
];

export function BandSection() {
  const [selected, setSelected] = useState<typeof members[0] | null>(null);

  return (
    <section id="banda" className="py-24 bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[#B0813D] uppercase mb-3">Raíces e Historias</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">La Manada</h2>
          <p className="font-mono text-foreground/80 leading-relaxed">
            Cuatro almas, una sola carretera. Forjados entre el cuero del oeste y el sudor de la cumbia. Un pacto sonoro por la libertad y la conciencia social.
          </p>
          <p className="font-mono text-xs text-[#B0813D]/70 mt-4 tracking-widest">— HAZ CLICK EN CADA MIEMBRO PARA CONOCERLOS —</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(member)}
              className="group relative aspect-[3/4] overflow-hidden border border-[#B0813D]/40 bg-black cursor-pointer"
              data-testid={`band-member-${member.id}`}
            >
              {/* background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                style={{ backgroundImage: `url(${member.image})` }}
              />

              {/* hover red overlay */}
              <div className="absolute inset-0 bg-[#A31621]/0 group-hover:bg-[#A31621]/20 transition-all duration-500" />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* border glow on hover */}
              <div className="absolute inset-0 border-2 border-[#A31621]/0 group-hover:border-[#A31621]/70 transition-all duration-400 pointer-events-none" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-2xl text-[#B0813D]">{member.id}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] tracking-widest text-[#EAE0D5]/60 border border-[#EAE0D5]/30 px-2 py-1">
                    VER MÁS
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#EAE0D5] mb-1 group-hover:text-[#A31621] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="font-mono text-xs text-[#B0813D] mb-3 tracking-widest">{member.role}</div>

                  <div
                    className="font-mono text-sm text-[#EAE0D5]/90 italic leading-relaxed overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: 0,
                      opacity: 0,
                    }}
                    ref={(el) => {
                      if (!el) return;
                      const parent = el.closest(".group");
                      if (!parent) return;
                      const onEnter = () => { el.style.maxHeight = "80px"; el.style.opacity = "1"; };
                      const onLeave = () => { el.style.maxHeight = "0"; el.style.opacity = "0"; };
                      parent.addEventListener("mouseenter", onEnter);
                      parent.addEventListener("mouseleave", onLeave);
                    }}
                  >
                    "{member.quote}"
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Member Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

            <motion.div
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-[#B0813D]/40"
              style={{
                background: "linear-gradient(135deg, #1f0a0b 0%, #1A1A1A 50%, #0d0203 100%)",
                boxShadow: "0 0 80px rgba(163,22,33,0.25)",
              }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-[#B0813D]/40 text-[#EAE0D5]/60 hover:text-[#EAE0D5] hover:border-[#B0813D] transition-all"
                data-testid="band-modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image panel */}
                <div className="relative min-h-[320px] md:min-h-[500px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${selected.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent md:hidden" />

                  {/* Number badge */}
                  <div className="absolute top-6 left-6 font-serif text-6xl text-[#A31621]/30 select-none">
                    {selected.id}
                  </div>
                </div>

                {/* Info panel */}
                <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
                  <div>
                    <p className="font-mono text-xs tracking-[0.25em] text-[#B0813D] uppercase mb-2">
                      {selected.origin}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-[#EAE0D5] mb-2 leading-tight">
                      {selected.name}
                    </h2>
                    <p className="font-mono text-sm tracking-widest text-[#B0813D]">{selected.role}</p>
                  </div>

                  <blockquote className="border-l-2 border-[#A31621] pl-4">
                    <p className="font-mono text-base text-[#EAE0D5]/90 italic leading-relaxed">
                      "{selected.quote}"
                    </p>
                  </blockquote>

                  <p className="font-mono text-sm text-[#EAE0D5]/70 leading-relaxed">{selected.bio}</p>

                  <div className="space-y-3">
                    <div>
                      <p className="font-mono text-[10px] tracking-widest text-[#B0813D] uppercase mb-1">Instrumento</p>
                      <p className="font-mono text-sm text-[#EAE0D5]/80">{selected.instrument}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest text-[#B0813D] uppercase mb-2">Influencias</p>
                      <div className="flex flex-wrap gap-2">
                        {selected.influences.map((inf) => (
                          <span
                            key={inf}
                            className="font-mono text-[10px] tracking-widest text-[#EAE0D5]/60 border border-[#EAE0D5]/20 px-3 py-1"
                          >
                            {inf}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
