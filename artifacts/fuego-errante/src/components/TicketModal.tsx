import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";

type Show = {
  id: string;
  date: string;
  city: string;
  venue: string;
  status: string;
};

type Zone = {
  id: string;
  name: string;
  price: number;
};

const ZONES: Zone[] = [
  { id: "z1", name: "PIT", price: 95 },
  { id: "z2", name: "General", price: 60 },
  { id: "z3", name: "Balcón", price: 40 },
];

export function TicketModal({ show, onClose }: { show: Show | null, onClose: () => void }) {
  const [selectedZone, setSelectedZone] = useState<Zone>(ZONES[1]);
  const [quantity, setQuantity] = useState(2);

  // Reset state when show changes
  useEffect(() => {
    if (show) {
      setSelectedZone(ZONES[1]);
      setQuantity(2);
    }
  }, [show]);

  if (!show) return null;

  return (
    <Dialog open={!!show} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-black/90 backdrop-blur-xl border border-secondary p-0 gap-0 sm:max-w-md overflow-hidden">
        <DialogHeader className="p-6 border-b border-secondary/20 bg-background/50">
          <DialogTitle className="font-serif text-2xl text-foreground text-center">
            {show.city}
          </DialogTitle>
          <div className="font-mono text-center text-sm text-foreground/70">
            {show.venue} • {show.date}
          </div>
        </DialogHeader>

        <div className="p-6 flex flex-col gap-8">
          <div>
            <div className="font-mono text-xs tracking-widest text-secondary mb-3">SELECCIONA ZONA</div>
            <div className="grid grid-cols-3 gap-2">
              {ZONES.map(zone => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`py-3 flex flex-col items-center border font-mono transition-all ${
                    selectedZone.id === zone.id 
                      ? 'bg-primary border-primary text-primary-foreground shadow-[0_0_10px_rgba(163,22,33,0.5)]' 
                      : 'bg-card border-secondary/30 text-foreground hover:border-secondary'
                  }`}
                >
                  <span className="text-sm">{zone.name}</span>
                  <span className="text-xs opacity-80">${zone.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs tracking-widest text-secondary mb-3">CANTIDAD</div>
            <div className="flex items-center justify-between border border-secondary p-2 bg-card">
              <button 
                className="p-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={20} />
              </button>
              <span className="font-serif text-3xl">{quantity}</span>
              <button 
                className="p-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-secondary/20">
            <div className="flex justify-between items-end mb-6">
              <span className="font-mono text-foreground/60">TOTAL</span>
              <span className="font-serif text-4xl text-primary drop-shadow-md">
                ${selectedZone.price * quantity}
              </span>
            </div>
            
            <button 
              className="w-full py-4 bg-primary text-primary-foreground font-mono font-bold tracking-widest hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(163,22,33,0.6)] transition-all"
              onClick={() => {
                alert(`Comprados ${quantity} tickets para ${show.city} en zona ${selectedZone.name}`);
                onClose();
              }}
            >
              CONFIRMAR COMPRA
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
