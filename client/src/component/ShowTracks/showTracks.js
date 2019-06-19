import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getSingleTrack from '../../store/actions/getSingleTrackAction'
import '../ShowTracks/showTracks.css'


let tracksa
class ShowTracks extends Component {

  constructor(props){
    super(props)
    this.state = {
      tracks:[]
    }
    
  }


  static getDerivedStateFromProps( props, state) {
    tracksa = props.artist.trackList.map( track =>(<div onClick={()=>props.getSingleTrack(track.trackId)} className="singleTrack" key={track.trackId}> { track.trackName } </div> ))
    return {tracks : tracksa }
    
  }


render(){
  return (
    <div className="tracks">
      <div className="trackWrapper">
        <p>Album Name</p>
        {this.state.tracks}
      </div>
    </div>
  )};
}

const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({getSingleTrack}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTracks);

