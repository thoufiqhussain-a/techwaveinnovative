import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web", "App", "Marketing"];

const projects = [
  { title: "E-Commerce Platform", category: "Web", description: "Full-stack online store with payment integration", color: "from-red-900/40 to-red-700/20" },
  { title: "Fitness Tracker App", category: "App", description: "Cross-platform health & fitness mobile app", color: "from-red-800/40 to-orange-900/20" },
  { title: "SaaS Dashboard", category: "Web", description: "Analytics dashboard with real-time data visualization", color: "from-red-900/30 to-red-600/20" },
  { title: "Brand Campaign", category: "Marketing", description: "360° digital campaign driving 200% ROI", color: "from-red-700/40 to-red-900/20" },
  { title: "Food Delivery App", category: "App", description: "On-demand delivery app with live order tracking", color: "from-red-800/30 to-red-500/20" },
  { title: "SEO Overhaul", category: "Marketing", description: "Complete SEO strategy boosting organic traffic 5x", color: "from-red-900/40 to-red-800/20" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground glow-red-sm"
                  : "bg-secondary text-secondary-foreground hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl border border-border overflow-hidden card-hover"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-4xl font-black text-foreground/10 group-hover:text-foreground/20 transition">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 bg-card">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
