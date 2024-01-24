export const roverPhotos = async ({ roverName, cameraName }) => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&camera=${cameraName}&api_key=aLTbUlyRkicuGqI78KDVrECYXZRYwYYx3m0DLEKL`
  );
  const data = await response.json();
  return data;
};
