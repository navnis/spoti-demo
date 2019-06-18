import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAlbums from '../../store/actions/getAlbumAction';
import '../ShowArtists/showArtists.css'

let artista=[]
class ShowArtists extends Component {
constructor(props){
  super(props)
  this.state = {
    artists:[]
  }

}

static getDerivedStateFromProps(props, State) {
  console.log( props)
  artista = props.artist.artistList.map(artist =>(
    <div>
      <img src={artist.artistImage} alt="Artist Image"/>
      <div key={artist.artistId} onClick={()=>props.getAlbums(artist.artistId)}>{artist.artistName}</div>
    </div>
   
  ))
  return {artists : artista }
 
}

render(){
  return (
    <div className="artists">
     <h1>ShowArtists</h1>
     <div className="artistNamesContainer">
      {this.state.artists}
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
  return bindActionCreators({getAlbums}, dispatch) 
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowArtists);
