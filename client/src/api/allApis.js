import Spotify from 'spotify-web-api-js'
const spotifyWebApi = new Spotify()

//Spotify api to get artists on search
export const getSearch = (artistName) => {
  
 return spotifyWebApi.searchArtists(artistName, {limit: 10})

}

//Spotify api to get albums of choosen artist
export const getArtistAlbum = (artistId) => {
  
   return spotifyWebApi.getArtistAlbums(artistId, {limit: 10})
   
}

//Spotify api to get all tracks of choosen album
export const getAlbumTracks = (albumId) => {

  return spotifyWebApi.getAlbumTracks(albumId, {limit: 10})

}

//Spotify api to get single track choosen in album
export const getSingleTrack = (trackId) => {
   
   return spotifyWebApi.getTrack(trackId)
   
}


//Justin Beiber {artist Id}: "1uNFoZAHBGtllmzznpCI3s"
//Beleive Acoustic {ALbum Id} : "4yz9rO7Q1UC2rK5eLOxmS7"
//As Long As You Love Me - Acoustic Version {Track ID} :"1kN9UiyOSRVCrSc49ft0lp"