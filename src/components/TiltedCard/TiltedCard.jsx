import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function InteractiveTiltContainer({
  children,
  containerHeight = "450px",
  containerWidth = "100%",
  scaleOnHover = 1.05,
  rotateAmplitude = 10,
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  // Correct the typo 'a' back to 'useSpring'
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px]"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children}
      </motion.div>
    </figure>
  );
}
