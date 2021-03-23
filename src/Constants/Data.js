/* eslint-disable no-unused-vars */
import {
  mdiEmail,
  mdiLinkedin,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiPhone,
  mdiYoutube,
} from "@mdi/js";
import { businessMan, businessMan2, businessWoman, businessWoman2 } from "../Assets";

export const SectionEnum = Object.freeze({
  home: 0,
  services: 1,
  work: 2,
  ideas: 3,
  about: 4,
  contact: 5,
});

export const servicesSectionData = [
  {
    title: "Branding",
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
    link: "/branding",
  },
  // {
  //   title: "Content Creation",
  //   name: "Deep Blue",
  //   description: "#e0c3fc → #8ec5fc",
  //   css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  //   height: 400,
  //   link: "/content-creation",
  // },
  {
    title: "Graphic Design",
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
    link: "/graphic-design",
  },
  {
    title: "SEO",
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
    link: "/seo",
  },
  {
    title: "Social Media",
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
    link: "/social-media-mgmt",
  },
  {
    title: "Web Development",
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
    link: "/web-development",
  },
];

export const sectionData = [
  // {
  //   title: "Home",
  //   section: SectionEnum.home,
  //   name: "Saint Petersburg",
  //   description: "#f5f7fa → #c3cfe2",
  //   css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  //   height: 400,
  //   link: "/",
  // },
  // {
  //   title: "Services",
  //   section: SectionEnum.services,
  //   name: "Saint Petersburg",
  //   description: "#f5f7fa → #c3cfe2",
  //   css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  //   height: 400,
  //   link: "/services",
  // },
  {
    title: "Our Work",
    section: SectionEnum.work,
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
    link: "/our-work",
  },
  // {
  //   title: "Our Ideas",
  //   section: SectionEnum.ideas,
  //   name: "Deep Blue",
  //   description: "#e0c3fc → #8ec5fc",
  //   css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  //   height: 400,
  //   link: "/our-ideas",
  // },
  {
    title: "Meet Us",
    section: SectionEnum.about,
    name: "Ripe Malinka",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    height: 400,
    link: "/meet-us",
  },
  {
    title: "Contact",
    section: SectionEnum.contact,
    name: "Near Moon",
    description: "#5ee7df → #b490ca",
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    height: 400,
    link: "/contact",
  },
];

export const urbicaMapConfiguration = {
  longitude: 151.2093,
  latitude: -33.8688,
  zoom: 13,
};

export const aboutLinks = [
  {
    name: "facebook",
    icon: "",
    url: "https://facebook.com",
    mdi: mdiFacebook,
  },
  {
    name: "instagram",
    icon: "",
    url: "https://instagram.com",
    mdi: mdiInstagram,
  },
  // {
  //   name: "youtube",
  //   icon: "",
  //   url: "https://youtube.com",
  //   mdi: mdiYoutube,
  // },
  // {
  //   name: "twitter",
  //   icon: "",
  //   url: "https://twitter.com",
  //   mdi: mdiTwitter,
  // },
  // {
  //   name: "email",
  //   icon: "",
  //   url: "mailto:cxczau@gmail.com",
  //   mdi: mdiEmail,
  // },
  // {
  //   name: "phone",
  //   icon: "",
  //   url: "tel:+614 0022 6711",
  //   mdi: mdiPhone,
  // },
  {
    name: "linkedin",
    icon: "",
    url: "https://linkedin.com",
    mdi: mdiLinkedin,
  },
];

export const services = [
  {
    group: "Branding Services",
    subservice: [
      {
        name: "Brand Strategy",
      },
      {
        name: "Brand Identity",
      },
    ],
  },
  {
    group: "Website Development",
    subservice: [
      {
        name: "Website Audit",
      },
      {
        name: "Web Design & Development",
      },
      // {
      //   name: "Mobile App",
      // },
    ],
  },
  {
    group: "Internet Marketing",
    subservice: [
      {
        name: "Search Engine Optimisation(SEO)",
      },
      // {
      //   name: "Digital Campaign Strategy",
      // },
      {
        name: "Online Paid Advertising",
      },
      {
        name: "Social Media Marketing (SMM)",
      },
      {
        name: "Social Media Marketing",
      },
    ],
  },
  {
    group: "Miscellaneous",
    subservice: [
      {
        name: "White Label",
      },
    ],
  },
];

export const teamFiles = [
  {
    name: "John",
    photo: businessMan,
    title: "Co-Founder",
    role: "Digital Marketing, SEO",
  },
  {
    name: "Jazmin",
    photo: businessWoman,
    title: "Co-Founder",
    role: "Social Media Management",
  },
  {
    name: "Shirley",
    photo: businessWoman2,
    title: "",
    role: "Graphic Design",
  },
  {
    name: "Charles",
    photo: businessMan2,
    title: "",
    role: "Web Development",
  },
];

export const sampleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
