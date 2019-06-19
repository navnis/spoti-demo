import {getSingleTrack} from '../../api/allApis'
import * as actionTypes from '../type'


export default function singleTrack(trackId){
    const payload = getSingleTrack(trackId)
    return{
        type : actionTypes.GET_SINGLE_TRACK,
        payload : payload
    }
    
}
