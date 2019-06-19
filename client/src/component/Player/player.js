import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getAlbums from '../../store/actions/getAlbumAction';

class Footer extends Component {

  // constructor(props){
  //   super(props)
    
  
  // }

render(){
  //styles for player
  const size = {
    width: '100%',
    height: 80,
  };
  const view = 'coverart'; // or ''list
  const theme = 'black'; // or 'white'
  //End of styles for player    

  console.log(this.props)
  return (

    <div className="player">
     <SpotifyPlayer
              uri={this.props.artist.singleTrack!="" ? this.props.artist.singleTrack :"spotify:track:16YdPF3ZGFIfouwajAhv6C"}
              size={size}
              view={view}
              theme={theme}
        />


    </div>
  )};
}


const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

// const mapDispatchToProps = dispatch =>{
//   return bindActionCreators({getAlbums}, dispatch) 
// }


export default connect(mapStateToProps)(Footer);


