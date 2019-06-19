import Spotify from 'spotify-web-api-js'
const spotifyWebApi = new Spotify()

//Spotify api to get artists on search
export const getSearch = async(artistName) => {
  
   try {
      return await spotifyWebApi.searchArtists(artistName, {limit: 5})
   }
   catch(err) {
      alert("Access token expired. Please login again")
      return null
   } 

}

//Spotify api to get albums of choosen artist
export const getArtistAlbum = async(artistId) => {
  try{
      return await spotifyWebApi.getArtistAlbums(artistId, {limit: 8})
  }
  catch(err) {
      alert("Access token expired. Please login again")
      return null
 } 
   
}

//Spotify api to get all tracks of choosen album
export const getAlbumTracks = async(albumId) => {
   try{
      return await spotifyWebApi.getAlbumTracks(albumId, {limit: 6})
   }
   catch(err){
      alert("Access token expired. Please login again")
      return null
   }

}

//Spotify api to get single track choosen in album
export const getSingleTrack = async(trackId) => {
   
   try{
      return await spotifyWebApi.getTrack(trackId)
   }
   catch(err){
      alert("Access token expired. Please login again")
      return null
   }
   
}


//Justin Beiber {artist Id}: "1uNFoZAHBGtllmzznpCI3s"
//Beleive Acoustic {ALbum Id} : "4yz9rO7Q1UC2rK5eLOxmS7"
//As Long As You Love Me - Acoustic Version {Track ID} :"1kN9UiyOSRVCrSc49ft0lp"