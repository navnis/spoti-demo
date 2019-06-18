import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import getAlbums from '../../store/actions/getAlbumAction';

let albumsa = []
class ShowAlbums extends Component {
  constructor(props){
    super(props)
    this.state = {
      albums:[]
    }
    
    }
    
    static getDerivedStateFromProps(props, State) {
      console.log( props)
      albumsa = props.artist.albumList.map(album =>(<div>{album.albumName}</div>))
      return {albums : albumsa }
     
    }

render(){
  return (
    <div className="App">
     <button onClick={ () => this.props.getAlbums( "1uNFoZAHBGtllmzznpCI3s" ) }>ShowAlbums</button>
     {this.state.albums}
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
