import { Loader } from "../components/Loader";
import { CopyId } from "../components/CopyId";
import { useGetAsteroidId } from "../hooks/useGetAsteroidId";

export function AsteroidIdPage() {
  const { idReferences } = useGetAsteroidId();

  return (
    <>
      {idReferences ? (
        <div className="div-asteroidId">
          <ul className="column-container">
            {idReferences.slice(0, 15).map((idReference) => (
              <li className="li-pages idsAsteroids" key={idReference.id}>
                <p>
                  Name: <span>{idReference.name}</span>
                </p>
                <p>
                  Neo reference ID: <span>{idReference.neo_reference_id}</span>
                </p>

                <CopyId idReference={idReference} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
