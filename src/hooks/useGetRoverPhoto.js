import { roverPhotos } from "../services/roverPhotos";
import { useRef, useState } from "react";

export function useGetRoverPhoto() {
  const [roversPhotos, setRoversPhotos] = useState();
  const previousState = useRef({});

  const getRoverPhoto = async ({ roverName, cameraName }) => {
    if (
      roverName === previousState.current.roverName &&
      cameraName === previousState.current.cameraName
    )
      return;

    try {
      const names = {roverName, cameraName} ;
      previousState.current = names;
      const data = await roverPhotos({ roverName, cameraName });
      setRoversPhotos(data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  return { getRoverPhoto, roversPhotos };
}
