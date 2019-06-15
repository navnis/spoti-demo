import React, {Component} from 'react';
import SearchArtist from './component/searchArtist'
import logo from './logo.svg';
import './App.css';

class App extends Component {


render(){
  return (
    <div className="App">
      <a href="http://localhost:8888"><button>Login to Spotify</button></a>
      <SearchArtist />
    </div>
  )};
}

export default App;
