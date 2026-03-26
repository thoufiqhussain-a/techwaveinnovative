import { motion } from "framer-motion";
import HeroScene from "./HeroScene";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-[1]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6 glow-red-sm">
              🚀 Next-Gen Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
          >
            We Build
            <br />
            <span className="text-gradient">Digital</span>{" "}
            <span className="text-foreground">Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg"
          >
            From stunning websites to powerful mobile apps and strategic digital marketing — Tech Wave transforms your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition glow-red animate-pulse-glow"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-lg border border-border text-foreground font-bold hover:border-primary hover:text-primary transition"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
