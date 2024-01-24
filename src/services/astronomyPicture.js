export const astronomyPicture = async () => {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=aLTbUlyRkicuGqI78KDVrECYXZRYwYYx3m0DLEKL"
  );
  const data = await response.json();
  return data;
};
