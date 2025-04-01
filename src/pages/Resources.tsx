
"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/ui/footer";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import AcademicSection from "@/components/ui/AcademicSection";
import List from "@/components/ui/list";
import { blogPosts } from "@/data/blogs";
import academics from "@/data/academics";
import WellbeingResources from "@/components/ui/WellbeingResources";
import { wellbeingResources } from "@/data/wellbeingResources";

function Resources() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHero(window.scrollY < window.innerHeight * 1.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full bg-white" style={{ height: "650vh" }}>
      <section className="sticky top-0 h-screen z-10 bg-white">
        {showHero ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <p className="text-base md:text-lg tracking-wide text-[#808080] mb-4">
              SINCE — Y:1949
            </p>
            <h1 className="text-7xl md:text-9xl font-bold text-black mb-10">
              Resources
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
          <div className="w-full tablet:max-w-[730px] laptop:max-w-[1208px]">
            <div className="pb-[150px]">
              <List posts={blogPosts} />
            </div>
            <div className="pb-[150px]">
              <AcademicSection resources={academics} />
            </div>
            <div className="pb-[150px]">
              <WellbeingResources resources={wellbeingResources} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resources;
