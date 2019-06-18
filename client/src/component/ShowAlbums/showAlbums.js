import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getTracks from '../../store/actions/getAlbumTracksAction';

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
    <div>
      <img src={album.albumImage} alt="Album Image"/>
      <div key={album.albumId} onClick={()=>props.getTracks(album.albumId)}> { album.albumName } </div> 
    </div>
   
  ))
  return {albums : albumsa }
  
}

render(){
  return (
    <div className="App">
     <h1>ShowAlbums</h1>
     { this.state.albums }
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
