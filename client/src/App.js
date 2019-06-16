import React, {Component} from 'react';
import AllCombine from './container/AllCombine/allCombine'
import logo from './logo.svg';
import './App.css';

class App extends Component {


render(){
  return (
    <div className="App">
      <a href="http://localhost:8888"><button>Login to Spotify</button></a>
      <AllCombine />
    </div>
  )};
}

export default App;
