import { Route, Routes } from "react-router-dom";
import { RoverPhotosPage } from "../pages/RoverPhotosPage";
import { AstronomyPicturePage } from "../pages/AstronomyPicturePage";
import { AsteroidInfo } from "../pages/AsteroidInfo";
import { AsteroidIdPage } from "../pages/AsteroidIdPage";
import { HomePage } from "../pages/HomePage";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="astronomyPicture" element={<AstronomyPicturePage />} />
        <Route path="roverPhotos" element={<RoverPhotosPage />} />
        <Route path="asteroidsId" element={<AsteroidIdPage/>}/> 
        <Route path="asteroidInfo" element={<AsteroidInfo />} />
      </Routes>
    </div>
  );
}
