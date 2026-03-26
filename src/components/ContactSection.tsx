import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Request a <span className="text-gradient">Quote</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Build Something Great</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us about your project and we'll craft a tailored solution that fits your goals and budget.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">techwave@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">9384954607</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Bangalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Your Name</label>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Service Needed</label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Project Details</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:opacity-90 transition glow-red-sm"
            >
              <Send size={18} />
              Send Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
