import './App.css';
import Row from './Row';
import React, {useState} from 'react';
import requests from './requests'

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
