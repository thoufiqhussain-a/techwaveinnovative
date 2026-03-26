import { motion } from "framer-motion";
import { Search, BarChart3, Smartphone, Target, Headphones, Zap } from "lucide-react";

const results = [
  { icon: Search, title: "On-Page SEO", desc: "Ready to be found on Google." },
  { icon: BarChart3, title: "Tracking & Analytics", desc: "Track user statistics, marketing cookies and more." },
  { icon: Smartphone, title: "100% Responsive", desc: "Optimized for desktop, tablet, mobile and everything in between." },
  { icon: Target, title: "ROI-First", desc: "So you get the most out of your ad budget." },
  { icon: Headphones, title: "Full-Service A to Z", desc: "Top-notch service and comfort from start to finish." },
  { icon: Zap, title: "Lightning-Fast Load Times", desc: "Because nobody likes waiting." },
];

const ResultsSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Results</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">
          Optimized for <span className="text-gradient">Real Results</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Websites built for real business growth
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 card-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <r.icon className="text-primary" size={22} />
            </div>
            <h3 className="text-foreground font-bold mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
