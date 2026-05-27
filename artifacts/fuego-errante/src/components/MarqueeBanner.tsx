import { motion } from "framer-motion";

const items = [
  "FUEGO ERRANTE",
  "RUTA DE FUEGO TOUR 2026",
  "ROCK COWBOY LATINO",
  "CUMBIA RUGOSA",
  "SLIDE ELÉCTRICO",
  "CONCIENCIA SOCIAL",
  "BOGOTÁ · MEDELLÍN · CARTAGENA · AUSTIN · CDMX · MADRID",
  "EL ALMACÉN ERRANTE",
];

const repeated = [...items, ...items, ...items];

interface MarqueeBannerProps {
  direction?: "left" | "right";
  variant?: "primary" | "secondary";
}

export function MarqueeBanner({ direction = "left", variant = "primary" }: MarqueeBannerProps) {
  const isLeft = direction === "left";
  const isPrimary = variant === "primary";
  
  const textColor = isPrimary ? "#B0813D" : "#EAE0D5";
  const dotColor = isPrimary ? "#A31621" : "#B0813D";

  return (
    <div
      className="w-full overflow-hidden py-3 border-y relative"
      style={{ background: "#1A1A1A", borderColor: "#B0813D33" }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap w-max"
        animate={{ x: isLeft ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-[0.3em] uppercase select-none flex items-center gap-8"
            style={{ color: textColor }}
          >
            {item}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: dotColor }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
