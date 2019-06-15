import React, {Component} from 'react';
import Spotify from 'spotify-web-api-js'
//import './seacrchArtist.css';

const spotifyWebApi = new Spotify()

class Search extends Component {
constructor(props){
  super(props);
    const params = this.getHashParams()

  this.state ={
    loggedIn : params.access_token ? true : false,
    nowPlaying :{ 
        name : "Not Checked",
        image : ""
    }
  }

  if(params.access_token){
      spotifyWebApi.setAccessToken(params.access_token)
  }
}

//copied from auth-server/authorization_code/public/index.html
getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }


  getNowPlaying(){
    spotifyWebApi.getMyCurrentPlaybackState()
    .then( (response) => {
        // this.setState({
        //     nowPlaying :{
        //         name: response.item.name,
        //         image: response.item.album.image[0].url
        //     }
        // })
        console.log(response)
    })
  }

render(){
  return (
    <div className="mainSearch">
        <div>Now Playing: {this.state.nowPlaying.name}</div>
        <img src={this.state.nowPlaying.image} style={{width:100}}/>
        <button onClick={() =>this.getNowPlaying()}>Check now Playing</button>
    </div>
  )
};
}

export default Search;
