import { mdiEmail, mdiLinkedin, mdiGithub } from "@mdi/js";

export const SectionEnum = Object.freeze({
  maps: 0,
  about: 1,
  react: 2,
  aws: 3,
  contact: 4,
});

export const sectionData = [
  {
    title: "About Me",
    section: SectionEnum.about,
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    title: "Mapbox",
    section: SectionEnum.maps,
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    title: "React Projects",
    section: SectionEnum.react,
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
  },
  {
    title: "AWS",
    section: SectionEnum.aws,
    name: "Ripe Malinka",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    height: 400,
  },
  // {
  //   title: "Typescript",
  //   description: "",
  //   section: SectionEnum.react,
  // },
  {
    title: "Contact",
    section: SectionEnum.contact,
    name: "Near Moon",
    description: "#5ee7df → #b490ca",
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    height: 400,
  },
];

export const urbicaMapConfiguration = {
  longitude: 151.2093,
  latitude: -33.8688,
  zoom: 13,
};

export const aboutLinks = [
  {
    name: "github",
    icon: "",
    url: "https://github.com/cxczau",
    mdi: mdiGithub,
  },
  {
    name: "linkedin",
    icon: "",
    url: "https://www.linkedin.com/in/cxczau/",
    mdi: mdiLinkedin,
  },
  {
    name: "email",
    icon: "",
    url: "mailto:cxczau@gmail.com",
    mdi: mdiEmail,
  },
];

export const summary =
  "Software Developer with a keen eye for detail and passion for problem solving, specialising in front end development. With over two years experience, I have demonstrated capabilities working with the latest front-end technologies within an Agile environment under continuous integration and continuous delivery concepts. Effective communicator with strong stakeholder management experience across all organisational levels. ";
