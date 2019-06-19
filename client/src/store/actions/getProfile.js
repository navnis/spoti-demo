
import * as actionTypes from '../type'

export default function artistPic(artistPic){
    const payload = artistPic
    console.log("inside getProfile")
    return{
        type : actionTypes.GET_ARTIST_PIC,
        payload : payload
    }
    
}