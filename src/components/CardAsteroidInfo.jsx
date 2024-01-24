export function CardAsteroidInfo({ detail }) {
  return (
    <>
      <li className="li-pages asteroidInfo">
        <h2>
          Name:<span> {detail.name}</span>
        </h2>
        <strong>
          Id referece:<span> {detail.neo_reference_id}</span>
        </strong>
        <p>
          Potentially hazardous asteroid:{" "}
          {detail.is_potentially_hazardous_asteroid ? (
            <span>Yes</span>
          ) : (
            <span>No</span>
          )}
        </p>
        <p>
          Estimated minimun diameter (m):
          <span>
            {" "}
            {detail.estimated_diameter.meters.estimated_diameter_min}
          </span>
        </p>
        <p>
          Estimated maximum diameter (m):
          <span>
            {" "}
            {detail.estimated_diameter.meters.estimated_diameter_max}
          </span>
        </p>

        <h2>Close approach dates: </h2>

        <li className="li-infoasteroid">
          <strong>
            The first close approach date was:
            <span> {detail.close_approach_data[0].close_approach_date}</span>
          </strong>
          <p>
            Relative Velocity (km/h):
            <span>
              {" "}
              {
                detail.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              }
            </span>
          </p>
          <p>
            Orbiting body:
            <span> {detail.close_approach_data[0].orbiting_body}</span>{" "}
          </p>
        </li>

        <li className="li-infoasteroid">
          <strong>
            The predicted approach date is:
            <span>
              {" "}
              {
                detail.close_approach_data[
                  detail.close_approach_data.length - 1
                ].close_approach_date
              }
            </span>
          </strong>
          <p>
            Relative Velocity (km/h):
            <span>
              {" "}
              {
                detail.close_approach_data[
                  detail.close_approach_data.length - 1
                ].relative_velocity.kilometers_per_hour
              }
            </span>
          </p>
          <p>
            Orbiting body:
            <span>
              {" "}
              {
                detail.close_approach_data[
                  detail.close_approach_data.length - 1
                ].orbiting_body
              }
            </span>
          </p>
        </li>
      </li>
    </>
  );
}
