import {
  FaGithub,
  FaKaggle,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tf.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pytorch",
    image: "pt.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Sci-kit Learn",
    image: "skl.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pd.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Numpy",
    image: "np.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    image: "keras.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/LakshyaSingh354",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://twitter.com/Lakshya0503",
  },
  {
    name: "Kaggle",
    icon: FaKaggle,
    link: "https://www.kaggle.com/lakshyasingh354",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/lakshya-singh-354l",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Jupyter Notebook",
    image: "jup.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CNN",
    image: "cnn.png",
    width: 100,
    height: 120,
  },
  {
    skill_name: "Amazon Web Services",
    image: "aws.png",
    width: 80,
    height: 100,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    id: "manga-coloring",
    title: "Manga Colouring Using DeepLearning",
    description:
      "Leveraging deep learning techniques, this project transforms black-and-white manga images into vibrant colorized versions. Using a custom model trained on the Lab color space, it predicts color distributions for each pixel, producing realistic and visually appealing results. Explore the process, challenges, and outcomes of bringing historical photos and monochromatic images to life with advanced neural networks.",
    image: "/projects/manga-colouring/cover.png",
    img_h: 150,
    img_w: 350,
    link: "/manga-coloring",
    github_link: "https://github.com/LakshyaSingh354/Manga-Colouring",
  },
  // {
  //   id: 'project-2',
  //   title: "Interactive Cards Portfolio",
  //   description:
  //     'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
  //   image: "/projects/project-2.png",
  //   link: "https://example.com",
  // },
  // {
  //   id: 'project-3',
  //   title: "Space Themed Website",
  //   description:
  //     'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
  //   image: "/projects/project-3.png",
  //   link: "https://example.com",
  // },
] as const;

export const PROJECTS_ALL = [
  {
    id: "manga-coloring",
    title: "Manga Colouring Using DeepLearning",
    description:
      "Leveraging deep learning techniques, this project transforms black-and-white manga images into vibrant colorized versions. Using a custom model trained on the Lab color space, it predicts color distributions for each pixel, producing realistic and visually appealing results. Explore the process, challenges, and outcomes of bringing historical photos and monochromatic images to life with advanced neural networks.",
      image: "/projects/manga-colouring/cover.png",
      link: "/projects/manga-coloring",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/LakshyaSingh354",
      },
      {
        name: "Kaggle",
        icon: FaKaggle,
        link: "https://www.kaggle.com/lakshyasingh354",
      },
      // {
      //   name: "Discord",
      //   icon: RxDiscordLogo,
      //   link: "https://discord.com",
      // },
    ],
  },
  {
    title: "Social Media",
    data: [
      // {
      //   name: "Instagram",
      //   icon: RxInstagramLogo,
      //   link: "https://instagram.com",
      // },
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://twitter.com/Lakshya0503",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/lakshya-singh-354l",
      },
    ],
  },
  // {
  //   title: "About",
  //   data: [
  //     {
  //       name: "Become Sponsor",
  //       icon: null,
  //       link: "",
  //     },
  //     // {
  //     //   name: "Learning about me",
  //     //   icon: null,
  //     //   link: "https://example.com",
  //     // },
  //     {
  //       name: "Contact Me",
  //       icon: null,
  //       link: "mailto:lakshya.singh354@gmail.com",
  //     },
  //   ],
  // },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/#about-me",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  // {
  //   title: "Resume",
  //   link: "/Resume.pdf",
  // },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
