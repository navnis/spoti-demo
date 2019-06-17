
import * as actionType from '../type'

const initialState = {
    accessToken : '',
    artistList:[],
    albumList:[],
    trackList:[],
    singleTrack:""
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case actionType.SET_ACCESS_KEY:
            return{
                ...state,
                accessToken : action.payload
               } 
               
        case actionType.GET_ARTIST_LIST:
            const finalArtists=[]
            const filterArtists = action.payload.artists
            const filterArtists2 = filterArtists.items
           
            for(i=0; i < filterArtists2.length; i++){
                const artist={
                    artistName:filterArtists2[i].name,
                    artistId:filterArtists2[i].id,
                    artistImage: filterArtists2[i].images.length!=0 ? filterArtists.items[i].images[2].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
                    artistUri:filterArtists2[i].uri                          
                }                
                finalArtists.push(artist)
            }

            return{
                ...state,
                artistList : finalArtists
            }

        case actionType.GET_ALBUM_LIST:
            const filterAlbums = action.payload.items
            const finalAlbums = [] 

            for(var i = 0 ; i < filterAlbums.length; i++ ){
             const albums={
                            albumName:filterAlbums[i].name,
                            albumId:filterAlbums[i].id,
                            albumImage:filterAlbums[i].images[2].url,
                            albumUri:filterAlbums[i].uri                          
                }                
                finalAlbums.push(albums)
            }


            return{
                ...state,
                albumList : finalAlbums
               } 

               
        case actionType.GET_TRACK_LIST:
                const filterTracks = action.payload.items
                const finalTracks = [] 
    
                for(var i = 0 ; i < filterTracks.length; i++ ){
                 const tracks={
                                trackName:filterTracks[i].name,
                                trackId:filterTracks[i].id,
                                trackUri:filterTracks[i].uri                          
                    }                
                    finalTracks.push(tracks)
                }

            return{
                ...state,
                trackList : finalTracks
            }

        case actionType.GET_SINGLE_TRACK:
            return{
                ...state,
                singleTrack : action.payload
            }
    }
   
    return state
}

export default reducer


// export function getAccessToken(){

// }