import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, Math.round(((t - start) / duration) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* animated grid */}
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-foreground/40"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-sm md:text-base font-bold tracking-[0.4em] text-foreground uppercase"
            >
              Tech Wave
            </motion.div>

            <motion.div
              key={progress}
              initial={{ opacity: 0.7, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="text-5xl md:text-7xl font-black tabular-nums text-gradient"
            >
              {progress}%
            </motion.div>

            <div className="w-64 md:w-96 h-px bg-border overflow-hidden">
              <motion.div
                className="h-full bg-foreground"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="text-[10px] md:text-xs tracking-[0.35em] text-muted-foreground uppercase">
              Initializing Digital Experience…
            </div>
          </div>

          {/* corner brackets */}
          {[
            "top-6 left-6 border-l border-t",
            "top-6 right-6 border-r border-t",
            "bottom-6 left-6 border-l border-b",
            "bottom-6 right-6 border-r border-b",
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`absolute w-10 h-10 border-foreground/60 ${c}`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
