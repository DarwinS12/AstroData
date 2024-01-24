import { ChaoticOrbit } from "@uiball/loaders";

export function Loader() {
  return (
    <div className="container-loader">
      <ChaoticOrbit size={25} speed={1.5} color="black" />
    </div>
  );
}
