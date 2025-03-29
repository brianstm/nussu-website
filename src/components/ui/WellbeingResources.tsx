"use client";

import { WellbeingResource } from "@/data/wellbeingResources";

const WellbeingResources = ({ resources }: { resources: WellbeingResource[] }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-white">
            <div className="w-full tablet:max-w-[730px] laptop:max-w-[1208px] p-8 tablet:p-0">
                <h2 className="text-section-name text-base font-manrope pb-[12px] font-semibold">Wellbeing Resources</h2>
                <div className="flex flex-col tablet:flex-row tablet:flex-wrap justify-between gap-y-[30px] tablet:gap-x-[60px]">
                    {resources.map((resource, index) => (
                        <a
                            key={index}
                            href={resource.href}
                            className="group flex items-center gap-[20px] rounded-lg transition-all duration-300 hover:scale-105 w-full tablet:w-[335px] laptop:w-[547px]"
                        >
                            <div className="w-[125px] h-[125px]">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex-column gap-[5px]">
                                <h3 className="text-[24px] font-manrope font-semibold">
                                    {resource.title}
                                </h3>
                                <p className="text-[16px] text-[#666666] font-manrope font-medium hidden laptop:block">
                                    {resource.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WellbeingResources;