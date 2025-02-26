"use client";

import { ArrowRight } from "@phosphor-icons/react";

// Define your event interface
interface Event {
  title: string;
  imageUrl: string;
  href: string;
}

// Props for the Cards component
interface CardsProps {
  events: Event[];
  itemsPerRow: number;
}

const Card = ({ event }: { event: Event }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg h-[240px] laptop:h-[448px] mb-8">
      <a
        href={event.href}
        className="block transition duration-700 transform group-hover:scale-105 group-hover:brightness-75"
      >
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-[240px] object-cover laptop:h-[448px] mb-8 rounded-lg"
        />
      </a>

      <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <span className="font-manrope text-[18px]">{event.title}</span>
      </div>

      <div className="absolute bottom-8 right-8 pointer-events-none">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-white bg-opacity-20 rounded-[4px] transform -translate-x-[300%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <div className="relative text-white opacity-0 group-hover:opacity-100 transition-all duration-700">
            <ArrowRight
              size={36}
              className="transform -translate-x-[300%] group-hover:translate-x-0 transition-all duration-700 rotate-[225deg] group-hover:rotate-[315deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Cards({ events, itemsPerRow }: CardsProps) {
  return (
    <div className="mx-auto p-4 tablet:p-0 tablet:max-w-[730px] laptop:max-w-[1206px] max-w-none">
      <h2 className="text-section-name text-base font-manrope pb-16 font-semibold">
        Key Events
      </h2>

      {/* Dynamic grid based on itemsPerRow */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${itemsPerRow}, minmax(0, 1fr))`,
        }}
      >
        {events.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
