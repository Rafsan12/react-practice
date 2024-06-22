/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export default function PlanTree({ id, placesById }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title} <button>Complete</button>
        {childIds.length > 0 && (
          <ol>
            {childIds.map((id) => (
              <PlanTree key={id} id={id} placesById={placesById} />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
