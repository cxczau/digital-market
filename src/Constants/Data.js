export const SectionEnum = Object.freeze({ maps: 0, mixpanel: 1, react: 2 });

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
    title: "Typescript",
    description: "",
    section: SectionEnum.react,
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

export const jsonData = [
  {
    siteName: "Position 1",
    lngLat: [147.19554, -31.5632],
    longitude: 147.19554,
    latitude: -31.5632,
    uniqueId: 1,
  },
  {
    siteName: "Position 2",
    lngLat: [147.19554, -31.5661],
    longitude: 147.19812,
    latitude: -31.5661,
    uniqueId: 2,
  },
  {
    siteName: "Position 3",
    lngLat: [147.19554, -31.57],
    longitude: 147.19812,
    latitude: -31.57,
    uniqueId: 3,
  },
  {
    siteName: "Position 4",
    lngLat: [147.19812, -31.58],
    longitude: 147.19812,
    latitude: -31.58,
    uniqueId: 6,
  },
];
