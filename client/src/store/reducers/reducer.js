
import * as actionType from '../type'

const initialState = {
    accessToken : '',
    artistList:[],
    albumList:[],
    trackList:[],
    artistPic:"",
    singleTrack:""
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case actionType.SET_ACCESS_KEY: //to set access key to spotify api
            return{
                ...state,
                accessToken : action.payload
               } 
               
        case actionType.GET_ARTIST_LIST: //to get get top artist names on search
           if(action.payload){
            const finalArtists=[]
            const filterArtists = action.payload.artists // declared extra variable to escape ....
            const filterArtists2 = filterArtists.items   //..... from three step Json data retrieving //
           
            //filtering data from api
            for(i=0; i < filterArtists2.length; i++){
                const artist={
                    artistName:filterArtists2[i].name,
                    artistId:filterArtists2[i].id,
                    artistImage: filterArtists2[i].images.length!=0 ? filterArtists.items[i].images[2].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
                    artistUri:filterArtists2[i].uri ,
                    artistFollowers: filterArtists2[i].followers.total,
                    artistGenres: filterArtists2[i].genres.slice(0,2).toString(),
                    artistPopularity: filterArtists2[i].popularity,
                    artistFullImage: filterArtists2[i].images.length!=0 ? filterArtists.items[i].images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
                }                
                finalArtists.push(artist)
            }
           
           // console.log(filterArtists)
            return{
                ...state,
                artistList : finalArtists
            }
           }

           return {...state}

        //Retrieving albums according to a single choosen artist
        case actionType.GET_ALBUM_LIST:
           if(action.payload){
            const filterAlbums = action.payload.items
            const finalAlbums = [] 

            //filtering data from api
            for(var i = 0 ; i < filterAlbums.length; i++ ){
             const albums={
                            albumName:filterAlbums[i].name,
                            albumId:filterAlbums[i].id,
                            albumImage:filterAlbums[i].images[1].url,
                            albumUri:filterAlbums[i].uri ,
                            albumSongs: filterAlbums[i].total_tracks,
                            albumArtist: filterAlbums[i].artists[0].name 
                                                  
                }                
                finalAlbums.push(albums)
            }
            console.log("inside album",action.payload )

            return{
                ...state,
                albumList : finalAlbums,
               // artistPic:action.artistPic
               } 
           }

            return{...state}
           

        //Retrieving tracks according to a single choosen album      
        case actionType.GET_TRACK_LIST:

               if(action.payload){
                const filterTracks = action.payload.items
                const finalTracks = [] 

                //filtering data from api
                for(var i = 0 ; i < filterTracks.length; i++ ){
                 const tracks={
                                trackName:filterTracks[i].name,
                                trackId:filterTracks[i].id,
                                trackUri:filterTracks[i].uri                          
                    }                
                    finalTracks.push(tracks)
                }
                console.log("inside track",action.payload )
                return{
                    ...state,
                    trackList : finalTracks
                }
               }

              

           


        case actionType.GET_SINGLE_TRACK:

        console.log("inside track",action.payload)
        if(action.payload){
            return{
                ...state,
                singleTrack : action.payload.uri
            }
        }
        return {...state}
           
    }
   
    return state
}

export default reducer


// export function getAccessToken(){

// }