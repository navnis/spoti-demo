import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Search from '../../component/SearchArtists/searchArtists'
import Player from '../../component/Player/player'
import Artists from '../../component/ShowArtists/showArtists'
import Albums from '../../component/ShowAlbums/showAlbums'
import ShowAlbumSongs from '../ShowAlbumSongs/showAlbumSongs'

class Combine extends Component {

render(){
  return (
    <div className="allCombine">
     <Search/>
     <Albums />
     <ShowAlbumSongs/>
    </div>
  )};
}

export default Combine;
