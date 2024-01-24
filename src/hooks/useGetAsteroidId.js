import { useState } from "react";
import { useEffect } from "react";
import { idsReferences } from "../services/IdsReferences";

export function useGetAsteroidId() {
  const [idReferences, setIdReferences] = useState([]);

  const getAsteroidId = async () => {
    try {
      const data = await idsReferences();
      setIdReferences(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAsteroidId();
  }, []);

  return { idReferences };
}
