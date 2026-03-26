const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-lg font-bold">
        <span className="text-gradient">Tech</span>
        <span className="text-foreground">Wave</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tech Wave. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition">Services</a>
        <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition">Portfolio</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
