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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    
    News1,
    Compo,
    threejs,
    Movies,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "RDBMS",
      icon: backend,
    },
    {
      title: "Data Structure",
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
      name: "Bootstrap",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQl",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Data Structure",
      icon: creator,
    },
    {
      name: "Netlify",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: " reactjs",
      icon:  reactjs,
      iconBg: "#383E56",
      date: "March 2020 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "I have a strong command of both Bootstrap and Tailwind CSS.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Deploying websites on platforms like Netlify is both seamless and compelling.",
      ],
    },
    {
      title: "Data Structure ",
      company_name: "Leetcode & Codeforces",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Rated for 1530+ rating in Leetcode .",
        "Solved over 800+ questions on various platforms.",
        "Have active participation in Contests and Hackathons  .",
        "I possess advanced proficiency in C++ with STL libraries and excel in competitive-level data structures and algorithms.",
      ],
    },
    {
      title: "RDBMS and Firebase",
      company_name: "Firebase",
      icon: threejs,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        " A deep understanding of Firebase's NoSQL database and RDBMS's robust querying capabilities,.",
        "Developed Authentication and Database components based on firebase .",
        "Proficient in SQl and Oracle Database operations .",
        "Learning phase is still going on ...",
      ],
    },
    {
      title: "future plans",
      company_name: "Self",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Started learning concepts of Ml and AI  to get connected to AI technologies.",
        " Currently  developing face recognition based major project .",
        "Enhancing my data structres skills and concept .",
        "Python and Cloud  learning for upgrading my skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Please provide your feedback on improvments , i am still learning and most parts of website are a part of learning and credit goes to mentors who taught me.",
      name: "Anshul",
      designation: "Developer",
      company: "Self",
      image: creator,
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
      name: "IMDB clone",
      description:
        "Web-based platform that allows users to search, Rate, and show  movies and web series, providing  various movie and admin dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: Movies,
      source_code_link: "https://github.com/carelight/IMDB-Clone_i10",
    },
    {
      name: "News Website ",
      description:
        "Website that shows current news From various areas like  technology , scince and sports . Along with that national and international news are also shown   .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "News Api",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: News1,
      source_code_link: "https://github.com/carelight/News_website",
    },
    {
      name: " Resuable Components  ",
      description:
        "like Text editor(Noraml) and sign up functions using firebase and vite along with admin dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image:Compo,
      source_code_link: "https://github.com/carelight?tab=repositories",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };