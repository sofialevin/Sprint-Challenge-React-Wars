import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, List } from 'semantic-ui-react';

const CharCard = (props) => {

 return (
  <Card>
    <Card.Content header={props.characterObj.name} />
    <Card.Content>
      <List>
        <List.Item>Birth Year: {props.characterObj.birth_year}</List.Item>
        <List.Item>Gender: {props.characterObj.gender}</List.Item>
        <List.Item>Eye Color: {props.characterObj.eye_color}</List.Item>
      </List>
    </Card.Content>
    <Card.Content extra>
      <Icon name='film' />
      Films: {props.characterObj.films.length}
    </Card.Content>
  </Card>
)}

export default CharCard; 