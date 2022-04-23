import React from "react";
import { FaCode, FaDatabase, FaServicestack } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Moisés Miguel",
  title: "Front-End Developer",
  social: {
    github: "https://github.com/moche123",
    dribbble: "https://github.com/BraydenTW",
    twitter: "https://github.com/BraydenTW",
    email: "someone@example.com",
  },
  about: {
    title: "About me",
    description:
      `I'm a Software Developer, with 2+ years of experience as a web developer,
      building apps and maintaining them, I'm from Chiclayo Peru and a passionate learner.
       I've always been looking for new challenges and opportunities to learn amazing things,  and always try to do my tasks well. I unfold in: `,
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Database",
      skillIcon: <FaDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Backend",
      skillIcon: <FaServicestack className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ],
  experienceTitle: 'My experience',
  experience: [
    {
      id: 1,
      title: "TI Assistant",
      company: "CIMA",
      activities: "Build and find online education's tools",
      duration: "February 2020 - December 2020",
      tools: ['Classroom', 'Meet', 'AnyDesk', 'Excel', "Javascript", "Thinkercad"]
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "CIMA",
      activities: "Educational platform app development, maintenance and support and made apps for other areas",
      duration: "February 2021 - December 2021",
      tools: ["Angular 2+", "NodeJs", "Vanilla Javascript", "SCSS", "Functional libraries", "RXJS"]
    },

    {
      id: 3,
      title: "FullStack Developer",
      company: "Freelancer",
      activities: "Databases and APIs building for particular costumers and university projects",
      duration: "October 2019 - Until Now",
      tools: ["MongoDB", "MySQL", "PostgreSQL", "NodeJs", "Java", "Front-end and Back-end libraries", "Laravel", "Python","React","Vue"]
    },
    {
      id: 4,
      title: "Front-End Developer",
      company: "Freelancer",
      activities: "USS Educational application developing and mantaining",
      duration: "August 2021 - Currently working",
      tools: ["MongoDB", "MySQL", "PostgreSQL", "NodeJs", "Express", "Front-end and Back-end libraries"]
    }
    // {
    //   title: "Software Developer",
    //   company: "Independent",
    //   activities: "Build apps for individual costumers",
    //   duration: "Since 2018",
    //   tools: ['C#','Java','Python','C++']
    // },

    // {
    //   title: "Front-End Developer",
    // }
  ],
  tools: [
    { name: "Angular, NodeJs, MySQL, Github, Javascript, CSS, MongoDB, Firebase", key: 1, type: 1 },
    { name: "ReactJs, VueJs, Laravel, Arduino, Python, PostgreSQL", key: 2, type: 2 },
    { name: "Docker, Gitlab, SpringBoot", key: 3, type: 3 }
  
  ]
};
export default data;
