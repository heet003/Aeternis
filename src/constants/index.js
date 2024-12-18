/* eslint-disable */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  realEstate,
  podcast,
  chatApp,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Specialist",
    icon: mobile,
  },
  {
    title: "Node.js Enthusiast",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Complete Web Development Bootcamp",
    company_name: "Udemy",
    icon: "https://w7.pngwing.com/pngs/13/317/png-transparent-udemy-round-logo-tech-companies.png",
    iconBg: "#EEEEEE",
    date: "Completed in 2023",
    points: [
      "Learned full-stack web development, including HTML, CSS, JavaScript, and frameworks like React.js and Node.js.",
      "Built a portfolio of  real-world projects.",
      "Gained knowledge in backend development with Express.js and databases like SQL and PostgreSQL.",
      "Studied deployment strategies and worked with version control using Git and GitHub.",
    ],
  },
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    company_name: "Udemy",
    icon: "https://w7.pngwing.com/pngs/13/317/png-transparent-udemy-round-logo-tech-companies.png",
    iconBg: "#EEEEEE",
    date: "Completed in 2024",
    points: [
      "Developed full-stack applications using the MERN stack (MongoDB, Express, React, Node).",
      "Learned user authentication and authorization in web applications.",
      "Implemented file upload features in both React and Node/Express applications.",
      "Explored deployment options for web applications.",
    ],
  },
  {
    title: "Backend Technology Internship",
    company_name: "Croma Technolabs",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPL5YddeJ3eElQyrn47YBKPtG82OsSMjWuw&s",
    iconBg: "#EEEEEE",
    date: "Interned for 5 months in 2024",
    points: [
      "Assisted in backend development using Node.js and Express.",
      "Collaborated with the team on various projects to enhance backend functionality.",
      "Gained experience in database management and API development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Application",
    description:
      "A real-time chat application that allows users to communicate seamlessly through text, images, and emojis. It includes features like user authentication, message history, and group chats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "text-yellow-400",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/heet003/Chat-App",
  },
  {
    name: "Real-Estate Web App",
    description:
      "A web application designed for real estate listings, allowing users to search, filter, and view properties for sale or rent. Features include user registration, property details, and a map view.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "text-yellow-400",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/heet003/Real-Estate",
  },
  {
    name: "Podcast Stream Application",
    description:
      "An application that allows users to stream, search, and discover podcasts. Users can create playlists, follow their favorite shows, and receive notifications for new episodes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "text-yellow-400",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: podcast,
    source_code_link: "https://github.com/heet003/PodStream",
  },
];

export { services, technologies, experiences, testimonials, projects };
