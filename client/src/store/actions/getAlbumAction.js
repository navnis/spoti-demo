import {getArtistAlbum} from '../../api/allApis'
import * as actionTypes from '../type'

export default function albumList(artistId, pic){
    const payload = getArtistAlbum(artistId)
    return{
        type : actionTypes.GET_ALBUM_LIST,
        payload : payload,
        // artistPic : pic  
    }
    
}