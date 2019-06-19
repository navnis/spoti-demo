import React, {Component} from 'react';
import 'antd/dist/antd.css';
//import './seacrchArtist.css';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getSearch from '../../store/actions/searchArtistAction';
import accessToken from '../../store/actions/accessTokenAction';
import '../SearchArtists/searchArtists.css'

const Search = Input.Search

class SearchArtist extends Component {

//calling this function on first render to set access token
  componentDidMount(){
      this.props.accessToken()
  }


  render(){
   
    return (
      <div className="mainSearch">
         
          <Search
            placeholder="Search Artists"
            onSearch={(value)=>this.props.getSearch(value)}
            onChange ={(e) => e.target.value !="" ? this.props.getSearch(e.target.value) : console.log("please enter") }
            //style={{ width: 300 }}
          />
          <div className="login">
            <a href="http://localhost:8888"><button>Login to Spotify</button></a>
          </div>
         

        
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
