import * as actionType from '../type'
import Spotify from 'spotify-web-api-js'

const spotifyWebApi = new Spotify()

export default function getHashParams(){
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
   
    spotifyWebApi.setAccessToken(hashParams.access_token)
    return {
        type: actionType.SET_ACCESS_KEY ,
        payload : hashParams.access_token
    };
  }


  