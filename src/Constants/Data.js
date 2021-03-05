import {
  mdiEmail,
  mdiLinkedin,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiPhone,
  mdiYoutube,
} from "@mdi/js";

export const SectionEnum = Object.freeze({
  home: 0,
  services: 1,
  work: 2,
  ideas: 3,
  about: 4,
  contact: 5,
});

export const sectionData = [
  // {
  //   title: "Home",
  //   section: SectionEnum.home,
  //   name: "Saint Petersburg",
  //   description: "#f5f7fa → #c3cfe2",
  //   css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  //   height: 400,
  // },
  {
    title: "Services",
    section: SectionEnum.services,
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    title: "Our Work",
    section: SectionEnum.work,
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    title: "Our Ideas",
    section: SectionEnum.ideas,
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
  },
  {
    title: "About Us",
    section: SectionEnum.about,
    name: "Ripe Malinka",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    height: 400,
  },
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
  {
    name: "youtube",
    icon: "",
    url: "https://youtube.com",
    mdi: mdiYoutube,
  },
  {
    name: "twitter",
    icon: "",
    url: "https://twitter.com",
    mdi: mdiTwitter,
  },
  {
    name: "email",
    icon: "",
    url: "mailto:cxczau@gmail.com",
    mdi: mdiEmail,
  },
  {
    name: "phone",
    icon: "",
    url: "tel:+614 0022 6711",
    mdi: mdiPhone,
  },
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
      {
        name: "Corporate Visual Guide",
      },
      {
        name: "Brand Pitch Deck",
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
      {
        name: "Mobile App",
      },
    ],
  },
  {
    group: "Internet Marketing",
    subservice: [
      {
        name: "Search Engine Optimisation(SEO)",
      },
      {
        name: "Digital Campaign Strategy",
      },
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
    group: "Creative Works",
    subservice: [
      {
        name: "Videography",
      },
      {
        name: "Photography",
      },
      {
        name: "Graphic Design",
      },
    ],
  },
  {
    group: "Miscellaneous",
    subservice: [
      {
        name: "Business Intelligence (BI)",
      },
      {
        name: "White Label",
      },
    ],
  },
];

export const sampleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
