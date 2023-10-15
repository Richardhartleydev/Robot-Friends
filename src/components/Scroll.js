import React from "react";

// Can use JSX inline styles such as OverflowY (instead of overflow-y: (css))
// Use {props.children} for components that wrap others
const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
