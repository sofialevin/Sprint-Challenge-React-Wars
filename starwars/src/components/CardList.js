import React from "react";
import CharCard from "./CharCard";

import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
`;

const CardList = (props) => {

  return (
    <StyledDiv>
      {
        props.charList.map((character, index) => <CharCard key={index} characterObj={character}/>)
      }
    </StyledDiv>
  );
};

export default CardList; 