//@ts-nocheck
import React, {useState} from 'react'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'

//GET https://api.spotify.com/v1/me/playlists
const spotifyData = {
    images: [{
        url: "https://mosaic.scdn.co/640/ab67616d0000b273276bab7245e47ad46ab51e14ab67616d0000b2739617e073fdf56fe1e89467b9ab67616d0000b273bec324cc4de2f3b955c8506cab67616d0000b273d95fce0780bab8bc232b231c"
    }],
    name: "Name of playlist",
    owner: {
        display_name: "Name of owner",
        external_urls: { 
            spotify: "link to spotify profile"
        }
    },
    tracks: {
        href: "link to spotify list, need auth token",
        total: 26
    } 
}


const Playlists = () => {
    return (
        <PlaylistCard image={spotifyData.images[0].url} name={spotifyData.name} tracks={spotifyData.tracks.total}/>
    )
}

export default Playlists
