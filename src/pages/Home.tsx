import { useState, useEffect, JSX, useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import Cards from "@/components/ui/cards";
import { key_events, event_highlights } from "@/data/events";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import NussuOrgChart from "@/components/ui/NussuOrgChart";
import { TextReveal } from "@/components/ui/text-reveal";
import { Title } from "@/components/ui/title";

const backgroundImages1 = ["/images/1.jpg", "/images/2.jpg"];
const backgroundImages2 = ["/images/3.jpg", "/images/4.jpg"];
const backgroundImages3 = ["/images/5.jpeg", "/images/6.jpeg"];
const backgroundImages4 = ["/images/7.jpeg", "/images/8.jpg"];

function Home() {
  const [imageIndices, setImageIndices] = useState({
    img1: 0,
    img2: 0,
    img3: 0,
    img4: 0,
  });
  const [positions, setPositions] = useState({
    img1: { x: 0, y: 0 },
    img2: { x: -60, y: -45 },
    img3: { x: -90, y: -50 },
    img4: { x: -30, y: -50 },
  });
  const [opacity, setOpacity] = useState(1);
  const [isResetting, setIsResetting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndices((prev) => ({
        img1: (prev.img1 + 1) % backgroundImages1.length,
        img2: (prev.img2 + 1) % backgroundImages2.length,
        img3: (prev.img3 + 1) % backgroundImages3.length,
        img4: (prev.img4 + 1) % backgroundImages4.length,
      }));
    }, 1000);

    const animationInterval = setInterval(() => {
      if (!isResetting) {
        setPositions((prev) => {
          const newPositions = {
            img1: {
              x: prev.img1.x + 0.5,
              y: prev.img1.y + 0.5,
            },
            img2: {
              x: prev.img2.x + 0.5,
              y: prev.img2.y + 0.5,
            },
            img3: {
              x: prev.img3.x + 0.5,
              y: prev.img3.y + 0.5,
            },
            img4: {
              x: prev.img4.x + 0.5,
              y: prev.img4.y + 0.5,
            },
          };

          if (newPositions.img1.x >= 200 && newPositions.img1.y >= 200) {
            setIsResetting(true);
            setOpacity(0);

            setTimeout(() => {
              setPositions({
                img1: { x: 0, y: 0 },
                img2: { x: -60, y: -45 },
                img3: { x: -90, y: -50 },
                img4: { x: -30, y: -50 },
              });
              setTimeout(() => {
                setOpacity(1);
                setIsResetting(false);
              }, 500);
            }, 500);
          }

          return newPositions;
        });
      }
    }, 30);

    return () => {
      clearInterval(imageInterval);
      clearInterval(animationInterval);
    };
  }, [isResetting]);

  interface Position {
    x: number;
    y: number;
  }

  const renderImage = (
    images: string[],
    index: number,
    position: Position,
    zIndex: number,
    offsetY: number = 0
  ): JSX.Element => (
    <div
      className="fixed w-64 h-64"
      style={{
        left: `${position.x}%`,
        top: `${position.y + offsetY}%`,
        transform: "translate(-50%, -50%)",
        opacity: opacity,
        transition: "all 0.3s ease-out, opacity 0.5s ease-in-out",
        willChange: "left, top, opacity",
        zIndex: zIndex,
      }}
    >
      <img
        src={images[index]}
        alt="Moving background"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* {renderImage(backgroundImages1, imageIndices.img1, positions.img1, 1, 0)}
      {renderImage(backgroundImages2, imageIndices.img2, positions.img2, 2, 20)}
      {renderImage(
        backgroundImages3,
        imageIndices.img3,
        positions.img3,
        3,
        -20
      )}
      {renderImage(backgroundImages4, imageIndices.img4, positions.img4, 4, 10)} */}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="text-center">
          <Title title="Empowering Students, Shaping Futures." description="" />
        </div>
      </div>

      <div className="relative z-20">
        <div className="h-screen"></div>

        <section className="relative w-full bg-white min-h-screen">
          <div className="py-12 pt-24 bg-white">
            <BlurFade delay={0.3} inView direction="up">
              <Cards events={key_events} itemsPerRow={2} />
            </BlurFade>
          </div>
        </section>

        <section className="w-full min-h-screen bg-white">
          <BlurFade delay={0.3} inView direction="up">
            <TextReveal />
          </BlurFade>
        </section>

        {/* <NussuOrgChart /> */}

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
