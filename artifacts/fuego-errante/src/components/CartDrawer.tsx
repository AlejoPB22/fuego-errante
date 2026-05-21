import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, total } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="bg-black/90 backdrop-blur-xl border-l border-secondary w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-6 border-b border-secondary/20">
          <SheetTitle className="font-serif text-2xl text-foreground">Tu Carrito</SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="text-center font-mono text-foreground/50 mt-12">
              El carrito está vacío.
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-secondary/10 pb-6" data-testid={`cart-item-${item.id}`}>
                <div className="w-20 h-20 bg-card border border-secondary/30 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="font-serif text-lg leading-tight text-foreground">{item.name}</div>
                    <div className="font-mono text-primary font-bold">${item.price}</div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-secondary/30">
                      <button 
                        className="px-2 py-1 text-foreground/70 hover:text-primary hover:bg-secondary/10"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-mono text-sm px-2 w-8 text-center">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 text-foreground/70 hover:text-primary hover:bg-secondary/10"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button 
                      className="text-foreground/40 hover:text-destructive transition-colors p-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-secondary/20 bg-background/50">
            <div className="flex justify-between font-mono text-lg mb-6 text-foreground">
              <span>SUBTOTAL</span>
              <span className="font-bold text-primary">${total}</span>
            </div>
            <button 
              className="w-full py-4 bg-primary text-primary-foreground font-mono font-bold tracking-widest hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(163,22,33,0.5)] transition-all"
              onClick={() => {
                alert("Redirigiendo a pago...");
                setIsCartOpen(false);
              }}
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
