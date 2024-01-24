import { GiMarsCuriosity } from "react-icons/gi";
import { ModalInfo } from "../components/ModalInfo";
import { useGetRoverPhoto } from "../hooks/useGetRoverPhoto";
import { CardRoverPhoto } from "../components/CardRoverPhoto";

export function RoverPhotosPage() {
  const { roversPhotos, getRoverPhoto } = useGetRoverPhoto();

  const handleSubmitRover = (e) => {
    e.preventDefault();

    const { roverName, cameraName } = Object.fromEntries(
      new window.FormData(e.target)
    );

    getRoverPhoto({ roverName, cameraName });
  };

  return (
    <div className="roverPhotosPage">
      <div className="div-roverForm">
        <form onSubmit={handleSubmitRover} className="form-rover-photo">
          <label htmlFor="roverName">Type rover name</label>
          <input
            autoComplete="off"
            placeholder="Spirit"
            name="roverName"
          ></input>
          <label htmlFor="cameraName">Type camera abbreviation name</label>
          <input
            autoComplete="off"
            placeholder="PANCAM"
            name="cameraName"
          ></input>
          <button>Search</button>
        </form>
      </div>

      <ModalInfo />

      <div className="div-roverPhotos">
        {roversPhotos ? (
          <ul>
            <CardRoverPhoto roversPhotos={roversPhotos} />
          </ul>
        ) : (
          <GiMarsCuriosity className="IconRoverPhoto" size={200} />
        )}
      </div>
    </div>
  );
}
