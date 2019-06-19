import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../AllCombine/allCombine.css'
import Search from '../../component/SearchArtists/searchArtists'
import Player from '../../component/Player/player'
import Artists from '../../component/ShowArtists/showArtists'
import ShowAlbumSongs from '../ShowAlbumSongs/showAlbumSongs'

class Combine extends Component {

render(){
  return (
    <div className="allCombine">

     <Search/>
     
     <Row className="middleContainer">
        <Col sm={3} md={3} className="contArtist">
          <Artists/>
        </Col>
        <Col sm={9} md={9} className="contAlbumSong">
          <ShowAlbumSongs/>
        </Col>    
     </Row> 
    
    <footer>
    <Player/>
    </footer>
    
    </div>
  )};
}

export default Combine;
