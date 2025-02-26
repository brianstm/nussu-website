"use client";

import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function CampusLifePage() {
  return (
    <main className="relative w-full h-[200vh] bg-white">
      <section className="sticky top-0 h-screen relative">
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-base md:text-lg tracking-wide text-[#808080] mb-4">
            SINCE – Y:1949
          </p>
          <h1 className="text-7xl md:text-9xl font-bold text-black mb-10">
            Campus Life
          </h1>
          <p className="text-xl md:text-2xl text-[#808080] max-w-2xl mx-auto">
            Find and attend events, browse and join <br />
            organizations, and showcase your involvement.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>

      <section className="absolute top-[100vh] w-full h-screen bg-white">
        <div className="px-8 py-12">
          <h2 className="text-2xl font-semibold mb-4">Key Events</h2>
          <p className="text-gray-700">
            Describe the next section of content here. As the user scrolls, this
            section slides over the pinned hero.
          </p>
        </div>
      </section>
    </main>
  );
}
