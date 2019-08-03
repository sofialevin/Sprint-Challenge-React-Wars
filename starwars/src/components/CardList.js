import React from "react";

import CharCard from "./CharCard";

const CardList = (props) => {

  return (
    <div>
      {
        props.charList.map((character, index) => <CharCard key={index} characterObj={character}/>)
      }
    </div>
  );
};

export default CardList; 