import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ExternalLink } from "lucide-react";

const TOTAL_DURATION = 217;
const PREVIEW_END = 30;

const WAVEFORM_BARS = Array.from({ length: 80 }, (_, i) => {
  const center = 40;
  const dist = Math.abs(i - center) / center;
  const base = 0.3 + Math.random() * 0.7 * (1 - dist * 0.5);
  return Math.max(0.15, Math.min(1, base));
});

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function SingleSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elapsed = progress * TOTAL_DURATION;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          const next = p + 1 / TOTAL_DURATION;
          if (next >= PREVIEW_END / TOTAL_DURATION) {
            setIsPlaying(false);
            return PREVIEW_END / TOTAL_DURATION;
          }
          return next;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (progress >= PREVIEW_END / TOTAL_DURATION) {
      setProgress(0);
    }
    setIsPlaying((p) => !p);
  };

  const handleWaveformClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const clamped = Math.min(ratio, PREVIEW_END / TOTAL_DURATION);
    setProgress(clamped);
  };

  const filledBars = Math.floor(progress * 80);

  return (
    <section
      id="single"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "repeating-linear-gradient(135deg, #1a1a1a 0px, #1a1a1a 18px, #1f1f1f 18px, #1f1f1f 36px)",
      }}
    >
      <div className="absolute inset-0 bg-[#1A1A1A]/60 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-[#B0813D] uppercase mb-3">
            El Sonido
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#EAE0D5] mb-10 leading-tight">
            Single Oficial
          </h2>

          {/* Player card */}
          <div
            className="rounded-sm p-6 md:p-8 border border-[#B0813D]/30"
            style={{
              background:
                "linear-gradient(135deg, #2a0a0c 0%, #1a0508 50%, #0d0203 100%)",
              boxShadow: "0 0 60px rgba(163,22,33,0.15)",
            }}
          >
            {/* Track info */}
            <p className="font-mono text-xs tracking-[0.2em] text-[#B0813D] mb-2">
              // TRACK 001 · SOY MAJO
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#EAE0D5] mb-4">
              Fuego Errante
            </h3>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["LATIN ROCK", "SLIDE GUITAR", "RUGGED GROOVE", "INTENSO"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-widest text-[#EAE0D5]/60 border border-[#EAE0D5]/20 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Waveform */}
            <div
              className="relative flex items-end gap-[2px] h-20 mb-2 cursor-pointer select-none"
              onClick={handleWaveformClick}
              data-testid="waveform-bar"
            >
              {WAVEFORM_BARS.map((h, i) => {
                const isFilled = i <= filledBars;
                const isActive = i === filledBars && isPlaying;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-[1px] transition-colors duration-100"
                    style={{
                      height: `${h * 100}%`,
                      background: isFilled
                        ? isActive
                          ? "#A31621"
                          : "#A31621"
                        : "#3a1a1a",
                      opacity: isFilled ? 1 : 0.5,
                    }}
                  />
                );
              })}
            </div>

            {/* Time */}
            <div className="flex justify-between font-mono text-xs text-[#EAE0D5]/50 mb-8">
              <span>{formatTime(elapsed)}</span>
              <span>{formatTime(TOTAL_DURATION)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
              <button
                onClick={handlePlayPause}
                className="w-14 h-14 rounded-full bg-[#A31621] flex items-center justify-center hover:bg-[#c01a28] hover:shadow-[0_0_20px_rgba(163,22,33,0.6)] transition-all duration-300 flex-shrink-0"
                data-testid="single-play-btn"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-[#EAE0D5] fill-current" />
                ) : (
                  <Play className="w-5 h-5 text-[#EAE0D5] fill-current ml-0.5" />
                )}
              </button>

              <div className="flex flex-col">
                <span className="font-mono text-[10px] tracking-widest text-[#B0813D] uppercase mb-0.5">
                  Reproducción Local
                </span>
                <span className="font-mono text-xs text-[#EAE0D5]/50">
                  Vista previa · maestra completa en streaming
                </span>
              </div>

              <a
                href="https://www.mureka.ai/song-detail/Gh8XY1xmjVt5iavRub8geA?is_from_share=1&song_title=fuego-errante&singer=soy-majo"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 font-mono text-xs tracking-widest font-bold text-[#EAE0D5] bg-[#A31621] px-5 py-3 hover:bg-[#c01a28] hover:shadow-[0_0_16px_rgba(163,22,33,0.5)] transition-all duration-300 whitespace-nowrap"
                data-testid="single-stream-btn"
              >
                ESCUCHAR EN MUREKA
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
