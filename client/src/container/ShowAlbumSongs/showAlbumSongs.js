import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ArtistProfile from '../../component/ShowArtistProfile/showArtistProfile'
import Albums from '../../component/ShowAlbums/showAlbums'
import ShowTracks from '../../component/ShowTracks/showTracks'
import '../ShowAlbumSongs/showAlbumSongs.css'

class ShowAlbumSongs extends Component {

render(){
  return (
    <div className="showAlbumSongs">
     
        <div className="profileHeader">
          <ArtistProfile/>
        </div>
        <Row>
          <Col className="allAlbums" sm={8} md={8}>
            <Albums />
          </Col>

          <Col className="allTracks" sm={4} md={4}>
            <ShowTracks/>
          </Col>
        </Row>
        
    </div>
  )};
}

export default ShowAlbumSongs;
