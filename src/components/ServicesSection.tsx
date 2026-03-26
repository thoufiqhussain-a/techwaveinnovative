import { motion } from "framer-motion";
import { Globe, Smartphone, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom-built, responsive websites using cutting-edge technologies like React, Next.js, and Node.js. Fast, scalable, and optimized for performance.",
    features: ["React & Next.js", "E-Commerce", "CMS Integration", "API Development"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile apps that deliver flawless user experiences across iOS and Android devices.",
    features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Launch"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that boost your online presence, drive traffic, and maximize conversions.",
    features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics & Reporting"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            End-to-end digital solutions tailored to elevate your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
