import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  Nikeland,
  CoffeeRoasters,
  CinemaWorldLight,
  AdminOverview,
  People01,
  People02,
  Team4,
  CryptomaniaShort,
  MarketPlace,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Tango Media",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Think Reuse",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Bianca proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: People01,
  },
  {
    testimonial:
      "I've never met a frontend developer who truly cares about their clients' success like Bianca does.",
    name: "Chris Jared",
    designation: "COO",
    company: "DEF Corp",
    image: People02,
  },
  {
    testimonial:
      "After Bianca optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: Team4,
  },
];

const projects = [
  {
    name: "Cinema World",
    description:
      "Cinema World is an app where you can find all of the movies in the world. This application includes user authentication, dark mode, movie sorting based on categories or genres, movie addition to favorites or watchlist, an in-app voice assistant (Alan) and more...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb Api",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Alan AI",
        color: "blue-text-gradient",
      },
    ],
    image: CinemaWorldLight,
    source_code_link: "https://github.com/Erudite885/cinema-world",
    web_link: "https://cinemaworldmovies.netlify.app",
  },
  {
    name: "Admin Dashboard",
    description:
      "An elegant Admin dashboard built using React Router, React, SCSS, & Chartjs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: AdminOverview,
    source_code_link: "https://github.com/Erudite885/admin_dashboard",
    web_link: "https://admin-dashboard-fawn-kappa.vercel.app",
  },
  {
    name: "Cryptomania",
    description:
      "Cryptomania is a Crypto-currency app that shows detailed data of all the world's crypocurrencies and the latest news in the crypto scene. Check LIVE cryptocurrency price changes for several coins and exchanges. Powered by RapidAPI ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "coinApi",
        color: "green-text-gradient",
      },
      {
        name: "AntD",
        color: "pink-text-gradient",
      },
    ],
    image: CryptomaniaShort,
    source_code_link: "https://github.com/Erudite885/cryptomania",
    web_link: "https://cryptomania-eta.vercel.app",
  },
  {
    name: "Coffee Roasters",
    description:
      "Landing Page where users search for coffee menu, prices, and available variety.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "landing",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: CoffeeRoasters,
    source_code_link: "https://github.com/Erudite885/coffee_roasted",
    web_link: "https://coffee-roasted.netlify.app",
  },
  {
    name: "MarketPlace",
    description:
      "A Web-based platform that allows users to search, purchase, \
      and manage digital assets from various providers, \
       and sellers can providing a convenient and \
      efficient solution for product distribution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: MarketPlace,
    source_code_link: "https://github.com/Erudite885/fullstack_minimart",
    web_link: "https://github.com/Erudite885/fullstack_minimart",
  },
  {
    name: "Nike Landing",
    description:
      "Landing page that allows users to view Sports shoes from Nike Brand providing a convenient and efficient solution for sports/fitness needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Nikeland,
    source_code_link: "https://github.com/Erudite885/nike_landing_page",
    web_link: "https://nikesfooty.netlify.app/",
  },
];

export { technologies, experiences, testimonials, projects };
