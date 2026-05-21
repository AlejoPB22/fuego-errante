import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "p1",
    name: "Chaqueta de Cuero Errante",
    price: 489,
    badge: "EDICIÓN ARTESANAL",
    description: "Cuero negro premium con flecos artesanos colombianos bordados a mano por artesanas.",
    longDescription: "Confeccionada en cuero negro curtido al vegetal, esta chaqueta es el resultado de una colaboración entre la banda y bordadoras del Caribe colombiano. Los flecos en la espalda y mangas están elaborados con técnicas ancestrales de la región de Mompox. Cada pieza es única — las flores rojas bordadas varían ligeramente entre unidades, haciendo de cada chaqueta una obra de arte irrepetible. Forro interior en tela de algodón con la letra impresa de 'El primer chispazo'.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "/images/jacket.png",
    care: "Cuero natural · Limpieza profesional recomendada · Evitar humedad directa",
  },
  {
    id: "p2",
    name: "Sombrero Texano 'Fuego'",
    price: 139,
    badge: "COLECCIÓN PRINCIPAL",
    description: "Sombrero vaquero envejecido con banda de fuego rojo bordada a hilo.",
    longDescription: "El sombrero que Mateo usa en cada concierto, ahora disponible en edición para fanáticos. Fieltro de lana prensada 4X con acabado envejecido a mano. La banda de fuego bordada a hilo de seda rojo e hilo dorado es trabajo artesanal de Bogotá. El ala ancha y la copa alta lo convierten en el accesorio definitivo para quien quiere llevar el horizonte puesto.",
    sizes: ["S/M", "M/L", "L/XL"],
    image: "/images/hat.png",
    care: "Fieltro de lana · No mojar · Guardar en caja · Reshape en vapor",
  },
  {
    id: "p3",
    name: "Botas Rockstar-Cowboy",
    price: 329,
    badge: "EDICIÓN LIMITADA",
    description: "Botas de cuero con punteras de acero y patrones colombianos históricos repujados.",
    longDescription: "El cruce perfecto entre el cowboy texano y el jinete colombiano. Cuero vacuno plena flor de 3mm, punteras de acero inoxidable y tacón de madera maciza. El repujado lateral reproduce motivos precolombinos de la cultura Zenú adaptados por artesanos de Córdoba. Suela de goma antideslizante. Ideales para el escenario y para la carretera.",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    image: "/images/boots.png",
    care: "Cuero plena flor · Nutrir cada 3 meses · Suela de goma natural",
  },
  {
    id: "p4",
    name: "Guitarra 'Bullerengue' Custom",
    price: 1899,
    badge: "FIRMADA · NUMERADA",
    description: "Guitarra eléctrica rústica, acabado Dorado Bronce, edición limitada firmada.",
    longDescription: "Una de 50 unidades en el mundo. Cuerpo de caoba maciza con tapa de arce flameado y acabado nitro en Dorado Bronce envejecido. Pastillas humbucker custom bobinadas a mano. El mástil lleva incrustaciones de nácar con forma de mapas de Colombia. Incluye estuche rígido personalizado con el logo de la banda y certificado de autenticidad firmado por los cuatro miembros.",
    sizes: ["Única"],
    image: "/images/guitar.png",
    care: "Madera maciza · Humedad 45-55% · Incluye estuche rígido",
  },
  {
    id: "p5",
    name: "Souvenirs Pack",
    price: 69,
    badge: "PACK COMPLETO",
    description: "Pañuelo vintage, púas de guitarra personalizadas y libreta de letras clásica.",
    longDescription: "El pack del verdadero errante. Incluye: pañuelo de algodón 100% con el horizonte de Fuego Errante estampado en serigrafía (60x60cm), set de 6 púas de celuloide con grabado del logo en Dorado Bronce, y libreta cosida a mano con papel de 120g/m² donde están impresas las letras de todo el primer álbum. Presentado en caja de madera con quemado artesanal.",
    sizes: ["Única"],
    image: "/images/souvenirs.png",
    care: "Pañuelo: lavado a mano · Libreta: papel libre de ácidos",
  },
];

export function MerchSection() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState<typeof products[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      setSelectedSize(selected.sizes[0]);
    } else {
      document.body.style.overflow = "";
      setSelectedSize("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setSelected(null);
  };

  return (
    <section id="almacén" className="py-24 bg-background relative z-10 border-t border-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[#B0813D] uppercase mb-3">El Almacén Errante</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Mercancía</h2>
          <p className="font-mono text-foreground/80 leading-relaxed">
            Cada pieza nace en el Tallero Tierra, hilla, cuero y un poco de polvora colombiana.
          </p>
          <p className="font-mono text-xs text-[#B0813D]/70 mt-4 tracking-widest">— HAZ CLICK EN CADA PRODUCTO PARA VER MÁS —</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(product)}
              className="bg-card border border-[#B0813D]/30 flex flex-col overflow-hidden group cursor-pointer hover:border-[#B0813D]/60 transition-all duration-300"
              style={{ boxShadow: "0 0 0 rgba(163,22,33,0)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(163,22,33,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(163,22,33,0)"; }}
              data-testid={`merch-product-${product.id}`}
            >
              <div className="aspect-square bg-black relative overflow-hidden border-b border-[#B0813D]/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] tracking-widest text-[#EAE0D5] bg-[#A31621] px-2 py-1">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#A31621]/0 group-hover:bg-[#A31621]/10 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[10px] tracking-widest text-[#EAE0D5]/80 border border-[#EAE0D5]/40 bg-black/60 px-2 py-1">
                    VER DETALLE
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl text-foreground pr-4 leading-tight group-hover:text-[#A31621] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="font-mono text-[#B0813D] font-bold text-xl flex-shrink-0">${product.price}</div>
                </div>
                <p className="font-mono text-sm text-foreground/70 mb-6 flex-grow line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                  className="w-full py-3 bg-transparent border border-[#A31621] text-foreground hover:bg-[#A31621] hover:text-[#EAE0D5] font-mono font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(163,22,33,0.5)]"
                  data-testid={`btn-add-cart-${product.id}`}
                >
                  AÑADIR AL CARRITO
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

            <motion.div
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-[#B0813D]/40"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #110507 100%)",
                boxShadow: "0 0 80px rgba(163,22,33,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-[#B0813D]/40 text-[#EAE0D5]/60 hover:text-[#EAE0D5] hover:border-[#B0813D] transition-all"
                data-testid="merch-modal-close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative min-h-[300px] md:min-h-[480px] border-b md:border-b-0 md:border-r border-[#B0813D]/20">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/60 hidden md:block" />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] tracking-widest text-[#EAE0D5] bg-[#A31621] px-2 py-1">
                      {selected.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 md:p-10 flex flex-col gap-5">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-[#EAE0D5] mb-2 leading-tight pr-8">{selected.name}</h2>
                    <div className="flex items-center gap-2 mb-3">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-[#B0813D] text-[#B0813D]" />)}
                      <span className="font-mono text-xs text-[#EAE0D5]/50 ml-1">(Artículo certificado)</span>
                    </div>
                    <p className="font-serif text-3xl text-[#B0813D] font-bold">${selected.price} <span className="font-mono text-sm text-[#EAE0D5]/40 font-normal">USD</span></p>
                  </div>

                  <p className="font-mono text-sm text-[#EAE0D5]/70 leading-relaxed">{selected.longDescription}</p>

                  {/* Size selector */}
                  {selected.sizes.length > 1 && (
                    <div>
                      <p className="font-mono text-[10px] tracking-widest text-[#B0813D] uppercase mb-2">
                        Talla — <span className="text-[#EAE0D5]/60">{selectedSize}</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selected.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className="font-mono text-xs px-3 py-2 border transition-all duration-200"
                            style={{
                              borderColor: selectedSize === size ? "#A31621" : "#B0813D40",
                              background: selectedSize === size ? "#A31621" : "transparent",
                              color: selectedSize === size ? "#EAE0D5" : "#EAE0D5AA",
                            }}
                            data-testid={`size-btn-${size}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-[#B0813D]/20 pt-4">
                    <p className="font-mono text-[10px] tracking-widest text-[#B0813D]/60 uppercase mb-1">Cuidado</p>
                    <p className="font-mono text-xs text-[#EAE0D5]/50">{selected.care}</p>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto pt-2">
                    <button
                      onClick={() => handleAddToCart(selected)}
                      className="w-full py-4 bg-[#A31621] text-[#EAE0D5] font-mono font-bold tracking-widest hover:bg-[#c01a28] hover:shadow-[0_0_20px_rgba(163,22,33,0.6)] transition-all duration-300 flex items-center justify-center gap-3"
                      data-testid="merch-modal-add-cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      AÑADIR AL CARRITO
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="w-full py-3 border border-[#B0813D]/40 text-[#EAE0D5]/60 font-mono text-sm tracking-widest hover:border-[#B0813D] hover:text-[#EAE0D5] transition-all duration-200"
                    >
                      SEGUIR EXPLORANDO
                    </button>
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
