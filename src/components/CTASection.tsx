import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready for your <span className="text-gradient">project?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Let's create something extraordinary together. We look forward to hearing from you.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition glow-red"
        >
          <Sparkles size={20} />
          Book a Call
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
