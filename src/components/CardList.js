import React from "react";
import Card from "./Card";

// Iterate over json and create an array of robots with the different values
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            username={robots[i].username}
            company={robots[i].company.name}
            website={robots[i].website}
          />
        );
      })}
      ;
    </div>
  );
};

export default CardList;
