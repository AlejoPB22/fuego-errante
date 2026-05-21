import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "p1",
    name: "Chaqueta de Cuero Errante",
    price: 489,
    description: "Cuero negro premium con flecos artesanos colombianos bordados a mano por artesanas.",
    image: "/images/jacket.png"
  },
  {
    id: "p2",
    name: "Sombrero Texano 'Fuego'",
    price: 139,
    description: "Sombrero vaquero envejecido con banda de fuego rojo bordada a hilo.",
    image: "/images/hat.png"
  },
  {
    id: "p3",
    name: "Botas Rockstar-Cowboy",
    price: 329,
    description: "Botas de cuero con punteras de acero y patrones colombianos históricos repujados.",
    image: "/images/boots.png"
  },
  {
    id: "p4",
    name: "Guitarra 'Bullerengue' Custom",
    price: 1899,
    description: "Guitarra eléctrica rústica, acabado Dorado Bronce, edición limitada firmada.",
    image: "/images/guitar.png"
  },
  {
    id: "p5",
    name: "Souvenirs Pack",
    price: 69,
    description: "Pañuelo vintage, púas de guitarra personalizadas y libreta de letras clásica.",
    image: "/images/souvenirs.png"
  }
];

export function MerchSection() {
  const { addToCart } = useCart();

  return (
    <section id="almacén" className="py-24 bg-background relative z-10 border-t border-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Mercancía</h2>
          <p className="font-mono text-foreground/80 leading-relaxed">
            Cada pieza nace en el Tallero Tierra, hilla, cuero y un poco de polvora colombiana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-secondary/30 flex flex-col overflow-hidden group"
              data-testid={`merch-product-${product.id}`}
            >
              <div className="aspect-square bg-black relative overflow-hidden border-b border-secondary/20">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl text-foreground pr-4 leading-tight">{product.name}</h3>
                  <div className="font-mono text-secondary font-bold text-xl">${product.price}</div>
                </div>
                <p className="font-mono text-sm text-foreground/70 mb-8 flex-grow">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-transparent border border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-mono font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(163,22,33,0.5)]"
                  data-testid={`btn-add-cart-${product.id}`}
                >
                  AÑADIR AL CARRITO
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
