import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ArtistProfile from '../../component/ShowArtistProfile/showArtistProfile'
import Albums from '../../component/ShowAlbums/showAlbums'
import ShowTracks from '../../component/ShowTracks/showTracks'

class ShowAlbumSongs extends Component {

render(){
  return (
    <div className="ShowAlbumSongs">
     <ShowTracks/>
    </div>
  )};
}

export default ShowAlbumSongs;
