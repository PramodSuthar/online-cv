import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pramod Suthar",
  initials: "PS",
  location: "Canada",
  locationLink: "https://www.google.com/maps/place/Moncton",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I've adeptly pioneered the development of several products, leading teams to create an enabling environment for optimal performance. Presently, my focus revolves around TypeScript, React, Node.js, and MySQL. With over three years of experience, I've effectively operated in remote/hybrid settings across two continents.",
  avatarUrl:
    "https://personal-buckets3.s3.ca-central-1.amazonaws.com/photoshot+(2).jpg",
  personalWebsiteUrl: "https://pramodsuthar.com",
  contact: {
    email: "suthar.pramod@outlook.com",
    tel: "+15068996999",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/PramodSuthar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pramodsuthar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Prmd96",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Collège LaSalle",
      degree: "AEC in Information Technology Programming Analyst",
      start: "2019",
      end: "2021",
    },
    {
      school: "Gujarat Technological University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2019",
    },
    {
      school: "Gujarat Technological University",
      degree: "High School Diploma in Computer Science",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Creator.co",
      link: "https://creator.co",
      badges: ["Remote"],
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Implemented new features, worked on improving the platform by developing new integrations, handled migration of frontend from PHP to React and more. Technologies: React, TypeScript, MySQL, AWS, Styled Components.",
    },
    {
      company: "IGT Canada",
      link: "https://www.igt.com/",
      badges: ["Hybrid"],
      title: "Software Developer I",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Led collaborative efforts to translate creative concepts into functional casino gameplay, creating and launching new games within the casino marketplace. Technologies: Unity Engine, C#, JavaScript, HTML, CSS",
    },
    {
      company: "One Web Technologies",
      link: "https://onewebtech.in/",
      badges: [],
      title: "Intern Developer",
      logo: JojoMobileLogo,
      start: "2017",
      end: "2019",
      description:
        "Analyzed business needs, shaped application requirements under guidance, and ensured efficient project delivery within constraints. Reported to the Development Manager, overseeing software design, coding, and debugging, contributing to project success. Technologies: C++, React, JavaScript, MySQL",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "ExpressJS",
    "NodeJS",
    "Redux",
    "MongoDB",
    "Bootstrap",
    "Tailwind CSS",
    "C#",
    "C++",
    "Java",
    "React Native",
    "Python",
    "Swift",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Oracle DB",
    "Firebase",
    "Prisma ORM",
    "Styled Components",
    "Git",
    "Perforce",
    "GitHub",
    "TeamCity",
    "Jira",
    "Confluence",
    "Github Actions",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  projects: [
    {
      title: "Shiron Elevation (WIP)",
      techStack: [
        "JavaScript",
        "React",
        "TypeScript",
        "MySQL",
        "GraphQL",
        "DynamoDB",
        "AWS",
      ],
      description: "A perfect dashboard to track all the data and charts.",
      logo: ConsultlyLogo,
      link: {
        label: "shironelevation.com",
        href: "https://elevation.shiron.netlify.app/",
      },
    },
    {
      title: "Moviepedia",
      techStack: ["JavaScript", "React", "SASS"],
      description:
        "Developed the perfect Encylopedia for movie and tv shows lovers: Moviepedia. Search for new Movies and TV Shows adn have a look at the trailer on the go.",
      logo: ConsultlyLogo,
      link: {
        label: "movieepedia.netlify.app/",
        href: "https://movieepedia.netlify.app/",
      },
    },
    {
      title: "Portfolio",
      techStack: ["JavaScript", "React", "CSS", "Framer Motion"],
      description:
        "Created this beautiful Portfolio which highlights all my work and accomplishments done so far.",
      logo: MonitoLogo,
      link: {
        label: "pramodsuthar.com",
        href: "https://pramodsuthar.com/",
      },
    },
    {
      title: "Gmail Replica",
      techStack: ["Side Project", "React", "CSS", "Redux", "Firebase"],
      description:
        "Created Gmail Clone using React and Firebase Auth, storing data in Firebase Realtime Database.",
      logo: JarockiMeLogo,
      link: {
        label: "gmail-clone.web.app/",
        href: "https://clone-649b9.web.app/",
      },
    },
    {
      title: "Calculator",
      techStack: ["React", "CSS"],
      description:
        "Developed this beautiful Calculator web app in React which showcases my skills in the front end department.",
      logo: Minimal,
      link: {
        label: "online-calculator-react.netlify.app/",
        href: "https://online-calculator-react.netlify.app/",
      },
    },
    {
      title: "Flexi Pay",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Flexi Pay is a web app landing page for any website with a goal. Powered with Firebase Auth and Firebase Realtime Database.",
      logo: BarepapersLogo,
      link: {
        label: "flexipay.netlify.app/",
        href: "https://flexipay.netlify.app/",
      },
    },
    {
      title: "Chicken Saga",
      techStack: ["Unreal Engine", "C++"],
      description:
        "Developed a Remake of the classic arcade game Pacman where the character, Pacman will find paths through his maze world",
      logo: YearProgressLogo,
      link: {
        label: "pacman.com",
        href: "https://github.com/PramodSuthar/PacMan",
      },
    },
    {
      title: "Meteor Shooter",
      techStack: ["Unreal Engine", "C++"],
      description:
        "An Asteroid Shooting 2D Arcade Game.  The aim is to shoot the asteroids using the Space Ship. The user has 3 lives to destroy as much Meteors as possible",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/PramodSuthar/Meteor-Shooter",
      },
    },
    {
      title: "Sudoku",
      techStack: ["Python", "Pygame", "Beautiful Soup"],
      description:
        "A classic chalenging game of sudoku built in Python. Provides user with 4 levels of difficulty and fetches a new sudoku from the internet, for someone who doesn't give up easily!",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/PramodSuthar/sudoku-Python",
      },
    },
    {
      title: "Flash Chat",
      techStack: ["Swift", "Firebase", "WebRTC"],
      description:
        "A real-time text chat application built in Swift that has built-in authentication which provides user authentication as well as cloud storage",
      logo: MobileVikingsLogo,
      link: {
        label: "github.com",
        href: "https://github.com/PramodSuthar/FlashChat-iOS",
      },
    },
    {
      title: "TodoApp",
      techStack: ["Swift", "Realm"],
      description:
        "A smart to-do list app for iOS devices. Allows user to create a do list which will display items on a beautiful gradient going pattern. All of the data in the list will be saved and persisted locally on your device",
      logo: Howdy,
      link: {
        label: "github.com",
        href: "https://github.com/PramodSuthar/TodoApp-iOS",
      },
    },
  ],
} as const;
