import { useState } from "react";
import { data } from "../Data/data";
import PlanTree from "./PlanTree";

export default function Travel() {
  const [plan, setPlan] = useState(data);
  const root = plan[0];

  const plantesId = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {plantesId.map((placeID) => (
          <PlanTree key={placeID} id={placeID} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
