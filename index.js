const SpotifyWebApi = require("spotify-web-api-node")
var SporifyWebApi = require("spotify-web-api-node")
var clientId = "a142758730284bceb4ccfadf31a698f2"
var clientSecret = "276ebcdea8764f079079368f37b2cc56"


//Generar Token de acceso
let spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret:clientSecret
})


const consultarSpotify = async(artista)=>{
    spotifyApi.clientCredentialsGrant().then(function(data){
    console.log('Tokedn generado',data.body['access_token'])
    spotifyApi.setAccessToken(data.body['access_token'])
    return spotifyApi.searchArtists(artista)
}).then(function(data){
    let artistas = data.body.artists.items
    artistas.forEach((artist) => {
        console.log(artist) 
    });
}).catch(function(error){
   console.log('Algo falló:', error, error.message)
})
}


consultarSpotify('U2')



// Get multiple albums

const consultarSpotifyAlbum = async(IDartista)=>{
    spotifyApi.clientCredentialsGrant().then(function(data){
    console.log('Tokedn generado',data.body['access_token'])
    spotifyApi.setAccessToken(data.body['access_token'])
    return  spotifyApi.getAlbum(IDartista)
    }).then(function(data){
    let verBody = data.body
    console.log(verBody)
    //console.log('Album information', data.body);
}).catch(function(error){
   console.log('Algo falló:', error, error.message)
})
}

consultarSpotifyAlbum('5U4W9E5WsYb2jUQWePT8Xm')
