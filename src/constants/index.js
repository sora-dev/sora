import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  aws,
  html,
  css,
  reactjs,
  wordpress,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  rbi,
  upwork,
  alfheim,
  technodream,
  bsu,
  isc2CC,
  awsCCP,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "IT & Cybersecurity",
    icon: backend,
  },
  {
    title: "IT Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Head of IT",
    company_name: "Rural Bank of Itogon (Benguet), Inc.",
    icon: rbi,
    iconBg: "#E6DEDD",
    date: "October 2020 - Present",
    points: [
      "Leads IT operations, system administration, and cybersecurity initiatives.",
      "Oversees IT infrastructure, network security, and compliance with banking regulations.",
      "Implements cybersecurity best practices and ISO-aligned policies",
      "Manages server administration, database management, and IT risk assessment.",
      "Provides technical support and ensures business continuity through IT solutions",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Upwork and Various Clients",
    icon: upwork,
    iconBg: "#383E56",
    date: " September 2016 - Present",
    points: [
      "Designs and develops custom websites using PHP, JavaScript, MySQL, and WordPress.",
      "Maintains and optimizes websites for performance and security.",
      "Maintains and optimizes websites for performance and security.",
      "Converts static sites into WordPress-based platforms.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Technodream Outsourcing",
    icon: technodream,
    iconBg: "#E6DEDD",
    date: "July 2020 - October 2020",
    points: [
      "Developed and maintained websites for various clients.",
      "Integrated SSL security and deployed websites to hosting services.",
    ],
  },
  {
    title: "Internet Café Owner",
    company_name: "Alfheim Computer Shop",
    icon: alfheim,
    iconBg: "#383E56",
    date: "August 2018 - May 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
    {
    title: "IT Technical Support",
    company_name: "Benguet State University",
    icon: bsu,
    iconBg: "#E6DEDD",
    date: "September 2015 - January 2016",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
];

const certifications = [
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    issued: "May 2025",
    expires: "May 2028",
    credlyUrl: "https://www.credly.com/badges/b2063485-2d91-4a05-b1e3-5813504a5178/public_url",
    logo: isc2CC,
    description: "Demonstrates foundational knowledge in cybersecurity principles and practices"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2025",
    expires: "Feb 2028",
    credlyUrl: "https://www.credly.com/badges/ac649b12-1a47-430c-b0a3-f28407d5252a/linked_in_profile",
    logo: awsCCP,
    description: "Validates overall understanding of the AWS Cloud platform and services"
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, certifications, projects };
