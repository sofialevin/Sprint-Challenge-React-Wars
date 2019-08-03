import React from "react";

import Card from "./Card";

const CardList = (props) => {

  return (
    <div>
      {
        props.charList.map((character, index) => <Card key={index} characterObj={character}/>)
      }
    </div>
  );
};

export default CardList; 