import { useState, useEffect, JSX } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import Cards from "@/components/ui/cards";
import { key_events, event_highlights } from "@/data/events";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import NussuOrgChart from "@/components/ui/NussuOrgChart";

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
    <div className="relative h-screen overflow-x-hidden">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
      <div className="relative z-10">
        <BlurFade delay={0.25} inView direction="up" offset={20}>
          <div className="mt-56 text-center">
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <p className="text-base font-manrope md:text-lg tracking-wide text-[#808080] mb-4">
                SINCE — Y:1949
              </p>
              <h1 className="text-7xl md:text-9xl font-bold text-black mb-10">
                Empowering Students, Shaping Futures.
              </h1>
            </div>
          </div>
        </BlurFade>

        <NussuOrgChart />

        <BlurFade delay={0.5} inView direction="up" offset={20}>
          <section className="mt-64 w-full h-screen z-20 bg-white">
            <div className="py-12 bg-white">
              <Cards events={key_events} itemsPerRow={2} />
            </div>
          </section>
        </BlurFade>

        <div className="pt-[150vh]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
