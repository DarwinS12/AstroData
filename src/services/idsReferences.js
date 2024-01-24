export const idsReferences = async () => {
  const response = await fetch(
    "https://api.nasa.gov/neo/rest/v1/feed?&api_key=aLTbUlyRkicuGqI78KDVrECYXZRYwYYx3m0DLEKL"
  );
  const data = await response.json();

  const asteroidsIds = data.near_earth_objects;

  const allRefIds = Object.values(asteroidsIds).flat();

  return allRefIds;
};
