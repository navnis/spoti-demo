import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getTracks from '../../store/actions/getAlbumTracksAction';
import '../ShowAlbums/showAlbums.css'

let albumsa = []
class ShowAlbums extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums:[]
    } 
  }
    
static getDerivedStateFromProps( props, State) {
  albumsa = props.artist.albumList.map( album =>(
    <div className="singleAlbum"  onClick={()=>props.getTracks(album.albumId)}>
     
        <img src={album.albumImage} alt="Album Image"/>
        <div className="albumDetails">
          <p className="albumName" key={album.albumId}>Artist: { album.albumArtist } </p> 
          <p>Album: {album.albumName}</p>
          <p>Songs: {album.albumSongs}</p>
        </div>
    </div>
   
  ))
  return {albums : albumsa }
  
}

render(){
  return (
    <div className="albums">
      <h5 className="headingAlbum">Albums</h5>
     <div className="albumWrapper">
        { this.state.albums }
     </div>
     
    </div>
  )};
}

const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({ getTracks }, dispatch) 
}

export default connect( mapStateToProps, mapDispatchToProps )( ShowAlbums );
