import { motion } from "framer-motion";

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Flutter",
  "Firebase", "AWS", "MongoDB", "PostgreSQL", "Docker", "Figma",
];

const TechMarquee = () => (
  <section className="py-12 border-y border-border overflow-hidden">
    <div className="relative">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="text-muted-foreground/40 text-lg font-bold uppercase tracking-widest select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechMarquee;
