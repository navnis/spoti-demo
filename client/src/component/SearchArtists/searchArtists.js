import React, {Component} from 'react';
import Spotify from 'spotify-web-api-js'
//import './seacrchArtist.css';
import SpotifyPlayer from 'react-spotify-player';

const spotifyWebApi = new Spotify()

class Search extends Component {
constructor(props){
  super(props);
    // const params = this.getHashParams()

  this.state ={
    // loggedIn : params.access_token ? true : false,
    nowPlaying :{ 
        name : "Not Checked",
        image : ""
    }
  }

//   if(params.access_token){
//       console.log('inside testing access token0', params.access_token)
//       this.setState({
//           access_token: params.access_token
//       }) 
      
      
//       spotifyWebApi.setAccessToken(params.access_token)
//   }
}



componentDidMount(){
    this.getHashParams()
}

getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log('testing in hash params', hashParams)
    this.setState({
        access_token: hashParams.access_token
    })
    // return hashParams;
  }


  getNowPlaying = () => {
    //   this.getHashParams()
      console.log('testing inside get now playing', this.state.access_token)
    spotifyWebApi.setAccessToken(this.state.access_token)
    spotifyWebApi.getMyCurrentPlaybackState()
    .then(res => {
        console.log('testing response', res)
    })
    .catch(er => console.log('testing', er))
  }

  getSearch = () => {
      console.log('testing inside get now playing', this.state.access_token)
      spotifyWebApi.setAccessToken(this.state.access_token)
    spotifyWebApi.searchArtists('Justin', {limit: 30})
    .then(res => {
        console.log('artist response', res)

    })
    .catch(er => console.log('testing', er))
  }


  getArtistAlbum = () => {
    console.log('testing inside get now playing', this.state.access_token)
    spotifyWebApi.setAccessToken(this.state.access_token)
    spotifyWebApi.getArtistAlbums("1uNFoZAHBGtllmzznpCI3s", {limit: 30})
    .then(res => {
        console.log('getArtistAlbum response', res)
       
    })
    .catch(er => console.log('testing', er))
  }


getAlbumTracks = () => {
  console.log('testing inside get now playing', this.state.access_token)
  spotifyWebApi.setAccessToken(this.state.access_token)
  spotifyWebApi.getAlbumTracks("1RMfz6rbIyrQYChfcCoiJ4", {limit: 30})
  .then(res => {
      console.log('getAlbumTracks response', res)  
  })
  .catch(er => console.log('testing', er))
}


getSingleTrack = () => {
  console.log('testing inside get now playing', this.state.access_token)
  spotifyWebApi.setAccessToken(this.state.access_token)
  spotifyWebApi.getTrack("16YdPF3ZGFIfouwajAhv6C")
  .then(res => {
      console.log('getAlbumTracks response', res)  
  })
  .catch(er => console.log('testing', er))
}


render(){

    const size = {
        width: '100%',
        height: 80,
      };
      const view = 'coverart'; // or ''list
      const theme = 'black'; // or 'white'
  return (
    <div className="mainSearch">
        
        <button onClick={this.getSearch}>Check Artist</button>
        <button onClick={this.getArtistAlbum}>Check Artist Albums</button>
        <button onClick={this.getAlbumTracks}>Check Album Tracks</button>
        <button onClick={this.getSingleTrack}>Check Track</button>
        <SpotifyPlayer
            uri="spotify:track:16YdPF3ZGFIfouwajAhv6C"
            size={size}
            view={view}
            theme={theme}
        />
    </div>
  )
};
}

export default Search;
