export interface Post {
    date: string;
    title: string;
    category: string;
    href: string;
    netlifyURL?: string;
}

export const blogPosts: Post[] = [
    {
        date: 'March 11, 2025',
        title: '🎨 Dive Into Creativity: Arts Fest, Workshops, & Unmissable Events This Week! 🗓️🌟',
        category: 'Events',
        href: './blog/art-fest', 
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/110325.html',
    },
    {
        date: 'July 08, 2024',
        title: '🌍✨ Explore, Create, Connect: Global Fest, Entrepreneurship, & More This Week! 🗓️🌟',
        category: 'Events',
        href: './blog/global-fest', 
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/170325.html',
    },
    {
        date: 'June 12, 2024',
        title: '🌟 Discover, Create, Connect: Open House, Arts Fest, & Exciting Events Await! 🎉📅',
        category: 'Events',
        href: './blog/open-house',
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/030325.html',
    },
    {
        date: 'December 18, 2024',
        title: '✨ Stay Connected: Volunteer Drives, Fundraisers, & Inspiring Events This Week! 🚀🎉',
        category: 'Events',
        href: './blog/volunteer-drives', 
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/240225.html',
    },
    {
        date: 'December 05, 2024',
        title: '🌟 Don’t Miss Out: NUSSU Union Camp Recruitment, NUS Career Fest 2025, & Exciting Events This Week! 🗓️✨',
        category: 'Events',
        href: './blog/nussu-union-camp', 
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/170225.html',
    },
    {
        date: 'November 28, 2024',
        title: '🔥 Exciting Events This Week: Festive Celebrations, Career Opportunities & More! 🎭🚀',
        category: 'Events',
        href: './blog/festive-celebrations',
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/100225.html',
    },
    {
        date: 'November 14, 2024',
        title: '🎉 This Week’s Key Events: Valentine’s Concert, Career Fests, & More! 🗓️✨',
        category: 'Events',
        href: './blog/valentine-concert', 
        netlifyURL: 'https://nussuwebsite-broadcast.netlify.app/030225.html',
    },
    {
        date: 'September 22, 2024',
        title: '✨ Fresh Updates: Discover This Week’s Highlights!',
        category: 'Events',
        href: './blog/week-highlights', 
        netlifyURL:'https://nussuwebsite-broadcast.netlify.app/270125.html',
    },
];
