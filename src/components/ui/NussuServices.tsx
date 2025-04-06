import React from 'react';

interface ImageWithLink {
    src: string;
    href: string;
}

interface RowProps {
    children?: React.ReactNode;
    images?: ImageWithLink[];
    className?: string;
}

const Row: React.FC<RowProps> = ({ children, images, className = '' }) => {
    return (
        <div className={`flex items-center justify-between h-[54px] w-[1208px] max-w-full ${className}`}>
            {children || (images?.map((image, index) => (
                <a
                    key={index}
                    href={image.href}
                    className="group transition-all duration-300 ease-in-out"
                >
                    <img
                        src={image.src}
                        className="max-h-[54px] w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
                </a>
            )))}
        </div>
    );
};

const NussuServices: React.FC = () => {

    const row1Images: ImageWithLink[] = [
        { src: 'images/services_resilience_fund.png', href: '#' },
        { src: 'images/services_space_credit.png', href: '#' },
        { src: 'images/services_council_funding.png', href: '#' },
        { src: 'images/services_students_fund.png', href: '#' },
    ];

    const row2Images: ImageWithLink[] = [
        { src: 'images/services_publicity_request.png', href: '#' },
        { src: 'images/services_logistics_booking.png', href: '#' },
        { src: 'images/services_zoom.png', href: '#' },
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full bg-white pt-8">
            <div className="flex flex-col gap-[39px]">
                <Row>
                    <h2 className="text-section-name text-base font-manrope pb-16 font-semibold">
                        NUSSU Services
                    </h2>
                </Row>
                <Row images={row1Images} />
                <Row images={row2Images} />
            </div>
        </div>
    );
};

export default NussuServices;