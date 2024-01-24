import { useEffect, useState } from "react";
import { astronomyPicture } from "../services/AstronomyPicture";

export function useGetAstroImg() {
  const [pictures, setPictures] = useState();

  const getAstroPicture = async () => {
    try {
      const data = await astronomyPicture();
      setPictures([data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAstroPicture();
  }, []);

  console.log(pictures);

  return { pictures };
}
