import { Loader } from "../components/Loader";
import { useGetAstroImg } from "../hooks/useGetAstroImg";

export function AstronomyPicturePage() {
  const { pictures } = useGetAstroImg();

  return (
    <>
      {pictures ? (
        <ul>
          {pictures.map((picture) => (
            <li className="li-pages" key={picture.date}>
              <h2>{picture.title}</h2>
              <p>{picture.explanation}</p>
              <img alt={picture.title} src={picture.url} />
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </>
  );
}
