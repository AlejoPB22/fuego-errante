import { motion } from "framer-motion";

const members = [
  {
    id: "01",
    name: "Mateo 'El Errante' Vidal",
    role: "Voz / Guitarra Líder",
    quote: "La música es el único camino donde los perdidos se encuentran.",
    image: "/images/mateo.png"
  },
  {
    id: "02",
    name: "Lucía Bullaranga",
    role: "Voz / Tambora / Acordeón",
    quote: "El bullarengue me enseñó que el ritmo es resistencia.",
    image: "/images/lucia.png"
  },
  {
    id: "03",
    name: "Don Salomón Cruz",
    role: "Bajo / Gaita",
    quote: "Con cada nota bajo de las montañas de Colombia al escenario.",
    image: "/images/salomon.png"
  },
  {
    id: "04",
    name: "Tomás 'Pólvora' Mejía",
    role: "Producción / Timbales / Alegría",
    quote: "El fuego que no quema es el que no arde de verdad.",
    image: "/images/tomas.png"
  }
];

export function BandSection() {
  return (
    <section id="banda" className="py-24 bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">La Manada</h2>
          <p className="font-mono text-foreground/80 leading-relaxed">
            Cuatro almas, una sola carretera. Forjados entre el cuero del oeste y el sudor de la cumbia. Un pacto sonoro por la libertad y la conciencia social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden border border-secondary/50 bg-black"
              data-testid={`band-member-${member.id}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-50"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="font-serif text-2xl text-secondary">{member.id}</div>
                
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <div className="font-mono text-xs text-secondary mb-4 tracking-widest">{member.role}</div>
                  
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 font-mono text-sm text-foreground/90 italic overflow-hidden drop-shadow-[0_0_8px_rgba(163,22,33,0.8)]">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
