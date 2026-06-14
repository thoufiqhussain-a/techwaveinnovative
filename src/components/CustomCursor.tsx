import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 350, mass: 0.4 });
  const springY = useSpring(y, { damping: 25, stiffness: 350, mass: 0.4 });

  const dotX = useSpring(x, { damping: 40, stiffness: 800, mass: 0.2 });
  const dotY = useSpring(y, { damping: 40, stiffness: 800, mass: 0.2 });

  useEffect(() => {
    // disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const leave = () => setHidden(true);
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [role='button'], input, textarea, label"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-foreground mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width: hovering ? 56 : clicked ? 24 : 36,
          height: hovering ? 56 : clicked ? 24 : 36,
          backgroundColor: hovering ? "hsl(var(--foreground))" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[201] w-1.5 h-1.5 rounded-full bg-foreground mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
