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
    <div className="mt-44 pb-6 mb-6 ml-[22%] mr-[auto] font-manrope text-[#111111] text-xl">
      <h3 className="text-2xl mb-8">{title}</h3>
      <p className=" mb-24 leading-relaxed leading-48 w-[68%] text-wrap">
        {description}
      </p>
      <div className="w-[75%] flex justify-between">
        <div className="w-1/4">
          <p className="font-semibold text-[#808080]">Type</p>
          <p>{type}</p>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-[#808080]">Length</p>
          <p>{length}</p>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-[#808080]">Location</p>
          <p>{location}</p>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-[#808080]">Date</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
