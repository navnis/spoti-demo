import React, {Component} from 'react';
import Spotify from 'spotify-web-api-js'
//import './seacrchArtist.css';

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
//copied from auth-server/authorization_code/public/index.html
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
    //   .then(res => con   le.   log('inside res for set token', res))
    spotifyWebApi.getMyCurrentPlaybackState()
    .then(res => {
        console.log('testing response', res)
        // this.setState({
        //     nowPlaying :{
        //         name: response.item.name,
        //         image: response.item.album.image[0].url
        //     }
        // })
        // console.log(response)
    })
    .catch(er => console.log('testing', er))
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
