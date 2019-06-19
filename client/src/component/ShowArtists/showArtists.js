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
  artista = props.artist.artistList.map(artist =>(
    <div className="singleArtist"  onClick={()=>props.getAlbums(artist.artistId, artist.artistFullImage)}>
      <img src={artist.artistImage} alt="Artist Image"/>
      <div className="artistDetails">
        <p className="artistName" key={artist.artistId}>{artist.artistName}</p>
        <h5 className="artistGenres">Genre: {artist.artistGenres ? artist.artistGenres : "no data"}</h5>
        <h5 className="artistPopularity">Popularity: {artist.artistPopularity}%</h5>
        <h5 className="artistFollowers">Followers : <span className="followerNo">{artist.artistFollowers}</span></h5>
      </div>
     
    </div>
   
  ))
  return {artists : artista }
 
}

render(){
  return (
    <div className="artists">

     <div className="artistContainer">
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
