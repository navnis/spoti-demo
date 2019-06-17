import {getSingleTrack} from '../../api/allApis'
import * as actionTypes from '../type'


export default function singleTrack(artistId){
    const payload = getSingleTrack(artistId)
    return{
        type : actionTypes.GET_SINGLE_TRACK,
        payload : payload
    }
    
}
