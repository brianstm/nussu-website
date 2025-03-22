export interface WellbeingResource {
    image: string;
    title: string;
    description: string;
    href: string;
}

export const wellbeingResources: WellbeingResource[] = [
    {
        image: "/images/insurance.png",
        title: "Student Insurance",
        description: "Medical and personal accident insurance coverage",
        href: "/wellbeing/resource-1",
    },
    {
        image: "/images/uhc.jpg",
        title: "UHC Appointment",
        description: "Specialist consultations scheduled by-appointments",
        href: "/wellbeing/resource-2",
    },
    {
        image: "/images/counselling.jpg",
        title: "Counselling Services",
        description: "Approach UCS with any personal goals or concerns",
        href: "/wellbeing/resource-3",
    },
    {
        image: "/images/care_unit.png",
        title: "NUS Care Unit",
        description: "Reach out for support for sexual misconduct of any kind.",
        href: "/wellbeing/resource-4",
    },
    {
        image: "/images/freshman_guide.png",
        title: "External Resources",
        description: "External resources for students, libraries, and research",
        href: "/wellbeing/resource-5",
    },
    {
        image: "/images/freshman_guide.png",
        title: "NUS Hotlines",
        description: "If you are in immediate danger, call +65 6874 1616",
        href: "/wellbeing/resource-6",
    },
];