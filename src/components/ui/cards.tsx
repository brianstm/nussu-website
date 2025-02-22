"use client"

import { ArrowRight } from "@phosphor-icons/react";


interface Event {
    title: string;
    imageUrl: string;
    href: string;
}

interface CardProps {
    event: Event;
}

const events: Event[] = [
    {
        title: 'Event 1 Title',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/34/53/74/360_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg',
        href: './event1',
    },
    {
        title: 'Event 2 Title',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/34/53/74/360_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg',
        href: './event2',
    },
    {
        title: 'Event 3 Title',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/34/53/74/360_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg',
        href: './event3',
    },
    {
        title: 'Event 4 Title',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/34/53/74/360_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg',
        href: './event4',
    },
    {
        title: 'Event 5 Title',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/34/53/74/360_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg',
        href: './event4',
    },
    {
        title: 'Event 6 Title',
        imageUrl: 'https://t3.ftcdn.net/jpg/01/34/53/74/360_F_134537443_VendrqyXIWyHrZgxdIsfyKUost734JDP.jpg',
        href: './event4',
    },
];

const Card = ({ event }: CardProps) => {
    return (
        <div className="group laptop:w-[376px] tablet:w-[228.4px] relative overflow-hidden w-[32%] h-[240px] laptop:h-[448px] mb-8">
            <a
                href={event.href}
                className="block transition duration-700 transform group-hover:scale-105 group-hover:brightness-75"
            >
                <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-[240px] object-cover rounded-lg laptop:h-[448px] mb-8"
                />
            </a>
            <div className="absolute bottom-0 left-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                <span className="font-manrope text-[18px]">{event.title}</span>
            </div>
            <div className="absolute bottom-[calc(2rem-14px)] right-[calc(2rem-14px)] translate-x-[-300%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 bg-white bg-opacity-20 rounded-[4px] w-[60px] h-[60px] duration-800 transition-transform transition-opacity"></div>
            <div className="absolute bottom-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                <ArrowRight
                    size={36}
                    className="translate-x-[-300%] group-hover:translate-x-0 transition-transform rotate-[225deg] group-hover:rotate-[315deg]"
                />
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="max-w-none tablet:p-0 tablet:max-w-[730px] laptop:max-w-[1206px] mx-auto p-4">
            <h2 className="text-section-name text-base font-manrope pb-16 font-semibold">Key Events</h2>
            <div className="flex flex-wrap justify-between">
                {events.map((event, index) => (
                    <Card key={index} event={event} />
                ))}
            </div>
        </div>
    );
};


export default Cards;