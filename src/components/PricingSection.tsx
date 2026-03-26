import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    description: "A professional page with contact form. Quickly online.",
    price: "₹2,999",
    label: "Single payment",
    popular: false,
    features: ["1 page (landing page)", "Contact form", "Automatic emails", "Mobile optimized"],
  },
  {
    name: "Standard",
    description: "The perfect start for professional demands. Ideal for established websites.",
    price: "₹5,999",
    label: "Single payment",
    popular: true,
    features: ["3 pages", "Contact form", "Automatic emails", "Mobile optimized"],
  },
  {
    name: "Premium",
    description: "Full-featured website with custom design, SEO, and ongoing support.",
    price: "₹14,999",
    label: "Single payment",
    popular: false,
    features: ["Up to 10 pages", "Custom design", "SEO optimization", "Priority support", "Analytics dashboard"],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">Pricing</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">
          Transparent <span className="text-gradient">Costs</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          High quality approach. No hidden fees.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative bg-card border rounded-xl p-8 card-hover ${
              plan.popular ? "border-primary glow-red-sm" : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={12} /> Popular
              </span>
            )}
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{plan.label}</p>
            <h3 className="text-xl font-bold text-foreground mt-2">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.description}</p>
            <p className="text-4xl font-black text-foreground mb-8">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block w-full py-3 rounded-lg text-center font-bold transition ${
                plan.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90 glow-red-sm"
                  : "bg-secondary text-secondary-foreground hover:text-primary"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
