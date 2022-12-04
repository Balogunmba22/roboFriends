import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardArray = robots.map((robot, index) => {
    return (
      <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
    );
  });

  return <div>{cardArray}</div>;
};

export default CardList;
