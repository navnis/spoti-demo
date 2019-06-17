import React, {Component} from 'react';
import Spotify from 'spotify-web-api-js'
import 'antd/dist/antd.css';
//import './seacrchArtist.css';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import SpotifyPlayer from 'react-spotify-player';
// import * as actionTypes from '../../store/actions/action'
import getSearch from '../../store/actions/searchArtistAction';
import accessToken from '../../store/actions/accessTokenAction';

const spotifyWebApi = new Spotify()
const Search = Input.Search

class SearchArtist extends Component {


  componentDidMount(){
      this.props.accessToken()
  }




  saveArtists = (value) =>{
    console.log(value)
    this.props.getSearch(value)
    console.log(this.props.artist.artistList)
  }


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
      <div className="mainSearch">
          
          <button onClick={() => this.props.getSearch("justin")}>Check Artist</button>
          {/* <button onClick={this.getArtistAlbum}>Check Artist Albums</button> */}
          {/* <button onClick={this.getAlbumTracks}>Check Album Tracks</button> */}
          {/* <button onClick={this.getSingleTrack}>Check Track</button> */}
          <SpotifyPlayer
              uri="spotify:track:16YdPF3ZGFIfouwajAhv6C"
              size={size}
              view={view}
              theme={theme}
          />
          <Search

            placeholder="Search Artists"
            onSearch={(value)=>this.props.getSearch(value)}
            style={{ width: 200 }}
        />
        {console.log(this.props.artist)}
      </div>
    )
  };
}

const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({getSearch, accessToken}, dispatch) 
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist);
