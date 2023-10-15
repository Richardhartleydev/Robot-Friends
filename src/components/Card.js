import React from "react";

const Card = ({ name, email, id }) => {
  return (
    // Old tachyons way of Styling - Use Tailwind in future
    // Template literal a new img, based on different JSON id
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
