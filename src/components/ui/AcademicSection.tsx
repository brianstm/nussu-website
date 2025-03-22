import React from "react";

type ResourceItem = {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
};

type AcademicSectionProps = {
    resources: ResourceItem[];
};

const AcademicSection: React.FC<AcademicSectionProps> = ({
    resources,
}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-white">
            <div className="w-full tablet:max-w-[730px] laptop:max-w-[1208px] p-8 tablet:p-0">
                <h2 className="text-section-name text-base font-manrope pb-16 font-semibold">
                    Academic Related
                </h2>
                <div className="flex flex-wrap justify-between gap-8">
                    {resources.map((resource, index) => (
                        <a
                            key={index}
                            href={resource.href}
                            className="w-full tablet:w-[203.34px] laptop:w-[362.68px] bg-white overflow-hidden duration-300"
                        >
                            <img
                                src={resource.imageUrl}
                                alt={resource.title}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            <div className="py-6">
                                <h3 className="text-[24px] font-manrope font-semibold mb-[10px]">
                                    {resource.title}
                                </h3>
                                <p className="text-[20px] font-manrope text-[#888888] font-medium">{resource.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcademicSection;