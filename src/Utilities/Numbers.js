const LNG_LAT_BUFFER = 0.015;

const generateRandomNumber = (from, to, fixedPlaces) =>
  (Math.random() * (to - from) + from).toFixed(fixedPlaces) * 1;

const generateRandomCoordinates = (neighbouringCoords) => {
  if (neighbouringCoords) {
    return [
      // Generates random longitude value
      generateRandomNumber(
        neighbouringCoords[0] - LNG_LAT_BUFFER,
        neighbouringCoords[0] + LNG_LAT_BUFFER,
        3
      ),
      // Generates random latitude value
      generateRandomNumber(
        neighbouringCoords[1] - LNG_LAT_BUFFER,
        neighbouringCoords[1] + LNG_LAT_BUFFER,
        3
      ),
    ];
  }

  return [generateRandomNumber(-180, 180, 3), generateRandomNumber(-90, 90, 3)];
};

// Do I need async?
export const generateRandomDataSet = async (
  numberRequired,
  initialViewport,
  customIndex
) => {
  const output = [];

  if (numberRequired > 0 && initialViewport) {
    while (output.length < numberRequired) {
      const lngLat = initialViewport.longitude
        ? generateRandomCoordinates([
            initialViewport.longitude,
            initialViewport.latitude,
          ])
        : generateRandomCoordinates(initialViewport);

      const uniqueId = (customIndex ? customIndex : output.length) + 1;

      const newEntry = {
        siteName: `Site # ${uniqueId}`,
        lngLat,
        longitude: lngLat[0],
        latitude: lngLat[1],
        uniqueId,
      };

      output.push(newEntry);
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
