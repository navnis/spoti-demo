import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';


class Footer extends Component {


render(){
  //styles for player
  const size = {
    width: '100%',
    height: 80,
  };
  const view = 'coverart'; // or ''list
  const theme = 'black'; // or 'white'
  //End of styles for player    


  return (

    <div className="App">
     <button>player</button>
     <SpotifyPlayer
              uri="spotify:track:16YdPF3ZGFIfouwajAhv6C"
              size={size}
              view={view}
              theme={theme}
        />
    </div>
  )};
}

export default Footer;
