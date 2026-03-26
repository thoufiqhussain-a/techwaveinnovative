import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Tech Wave built a fantastic website for our company. It looks highly professional, works perfectly on mobile, and the entire process was smooth. Highly recommend!",
    name: "Suresh Kumar",
    role: "Construction Company Owner",
    initials: "SK",
  },
  {
    quote: "Their app development team delivered our fitness tracker app ahead of schedule. The UI is beautiful, and user retention has doubled since launch.",
    name: "Priya Sharma",
    role: "Startup Founder",
    initials: "PS",
  },
  {
    quote: "Our organic traffic increased 5x after Tech Wave's SEO overhaul. They truly understand digital marketing and deliver measurable results.",
    name: "Arjun Patel",
    role: "E-Commerce Director",
    initials: "AP",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">
          What Clients <span className="text-gradient">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-8 card-hover"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
