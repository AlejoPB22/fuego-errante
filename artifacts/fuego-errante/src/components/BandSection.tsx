import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Guitar, Mic, Drum, Music, ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  {
    id: "01",
    name: "Mateo 'El Errante' Vidal",
    role: "Voz / Guitarra Líder",
    quote: "La música es el único camino donde los perdidos se encuentran.",
    image: "/images/team/mateo.jpeg",
    images: [
      "/images/team/mateo.jpeg",
      "/images/team/mateo 2.jpeg",
      "/images/team/mateo 3.jpeg",
      "/images/team/mateo 4.jpeg"
    ],
    icon: Guitar,
    origin: "Valledupar, Colombia",
    instrument: "Gibson ES-335 modificada con slide de cuello de botella y micrófono Shure SM58",
    bio: "Mateo creció escuchando las gaitas de su abuelo en el Cesar antes de descubrir el rock a los 14 años en una cinta de casete mojada. Pasó una década entre Bogotá y Austin perfeccionando su canto y su técnica de slide, fusionando el groove del blues con la urgencia del vallenato. Líder espiritual de la banda, sus letras hablan de desarraigo, amor y resistencia política.",
    influences: ["Santana", "Totó La Momposina", "Stevie Ray Vaughan"],
  },
  {
    id: "02",
    name: "Lucía Bullaranga",
    role: "Voz / Guitarra Electrica",
    quote: "El bullarengue me enseñó que el ritmo es resistencia.",
    image: "/images/team/lucia.jpeg",
    images: [
      "/images/team/lucia.jpeg",
      "/images/team/lucia 2.jpeg",
      "/images/team/lucia 3.jpeg",
      "/images/team/lucia 4.jpeg",
      "/images/team/lucia 5.jpeg"
    ],
    icon: Mic,
    origin: "Barranquilla, Atlántico",
    instrument: "Guitarra eléctrica Fender Stratocaster '78 y micrófono Shure Super 55",
    bio: "Nieta de cantadoras de bullarengue del Caribe colombiano, Lucía aprendió a cantar y a tocar la guitarra eléctrica antes de aprender a leer. Su voz combina la potencia del rock con la cadencia del Pacífico. Activista por los derechos de las comunidades afrocolombianas, sus versos son manifiestos disfrazados de canciones de amor.",
    influences: ["Petrona Martínez", "Janis Joplin", "Shakira (era Laundry Service)"],
  },
  {
    id: "03",
    name: "Don Salomón Cruz",
    role: "Bajo / Gaita",
    quote: "Con cada nota bajo de las montañas de Colombia al escenario.",
    image: "/images/team/salomon.jpeg",
    images: [
      "/images/team/salomon.jpeg",
      "/images/team/salomon 2.jpeg",
      "/images/team/salomon 3.jpeg",
      "/images/team/salomon 4.jpeg",
      "/images/team/salomon 5.jpeg"
    ],
    icon: Music,
    origin: "Mompox, Bolívar",
    instrument: "Bajo Fender Precision '72 y gaita hembra artesanal",
    bio: "El mayor de la banda, Don Salomón es el ancla. Constructor de barcos de madera en otra vida, sus manos enormes construyen ahora los puentes bajos que conectan el rock con la cumbia. Toca la gaita con los ojos cerrados, como si estuviera rezando. Su bajo es siempre lo primero que se siente en el pecho.",
    influences: ["Flea (RHCP)", "Compay Segundo", "Jaco Pastorius"],
  },
  {
    id: "04",
    name: "Tomás 'Pólvora' Mejía",
    role: "Batería / Producción / Percusión",
    quote: "El fuego que no quema es el que no arde de verdad.",
    image: "/images/team/tomas.jpeg",
    images: [
      "/images/team/tomas.jpeg",
      "/images/team/tomas 2.jpeg",
      "/images/team/tomas 3.jpeg",
      "/images/team/tomas 4.jpeg",
      "/images/team/tomas 5.jpeg"
    ],
    icon: Drum,
    origin: "Medellín, Antioquia",
    instrument: "Batería (Kit DW Collector's Series), timbales cubanos y sampler Roland SP-404",
    bio: "El más joven y el más explosivo. Tomás estudió producción electrónica y batería en Medellín antes de darse cuenta de que el mejor sintetizador es la membrana de un tambor. En vivo lleva dos baterías simultáneas — una acústica y una electrónica — creando polirritmos que hacen colapsar el piso. Fuera del escenario diseña visuales y produce para artistas de toda América Latina.",
    influences: ["John Bonham", "Óscar D'León", "Skrillex (lo odia pero lo admira)"],
  },
];


import { createPortal } from "react-dom";

// ... existing code ...
export function BandSection() {
  const [selected, setSelected] = useState<typeof members[0] | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      setActiveImageIdx(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

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
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                style={{ backgroundImage: `url("${member.image}")` }}
              />
              <div className="absolute inset-0 bg-[#A31621]/0 group-hover:bg-[#A31621]/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
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
                  <p className="font-mono text-sm text-[#EAE0D5]/90 italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
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
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-[#B0813D]/40 text-[#EAE0D5]/60 hover:text-[#EAE0D5] hover:border-[#B0813D] transition-all"
                  data-testid="band-modal-close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative min-h-[320px] md:min-h-[500px] flex flex-col justify-between overflow-hidden group/gallery pb-16 md:pb-20">
                    {/* Gallery Active Image */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIdx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${selected.images && selected.images[activeImageIdx] ? selected.images[activeImageIdx] : selected.image}")` }}
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/80 hidden md:block pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 to-transparent md:hidden pointer-events-none" />

                    {/* Watermark ID */}
                    <div className="absolute top-6 left-6 font-serif text-6xl text-[#A31621]/30 select-none z-10">
                      {selected.id}
                    </div>

                    {/* Navigation Arrows & Dots if multiple images */}
                    {selected.images && selected.images.length > 1 && (
                      <>
                        {/* Left Arrow */}
                        <button
                          onClick={() => setActiveImageIdx((prev) => (prev === 0 ? selected.images.length - 1 : prev - 1))}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-[#B0813D]/40 text-[#EAE0D5] hover:bg-[#A31621] hover:border-[#EAE0D5] hover:text-white hover:scale-105 transition-all duration-200"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Right Arrow */}
                        <button
                          onClick={() => setActiveImageIdx((prev) => (prev === selected.images.length - 1 ? 0 : prev + 1))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-[#B0813D]/40 text-[#EAE0D5] hover:bg-[#A31621] hover:border-[#EAE0D5] hover:text-white hover:scale-105 transition-all duration-200"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Thumbnail indicators */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 px-4">
                          {selected.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIdx(idx)}
                              className={`w-12 h-12 border-2 transition-all duration-300 overflow-hidden bg-black ${
                                activeImageIdx === idx
                                  ? "border-[#A31621] scale-110 shadow-[0_0_12px_rgba(163,22,33,0.9)]"
                                  : "border-[#B0813D]/40 opacity-70 hover:opacity-100"
                              }`}
                            >
                              <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
                    <div>
                      <p className="font-mono text-xs tracking-[0.25em] text-[#B0813D] uppercase mb-2">{selected.origin}</p>
                      <h2 className="font-serif text-2xl md:text-3xl text-[#EAE0D5] mb-2 leading-tight">{selected.name}</h2>
                      <p className="font-mono text-sm tracking-widest text-[#B0813D]">{selected.role}</p>
                    </div>
                    <blockquote className="border-l-2 border-[#A31621] pl-4">
                      <p className="font-mono text-base text-[#EAE0D5]/90 italic leading-relaxed">"{selected.quote}"</p>
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
                            <span key={inf} className="font-mono text-[10px] tracking-widest text-[#EAE0D5]/60 border border-[#EAE0D5]/20 px-3 py-1">
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
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
