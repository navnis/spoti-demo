import React, {Component} from 'react';
import '../ShowArtistProfile/showArtistProfile.css'
import { connect } from 'react-redux';
class ShowArtistProfile extends Component {


render(){
  const sortData =this.props.artist
  
  return (
    <div className="artistProfile">
      <div className="headerDetails">
        <p>Artist </p>
        <h5>{sortData.albumArtistName ? sortData.albumArtistName : "Select Artist"}</h5>
       
      </div>
      <img src={this.props.artist.artistPic}/>
    </div>
  )};
}

const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

export default connect(mapStateToProps)(ShowArtistProfile);
