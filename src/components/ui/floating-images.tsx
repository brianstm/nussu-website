import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface FloatingImagesProps {
  images: string[];
  index: number;
}

export function FloatingImages({ images, index }: FloatingImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate y-offset based on index
  const yOffset = (() => {
    switch (index) {
      case 0:
        return 0;
      case 1:
        return 10;
      case 2:
        return -10;
      case 3:
        return 15;
      default:
        return 0;
    }
  })();

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsVisible(true);
    }, index * 5000); // Increased delay between streams

    if (!containerRef.current) return;

    const imageCycleInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    const animate = async () => {
      while (true) {
        await controls.start({
          x: [window.innerWidth, -window.innerWidth],
          y: [-20 + yOffset, window.innerHeight + yOffset],
          transition: {
            duration: 25,
            ease: "linear",
          },
        });
        controls.set({
          x: window.innerWidth,
          y: -20 + yOffset,
        });
      }
    };

    if (isVisible) {
      controls.set({
        x: window.innerWidth,
        y: -20 + yOffset,
      });
      animate();
    }

    return () => {
      clearInterval(imageCycleInterval);
      clearTimeout(startDelay);
    };
  }, [index, images.length, isVisible, yOffset]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={containerRef}
      className="absolute"
      animate={controls}
      style={{
        zIndex: 5,
      }}
    >
      <motion.div
        className="relative"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "300px",
          height: "200px",
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt=""
          className="w-full h-full object-cover rounded-lg"
          style={{
            filter: "contrast(1.1) brightness(0.9)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
