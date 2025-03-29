import React from "react";

interface EventCardProps {
  title: string;
  description: string;
  type: string;
  length: string;
  location: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  type,
  length,
  location,
  date,
}) => {
  return (
    <div className="mt-32 sm:mt-36 md:mt-44 pb-6 mb-6 mx-4 sm:mx-8 md:ml-[22%] md:mr-[auto] font-manrope text-[#111111] text-lg md:text-xl">
      <h3 className="text-xl sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-2 md:pt-0">
        {title}
      </h3>
      <p className="mb-8 sm:mb-16 md:mb-24 leading-relaxed w-full sm:w-[80%] md:w-[68%] text-wrap">
        {description}
      </p>
      <div className="w-full sm:w-[90%] md:w-[75%] flex flex-row flex-wrap md:flex-nowrap gap-y-4 md:gap-0 md:justify-between">
        <div className="w-1/2 sm:w-1/2 md:w-1/4 pr-2 md:pr-0">
          <p className="font-semibold text-[#808080]">Type</p>
          <p>{type}</p>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/4 pl-2 md:pl-0">
          <p className="font-semibold text-[#808080]">Length</p>
          <p>{length}</p>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/4 pr-2 md:pr-0">
          <p className="font-semibold text-[#808080]">Location</p>
          <p>{location}</p>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/4 pl-2 md:pl-0">
          <p className="font-semibold text-[#808080]">Date</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
