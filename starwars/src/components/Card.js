import React from "react";

const Card = (props) => {

  return (
    <div>
      {
          <p>{props.characterObj.name}</p>
      }
    </div>
  );
};

export default Card; 