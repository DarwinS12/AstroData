export const asteroidInfo = async (idReference) => {
  const response = await fetch(
    `https://api.nasa.gov/neo/rest/v1/neo/${idReference}?api_key=PChBmBrG5V6pRNed4d3u1IFMHzuPPOlcy7mUWP8k`
  );
  const data = await response.json();
  return data;
};
