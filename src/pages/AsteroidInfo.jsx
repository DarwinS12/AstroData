import { CardAsteroidInfo } from "../components/CardAsteroidInfo";
import { useGetAsteroidInfo } from "../hooks/useGetAsteroidInfo";
import { GiAsteroid } from "react-icons/gi";

export function AsteroidInfo() {
  const { details, getAsteroidInfo } = useGetAsteroidInfo();
  const hasDetails = details !== null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { idReference } = Object.fromEntries(new window.FormData(e.target));
    getAsteroidInfo(idReference);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="id-reference">Type the asteroid ID reference</label>
        <input
          autoComplete="off"
          name="idReference"
          placeholder="3542519"
          type="text"
        />
        <button>Search</button>
      </form>
      {hasDetails ? (
        <div className="asteroid-info">
          <ul>
            {details.map((detail) => (
              <CardAsteroidInfo detail={detail} key={detail.id} />
            ))}
          </ul>
        </div>
      ) : (
        <GiAsteroid className="IconAsteroInfo" size={200} />
      )}
    </>
  );
}
