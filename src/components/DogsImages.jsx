import React from "react";
import useFetch from "../hooks/useFetch";

export default function DogsImages({ dog }) {
  const { data, loading, error } = useFetch(
    `https://dog.ceo/api/breed/${dog}/images`
  );
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="grid grid-cols-5 gap-9 justify-center w-3/4 mx-auto">
          {data.message.map((u, i) => (
            <img key={i} className="w-36 h-36 justify-self-center object-cover" src={u} />
          ))}
        </div>
      )}
    </div>
  );
}
