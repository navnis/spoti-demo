import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getAllTracks from '../../store/actions/getAlbumTracksAction'


class ShowTracks extends Component {
render(){
  return (
    <div className="App">
     <button onClick={ () => this.props.getAllTracks("4yz9rO7Q1UC2rK5eLOxmS7") }>Show tracks</button>
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

