const BUFFER = 0.5;

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
      const lngLat = initialViewport.longitude ? generateRandomCoordinates([
        initialViewport.longitude,
        initialViewport.latitude,
      ]) : generateRandomCoordinates(initialViewport);

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
