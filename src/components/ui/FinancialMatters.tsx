"use client";
import { useState } from "react";

interface FinancialCardData {
    image: string;
    title: string;
    description: string;
    link: string;
}

interface FinancialCardProps extends FinancialCardData {
    isHovered: boolean;
    isOppositeHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    hoverColor: string;
}

const FinancialCard = ({
    image,
    title,
    description,
    link,
    isHovered,
    isOppositeHovered,
    onMouseEnter,
    onMouseLeave,
    hoverColor,
}: FinancialCardProps) => {
    return (
        <div
            className={`relative h-[303px] transition-all duration-500 overflow-hidden 
        ${isHovered ? "flex-[1.2]" : isOppositeHovered ? "flex-[0.8]" : "flex-1"}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-500 rounded-xl"
                    style={{
                        objectPosition: isHovered ? "left center" : isOppositeHovered ? "right center" : "center",
                    }}
                />
                <div
                    className={`absolute inset-0 transition-all duration-500 rounded-xl ${isHovered ? `${hoverColor}` : "bg-black/20"
                        }`}
                />
            </div>

            <div
                className={`absolute bottom-0 left-0 p-6 transition-all duration-500 ${isHovered ? "translate-y-0" : "translate-y-6"
                    }`}
            >
                <div className="text-white">
                    <h3 className={`text-white text-[44px] font-medium mb-2 transition-all duration-500 ${isHovered ? "translate-y-0" : "translate-y-2"}`}>{title}</h3>

                    <div
                        className={`transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        <p className="mb-3 text-manrope text-xl text-white font-light">{description}</p>
                        <a
                            href={link}
                            className="flex items-center gap-2 font-medium hover:gap-3 transition-all"
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FinancialMattersProps {
    cards: [FinancialCardData, FinancialCardData];
}

const FinancialMatters = ({ cards }: FinancialMattersProps) => {
    const [hovered, setHovered] = useState<"left" | "right" | null>(null);

    return (
        <div className="flex flex-col items-center justify-center w-full bg-white">
            <div className="w-full tablet:max-w-[730px] laptop:max-w-[1208px] p-8 tablet:p-0">
                <h2 className="text-section-name text-base font-manrope pb-16 font-semibold">
                    Financial Matters
                </h2>
                <div className="flex w-full h-[303px] overflow-hidden rounded-lg shadow-lg justify-between gap-2.5">
                    <FinancialCard
                        {...cards[0]}
                        isHovered={hovered === "left"}
                        isOppositeHovered={hovered === "right"}
                        onMouseEnter={() => setHovered("left")}
                        onMouseLeave={() => setHovered(null)}
                        hoverColor="bg-secondary"
                    />
                    <FinancialCard
                        {...cards[1]}
                        isHovered={hovered === "right"}
                        isOppositeHovered={hovered === "left"}
                        onMouseEnter={() => setHovered("right")}
                        onMouseLeave={() => setHovered(null)}
                        hoverColor="bg-primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default FinancialMatters;
