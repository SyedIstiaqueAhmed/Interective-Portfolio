import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  MICROSOFT,
  mongodb,
  git,
  PYTHON,
  docker,
  meta,
  SMH,
  BRACU,
  ROBU,
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
    title: "Microsoft Office Suit",
    icon: web,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "HTML & PHP",
    icon: backend,
  },
  {
    title: "React",
    icon: creator,
  },
];

const technologies = [
  {
    name: "PYTHON",
    icon: PYTHON,
  },
  {
    name: "MICROSOFT",
    icon: MICROSOFT,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },

  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Executive IT (Part-Time)",
    company_name: "SMH Engineering LTD.",
    icon: SMH,
    iconBg: "#383E56",
    date: "May 2020 - Present",
    points: [
      "Specializing in the management and resolution of complex computer systems issues with efficiency and precision.",
      "Acquired a comprehensive skill set in computer assembly and configuration, significantly enhancing system performance and reliability.",
      "Championed the development and implementation of troubleshooting strategies that led to a marked decrease in PC related problems, optimizing operational productivity.",
      "Established a reputation for exceptional technical support, consistently delivering solutions that met and exceeded performance standards.",
      "Leveraged hands-on experience to build a strong foundation in IT, contributing to advancements in technology and systems management.",
      "Served as an invaluable technical resource, offering expert advice and support that promoted an organizational culture of continuous improvement and knowledge sharing.",
    ],
  },
  {
    title: "Student Tutor",
    company_name: "BRAC University",
    icon: BRACU,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Provide comprehensive academic consultations to students, facilitating their understanding and mastery of complex subjects across various disciplines.",
      "Collaborate closely with faculty to evaluate assessments, ensuring fair and accurate measurement of student performance.",
      "Expertly conduct both online and offline classes, adapting to diverse learning environments and maximizing educational accessibility.",
      "Excel in problem-solving, offering tailored solutions to student inquiries, thereby significantly improving their academic outcomes.",
      "Recognized for exceptional communication skills, bridging the gap between students and curriculum requirements through effective dialogue and instruction.",
      "Pioneered innovative tutoring methods that have been acknowledged for their effectiveness in enhancing students’ learning experiences and academic success.",
      "Consistently receive positive feedback from both students and faculty for contributions to the educational community and for going above and beyond in the student support role.",
    ],
  },
  {
    title: "Senir Executive Finance and Marketing Dpt.",
    company_name: "Robotics Club of BRAC University",
    icon: ROBU,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2024",
    points: [
      "Instrumental in securing high-profile sponsorship deals, showcasing exceptional negotiation and partnership-building skills.",
      "Spearheaded a landmark collaboration with TRANSCOM as the exclusive beverage partner, elevating the brand presence at key events.",
      "Garnered commendations from senior club members for outstanding performance and dedication to driving the club's financial and marketing objectives.",
      "Established a prominent reputation within the club for strategic leadership and an innovative approach to finance and marketing challenges.",
      "Demonstrated a profound impact on the club's growth and success through strategic sponsor relations and marketing initiatives, setting new standards of excellence.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "he is very talented undergraduate I met in the office. He i very punctual and very serious about his work. I completed all the task he has been given. ",
    name: "Mohammah Abdul High",
    designation: "Officer (IT)",
    company: "SMH Engineering",
    image: "https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/395563523_10224773541914490_3931711321997364971_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D0fkM67JMOEAX827pYT&_nc_ht=scontent.fdac31-1.fna&oh=00_AfBZGDI8NgUTim8NONlAf29UYzFeeWVrDXoEXmVs8QVOCQ&oe=656237BF",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "AI-Generated T-Shirt",
    description:
      "Developed AI-Generated T-Shirt project using React and Three.js. Integrated AI algorithms for custom design automation in T-shirts with open AI. Implemented 3D visualization for real-time design previews.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "three js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SyedIstiaqueAhmed/AI_generated_T-shirt",
  },
  {
    name: "FIX & Service",
    description:
      "Engineered Fix and Service, an e-commerce platform using HTML, MySQL, Nest.js, and React for automotive parts. Key feature includes a mechanic locator based on user area and live location. Streamlined interface for effortless navigation and parts purchasing experience.",
    tags: [
      {
        name: "Nest Js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "MYSql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SyedIstiaqueAhmed/Fix-Service",
  },
  {
    name: "E-Book Store",
    description:
      "Developed an eBook store using HTML for front-end design. Implemented MySQL database for inventory management. Utilized PHP for server-side scripting.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MYSql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SyedIstiaqueAhmed/Online-Book-Store",
  },
];

export { services, technologies, experiences, testimonials, projects };
