import { motion } from "framer-motion";
import { Check, Receipt, BarChart3, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: Receipt, title: "GST-Ready Invoicing", desc: "Generate compliant GST invoices in seconds with auto tax calculations." },
  { icon: BarChart3, title: "Sales & Inventory", desc: "Live stock tracking, sales reports and profit insights on one dashboard." },
  { icon: ShieldCheck, title: "Secure Cloud Backup", desc: "Your data is encrypted and backed up — access from anywhere, anytime." },
  { icon: Zap, title: "Fast & Offline Mode", desc: "Bill customers in under 5 seconds, even without internet." },
];

const points = [
  "Multi-user & multi-branch support",
  "Barcode & thermal printer ready",
  "Customer & supplier ledger",
  "WhatsApp & email bill sharing",
];

const BillingSoftwareSection = () => (
  <section id="billing" className="py-24 relative bg-secondary/30">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          Our Product
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">
          Smart <span className="text-gradient">Billing Software</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A complete billing, GST and inventory solution built for shops, retailers and growing businesses across India.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80"
            alt="Billing software dashboard"
            loading="lazy"
            className="rounded-xl border border-border shadow-xl w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-5 card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            ))}
          </div>

          <ul className="space-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <Check size={16} className="text-primary flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition glow-red-sm"
          >
            Request a Free Demo
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BillingSoftwareSection;
