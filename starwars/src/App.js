import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import CardList from './components/CardList';
import PaginationButtons from './components/PaginationButtons';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setcharacters] = useState([]);
  const [requestURL, setRequestURL] = useState('https://swapi.co/api/people/');
  const [pages, setPages] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    useEffect(() => {
      axios
        .get(requestURL)
        .then(result => {
          console.log(result);
          setcharacters(result.data.results);
          setPages(Math.ceil(result.data.count / 10))
        })
        .catch(err => {
          console.log(err);
        });
    }, [requestURL])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardList charList={characters}/>
      <PaginationButtons noPages={pages} setRequestURL={setRequestURL}/>
    </div>
  );
}

export default App;
