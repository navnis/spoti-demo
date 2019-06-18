import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ArtistProfile from '../../component/ShowArtistProfile/showArtistProfile'
import Albums from '../../component/ShowAlbums/showAlbums'
import ShowTracks from '../../component/ShowTracks/showTracks'

class ShowAlbumSongs extends Component {

render(){
  return (
    <div className="ShowAlbumSongs">
      <Container>
        <div className="profileHeader">
          <ArtistProfile/>
        </div>
        <Row>
          <Col sm={8} md={8}>
            <Albums />
          </Col>

          <Col sm={4} md={4}>
            <ShowTracks/>
          </Col>
        </Row>
      </Container>     
    </div>
  )};
}

export default ShowAlbumSongs;
