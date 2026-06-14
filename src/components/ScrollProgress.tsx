import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-foreground origin-left z-[150]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
