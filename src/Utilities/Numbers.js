import { australianCities } from "../Constants/MapData";

const LNG_LAT_BUFFER = 0.015;

const generateRandomNumber = (from, to, fixedPlaces) =>
  (Math.random() * (to - from) + from).toFixed(fixedPlaces) * 1;

const generateRandomCoordinates = (lat, lng) => {
  if (lat && lng) {
    return {
      // Generates random longitude value
      latitude: generateRandomNumber(
        lat - LNG_LAT_BUFFER,
        lat + LNG_LAT_BUFFER,
        3
      ),
      // Generates random latitude value
      longitude: generateRandomNumber(
        lng - LNG_LAT_BUFFER,
        lng + LNG_LAT_BUFFER,
        3
      ),
    };
  }

  // If no starting coordinates given, generate randomly throughout the world
  return {
    latitude: generateRandomNumber(-90, 90, 3),
    longitude: generateRandomNumber(-180, 180, 3),
  };
};

// TODO: Do I need async?
/**
 * Generates X amount of map pins in the vicinity of initialViewport
 * @param {*} numberRequired 
 * @param {*} initialViewport: {latitude: number, longitude: number}
 * @param {*} customIndex: (Optional) initialise index
 */
export const generateRandomDataSet = async (
  numberRequired,
  initialViewport,
  customIndex
) => {
  const output = [];

  if (numberRequired > 0 && initialViewport) {
    while (output.length < numberRequired) {
      const { latitude, longitude } = generateRandomCoordinates(
        initialViewport.latitude,
        initialViewport.longitude
      );

      const uniqueId = (customIndex ? customIndex : output.length) + 1;

      const newEntry = {
        siteName: `Site # ${uniqueId}`,
        longitude,
        latitude,
        uniqueId,
      };

      output.push(newEntry);
    }
  }

  return output;
};

/**
 * Generates X amount of map pins with an emphasis on major cities in Australia
 * (Data array's first 11 items are capital/major cities)
 * @param {*} numberRequired
 * @param {number} customIndex: initialise uniqueId
 */
export const generateRandomCities = async (numberRequired, customIndex) => {
  const output = [];
  let uniqueId = (customIndex ? customIndex : output.length) + 1 

  if (numberRequired > 0) {
    while (output.length < numberRequired) {
      const isMajorCity = generateRandomNumber(0, 11, 0) === 11;

      const randomCity = isMajorCity
        ? australianCities[generateRandomNumber(0, 10, 0)]
        : australianCities[
            generateRandomNumber(11, australianCities.length - 1, 0)
          ];

      const { latitude, longitude } = generateRandomCoordinates(
        randomCity.lat * 1,
        randomCity.lng * 1
      );

      const newEntry = {
        siteName: `Site # ${uniqueId}`,
        longitude,
        latitude,
        uniqueId,
        city: randomCity
      };

      output.push(newEntry);

      uniqueId++;
    }
  }

  return output;
};

/**
 * Randomises an array
 * @param {any[]} data: the array of data which holds the array
 * @param {number} setData: index of the array item to be
 * @param {number} index: index of the array item to be jumbled
 */
export const jumble = (data, setData, index) => {
  let randomisedObject = [];
  let randomisedIndexes = [];
  const actualElement = data[index];
  let actualData = data;
  const actualElementLength = actualElement.length;

  while (randomisedIndexes.length < actualElementLength) {
    let randomInteger = Math.floor(Math.random() * actualElementLength);
    if (randomisedIndexes.indexOf(randomInteger) === -1) {
      randomisedIndexes.push(randomInteger);
    }
  }

  console.log(randomisedIndexes);

  randomisedIndexes.forEach((item) => {
    randomisedObject.push(actualElement[item]);
  });

  console.log(randomisedObject);

  actualData[index] = randomisedObject;
  setData(actualData);
};
