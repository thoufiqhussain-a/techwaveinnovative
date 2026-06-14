import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
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
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91 93849 546207</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/9193849546207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Chat with us instantly
                  </a>
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

            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating on software project"
              loading="lazy"
              className="rounded-xl border border-border w-full h-56 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScduolU-0q61J1SoWc1ZE5SGID07LZ8UDYHU5uih-DSB6wgGQ/viewform?embedded=true"
              width="100%"
              height="600"
              className="border-0 w-full"
              title="Contact Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
