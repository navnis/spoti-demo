import {getAlbumTracks} from '../../api/allApis'
import * as actionTypes from '../type'

export default function trackList(albumId){
    const payload = getAlbumTracks(albumId)
    return{
        type : actionTypes.GET_TRACK_LIST,
        payload : payload
    }
    
}