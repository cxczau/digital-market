const BUFFER = 50;

const generateRandomNumber = (from, to, fixedPlaces) =>
  (Math.random() * (to - from) + from).toFixed(fixedPlaces) * 1;

const generateRandomCoordinates = (neighbouringCoords) => {
  if (neighbouringCoords) {
    return [
      // Generates random longitude value
      generateRandomNumber(
        neighbouringCoords[0] - BUFFER,
        neighbouringCoords[0] + BUFFER,
        3
      ),
      // Generates random latitude value
      generateRandomNumber(
        neighbouringCoords[1] - BUFFER,
        neighbouringCoords[1] + BUFFER,
        3
      ),
    ];
  }

  return [generateRandomNumber(-180, 180, 3), generateRandomNumber(-90, 90, 3)];
};

export const generateRandomDataSet = (numberRequired, initialViewport) => {
  const output = [];

  if (numberRequired > 0 && initialViewport) {
    while (output.length < numberRequired) {
      const lngLat = initialViewport.longitude
        ? generateRandomCoordinates([
            initialViewport.longitude,
            initialViewport.latitude,
          ])
        : generateRandomCoordinates(initialViewport);

      const newEntry = {
        siteName: `Site # ${output.length + 1}`,
        lngLat,
        longitude: lngLat[0],
        latitude: lngLat[1],
        uniqueId: output.length + 1,
      };

      output.push(newEntry);
    }
  }

  return output;
};

/**
 *
 * @param {the array of data which holds the array} data
 * @param {hook that sets state for data} setData
 * @param {index of the array item to be jumbled} index
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

  randomisedIndexes.forEach((item, index) => {
    randomisedObject.push(actualElement[item]);
  });

  console.log(randomisedObject);

  actualData[index] = randomisedObject;
  setData(actualData);
};
