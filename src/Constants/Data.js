export const SectionEnum = Object.freeze({ maps: 0, mixpanel: 1, react: 2, aws: 3 });

export const sectionData = [
  {
    title: "Mapbox",
    description: "",
    section: SectionEnum.maps,
  },
  {
    title: "Mixpanel",
    description: "",
    section: SectionEnum.mixpanel,
  },
  {
    title: "React",
    description: "",
    section: SectionEnum.react,
  },
  {
    title: "AWS",
    description: "",
    section: SectionEnum.aws,
  },
  {
    title: "Typescript",
    description: "",
    section: SectionEnum.react,
  },
  {
    title: "Magic",
    description: "",
    section: SectionEnum.magic,
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
