import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getAllTracks from '../../store/actions/getAlbumTracksAction'


let tracksa
class ShowTracks extends Component {

  constructor(props){
    super(props)
    this.state = {
      tracks:[]
    }
    
  }


  static getDerivedStateFromProps( props, State) {
    tracksa = props.artist.trackList.map( track =>(<div key={track.trackId}> { track.trackName } </div> ))
    return {tracks : tracksa }
    
  }


render(){
  return (
    <div className="tracks">
     <h1 >Show tracks</h1>
     {this.state.tracks}
    </div>
  )};
}

const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({getAllTracks}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTracks);

