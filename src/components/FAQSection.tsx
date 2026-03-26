import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why Tech Wave?",
    a: "We are a dedicated team of experts delivering cutting-edge web, app, and marketing solutions. Direct contact, no waiting, maximum dedication.",
  },
  {
    q: "How long does a project take?",
    a: "Simple projects are often completed in 1-2 weeks. Complex platforms require more time depending on scope and requirements.",
  },
  {
    q: "How much does a website cost?",
    a: "All prices are calculated individually. Every project is unique and priced based on your specific requirements. Contact us for a free, no-obligation quote.",
  },
  {
    q: "What technologies do you use?",
    a: "We develop with React, Next.js, TypeScript, Tailwind CSS, React Native, Node.js, and more. All websites are optimized for maximum performance.",
  },
  {
    q: "Are your websites SEO-optimized?",
    a: "Yes, basic SEO is always included: structured data, meta tags, sitemap, performance optimization, and mobile responsive design.",
  },
  {
    q: "Why not use a page builder like Wix?",
    a: "Page builders are simple but limited. Our custom development offers unlimited customization, better performance, professional SEO, and unique design.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-black mt-3">
          Straight <span className="text-gradient">Answers</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
