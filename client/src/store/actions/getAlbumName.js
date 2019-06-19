
import * as actionTypes from '../type'

export default function albumName(albumName, totalTracks){
    const payload = {name:albumName, noOfTrack: totalTracks}
    console.log("inside getProfile")
    return{
        type : actionTypes.GET_ALBUM_NAME,
        payload : payload
    }
    
}