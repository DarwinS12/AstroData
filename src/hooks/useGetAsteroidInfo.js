import { useRef, useState } from "react";
import { asteroidInfo } from "../services/AsteroidInfo";

export function useGetAsteroidInfo() {
  const [details, setDetails] = useState(null);
  const previousSearch = useRef();

  const getAsteroidInfo = async (idReference) => {
    if (idReference === previousSearch.current) return;
    try {
      previousSearch.current = idReference;
      const data = await asteroidInfo(idReference);
      setDetails([data]);
    } catch (error) {
      console.error(error);
    }
  };

  return { details, getAsteroidInfo };
}
