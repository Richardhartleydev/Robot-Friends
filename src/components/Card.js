import React, { useState } from "react";

// Declare arguments to display on card from parsed JSON
const Card = ({ name, email, id, company, username, website }) => {
  // Set state
  const [openModal, setOpenModal] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  // Function that sets modal state
  const modal = () => {
    setOpenModal(!openModal);
    setUserDetails(e => !e);
  };

  return (
    <div
      className="robo-card bg-light-green dib br4 ma2 shadow-5 ph2 pb3 items-start pointer"
      // on click run the modal function
      onClick={modal}
    >
      <img
        src={`https://robohash.org/${id}?200x200`}
        alt="robofriends robots"
      />
      <h2>{name}</h2>
      {userDetails && (
        <div>
          <ul className="list tl">
            <li>
              <span className="b">Username:</span> {username}
            </li>
            <li>
              <span className="b">Company:</span> {company}
            </li>
            <li>
              <span className="b">Website:</span> {website}
            </li>
            <li>
              <span className="b">Email:</span> {email}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
