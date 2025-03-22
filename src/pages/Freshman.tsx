"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/ui/footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import guides from "@/data/guides";
import GuideRow from "@/components/ui/GuideRow";

export default function Freshman() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < window.innerHeight * 1.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full bg-white" style={{ height: "495vh" }}>
      <section className="sticky top-0 h-screen z-10 bg-white">
        {showHero ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <p className="text-base md:text-lg tracking-wide text-[#808080] mb-4">
              SINCE — Y:1949
            </p>
            <h1 className="text-7xl md:text-9xl font-bold text-black mb-10">
              Freshman
            </h1>
            <p className="text-xl md:text-2xl text-[#808080] max-w-2xl mx-auto">
              Find and attend events, browse and join <br />
              organizations, and showcase your involvement.
            </p>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <ScrollIndicator />
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-end">
            <Footer />
          </div>
        )}
      </section>

      <section className="absolute top-[100vh] w-full h-screen z-20 bg-white">
        <div className="flex flex-col items-center justify-center w-full bg-white">
          <div className="w-full rounded-lg overflow-hidden tablet:max-w-[730px] laptop:max-w-[1208px] m-auto p-8 tablet:p-0">
            <iframe
              className="w-full h-[677px] rounded-lg overflow-hidden transform translate-z-0"
              src="https://www.youtube.com/embed/-ZTgBCfPNWA?si=3CdXvAM1b8c-Bi92"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="font-manrope text-[22px] tablet:text-[28px] pt-8 pb-24">75th NUSSU Welcome Video</p>
          <div className="laptop:max-w-[1260px] tablet:max-w-[730px] py-12">
            {guides.map((guide, index) => (
              <GuideRow key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
