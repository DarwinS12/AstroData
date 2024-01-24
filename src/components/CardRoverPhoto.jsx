export function CardRoverPhoto({ roversPhotos }) {
  return (
    <>
      {roversPhotos.slice(0, 1).map((roversPhoto) => (
        <li className="li-pages roverPhotos" key={roversPhoto.id}>
          <h3>
            Rover name: <span>{roversPhoto.rover.name}</span>
          </h3>
          <strong>
            Camera name: <span>{roversPhoto.camera.full_name}</span>
          </strong>
          <strong>
            Launch date: <span>{roversPhoto.rover.launch_date}</span>
          </strong>
          <strong>
            Landing date: <span>{roversPhoto.rover.landing_date}</span>
          </strong>
          <img src={roversPhoto.img_src} alt={roversPhoto.name} />
        </li>
      ))}
    </>
  );
}
