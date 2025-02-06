import React, { useState, useEffect } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import { Title } from "@/components/ui/title";

const backgroundImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpg",
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 animate-marquee bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          transform: "translate(-50%, -50%) rotate(-45deg)",
          width: "50%",
          height: "50%",
          top: "0%",
          left: "100%",
        }}
      />

      <div className="relative z-10">
        <BlurFade delay={0.25} inView direction="up" offset={20}>
          <div className="w-full bg-slate-200 py-8">HEADER</div>
        </BlurFade>
        <BlurFade delay={0.25} inView direction="up" offset={20}>
          <div className="mt-56">
            <Title
              title="Empowering Students, Shaping Futures."
              description=""
            />
          </div>
        </BlurFade>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
