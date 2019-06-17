
import {getSearch} from '../../api/allApis'
import * as actionTypes from '../type'

export default function artistList(artistName){
    const payload = getSearch(artistName)
    return{
        type : actionTypes.GET_ARTIST_LIST,
        payload : payload
    }
    
}
// getSearch = (artistName) => {
//    // console.log('testing inside get now playing', this.state.access_token)
//   //  spotifyWebApi.setAccessToken(this.state.access_token)
//   spotifyWebApi.searchArtists(artistName, {limit: 10})
//   .then(res => {
//       console.log('artist response', res)
//   })
//   .catch(er => console.log('testing', er))
// }