import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-yellow-300 max-w-xs inline-block pb-3 m-2 rounded hover:scale-105 transition-all ">
      <img src={`https://robohash.org/${id}`} alt="robot photos" />

      <div className="text-center">
        <h1 className="font-bold">{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
