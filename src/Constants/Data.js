export const SectionEnum = Object.freeze({
  maps: 0,
  mixpanel: 1,
  react: 2,
  aws: 3,
});

export const sectionData = [
  {
    title: "Mapbox",

    section: SectionEnum.maps,
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    title: "Mixpanel",

    section: SectionEnum.mixpanel,
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    title: "React",

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
    title: "Magic",
    section: SectionEnum.magic,
    name: "Near Moon",
    description: "#5ee7df → #b490ca",
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    height: 400,
  },
];

export const mapConfiguration = {
  lngLat: [147.19554, -31.5632],
  zoom: [10],
};

export const urbicaMapConfiguration = {
  longitude: 147.19554,
  latitude: -31.5632,
  zoom: 10,
};
