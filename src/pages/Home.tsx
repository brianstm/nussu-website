import { useState, useEffect } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Footer from "@/components/ui/footer";
import Cards from "@/components/ui/cards";
import { key_events } from "@/data/events";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { TextReveal } from "@/components/ui/text-reveal";
import { Title } from "@/components/ui/title";
import { FloatingImages } from "@/components/ui/floating-images";

const backgroundImages1 = ["/images/1.jpg", "/images/2.jpg"];
const backgroundImages2 = ["/images/3.jpg", "/images/4.jpg"];
const backgroundImages3 = ["/images/5.jpeg", "/images/6.jpeg"];
const backgroundImages4 = ["/images/7.jpeg", "/images/8.jpg"];

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textRevealContent =
    "National University of Singapore Students' Union (NUSSU) ||" +
    "is an autonomous institution that serves as the bridge ||" +
    "between the students and the University's senior management.";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <FloatingImages images={backgroundImages1} index={0} />
        <FloatingImages images={backgroundImages2} index={1} />
        <FloatingImages images={backgroundImages3} index={2} />
        <FloatingImages images={backgroundImages4} index={3} />
        <FloatingImages images={backgroundImages2} index={3} />
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10">
        <div className="text-center mix-blend-difference">
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
            <TextReveal>{textRevealContent}</TextReveal>
          </BlurFade>
        </section>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
