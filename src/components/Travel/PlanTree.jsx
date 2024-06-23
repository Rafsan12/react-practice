/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
export default function PlanTree({ id, placesById, onComplete, parentId }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}{" "}
        <button onClick={() => onComplete(parentId, id)}>Complete</button>
        {childIds.length > 0 && (
          <ol>
            {childIds.map((childId) => (
              <PlanTree
                key={childId}
                id={childId}
                parentId={id}
                placesById={placesById}
                onComplete={onComplete}
              />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
