import React from "react";
import { FaCode, FaDatabase,FaServicestack } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const spanishData = {
  name: "Moisés Miguel",
  title: "Desarrollador Front-End",
  social: {
    github: "https://github.com/BraydenTW",
    dribbble: "https://github.com/BraydenTW",
    twitter: "https://github.com/BraydenTW",
    email: "someone@example.com",
  },
  about: {
    title: "Acerca de mi",
    description:
      `
      Soy desarrollador de software, con más de 2 años de experiencia como desarrollador web,
       construyendo aplicaciones y manteniéndolas, soy de Chiclayo Perú y un aprendiz apasionado.
        Siempre he estado buscando nuevos desafíos y oportunidades para aprender cosas impactantes, y siempre trato de hacer bien mis tareas. me desempeño en:
      `,
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "BD",
      skillIcon: <FaDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Backend",
      skillIcon: <FaServicestack className={BOOTSTRAP_FOR_SKILL_ICON} />,
    }
  ],
  projects: [
    {
      title: "Portfolio con React y Tailwind",
      description: "👨‍🎨 Un ejemplo opensource de lo que puede ser esto.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "Mis otros ejemplos",
      description: "⚡ My portfolio está construido con NextJs.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ],
  experienceTitle: 'Mi experiencia',
  experience: [
    {
      id:1,
      title: "Asistente TI",
      company: "CIMA",
      activities: "Construir y encontrar soluciones para problemas de TI",
      duration: "Febrero 2020 - Diciembre 2020",
      tools: ['Classroom','Meet','AnyDesk','Excel',"Javascript","Thinkercad"]
    },
    {
      id:2,
      title: "Desarrollador Frontend",
      company: "CIMA",
      activities:"Mantenimiento y soporte de la aplicación web educativa y elaboración de apps para otras áreas",
      duration: "Febrero 2021 - Diciembre 2021",
      tools:["Angular 2+", "NodeJs", "Vanilla Javascript", "SCSS",  "Librerías funcionales","RXJS"]
    },

    {
      id:4,
      title: "Desarrollador FullStack",
      company: "Freelancer",
      activities: "Databases and APIs building for particular costumers and university projects",
      duration: "Obtubre 2019 - Hasta ahora",
      tools: ["MongoDB", "MySQL", "NodeJs", "Java", "Librerías de Front-end y Back-end","Laravel","Python","React","Vue"]
    },
     {
       id:3,
       title: "Desarrollador Front-End",
       company: "Freelancer",
       activities: "USS Educational application developing and mantaining",
       duration: "Agosto 2021 - Aún trabajando",
       tools: ["Angular", "Jira", "SpringBoot", "Gitflow", "SCRUM", "Angular material"]
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
export default spanishData;
