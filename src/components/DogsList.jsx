import React from "react";
import useFetch from "../hooks/useFetch";

export default function DogsList({click}) {
  const { data, loading, error } = useFetch(
    "https://dog.ceo/api/breeds/image/random/9"
  );
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className=" grid grid-cols-3 mx-40 my-10 gap-10 ">
          {Object.values(data.message).map((dog, i) => (
            <div key={i} onClick={()=>click(dog.split("/")[4].split("-")[0])} className="justify-self-center h-56 w-56 bg-slate-100 flex flex-col justify-evenly items-center rounded-2xl cursor-pointer">
              <div
                className="h-3/4 w-3/4 bg-cover"
                style={{ backgroundImage: `url(${dog})` }}
              ></div>
              <p>{dog.split("/")[4]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
