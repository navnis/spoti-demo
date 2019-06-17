import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getAlbums from '../../store/actions/getAlbumAction';

class ShowAlbums extends Component {


render(){
  return (
    <div className="App">
     <button onClick={ () => this.props.getAlbums( "1uNFoZAHBGtllmzznpCI3s" ) }>ShowAlbums</button>
    </div>
  )};
}

const mapStateToProps = ({ artist }) =>{
  return {
    artist
  } 
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({getAlbums}, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAlbums);
