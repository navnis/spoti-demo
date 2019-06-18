import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAlbums from '../../store/actions/getAlbumAction';


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
  artista = props.artist.artistList.map(artist =>(<div onClick={()=>props.getAlbums(artist.artistId)}>{artist.artistName}</div>))
  return {artists : artista }
 
}

render(){
  return (
    <div className="App">
     ShowArtists
     {/* {() => this.props.artist.artistList.map((artistNames)=>{<div>{artistNames.artistName}</div>})} */}
     {this.state.artists}
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
