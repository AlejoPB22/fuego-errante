import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div
          className="font-serif text-2xl font-bold tracking-wider cursor-pointer text-foreground hover:text-primary transition-colors"
          onClick={() => scrollTo("hero")}
          data-testid="nav-logo"
        >
          FUEGO ERRANTE
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest text-foreground">
          {["SINGLE", "BANDA", "ALMACÉN", "TOUR", "PACTO"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-primary hover:border-b-primary transition-colors border-b border-transparent"
              data-testid={`nav-link-${item.toLowerCase()}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 font-mono text-sm tracking-widest hover:text-primary transition-colors group"
          data-testid="nav-cart-button"
        >
          <span>CARRITO</span>
          {itemCount > 0 && (
            <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(163,22,33,0.8)] group-hover:scale-110 transition-transform">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
