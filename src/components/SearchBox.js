import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pt1 pb3">
      <input
        className="pa3 ba br2 b--green bg-lightest-blue"
        type="search"
        placeholder="Search name here . . ."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
