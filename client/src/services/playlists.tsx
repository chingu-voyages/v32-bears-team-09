import axios from "axios";


//return all playlists from spotify account
//GET https://api.spotify.com/v1/me/playlists
const getPlaylists = async () => {
    let response = await axios.get('localhost:3000/items');
    return response
}

//Add another user's playlist to own library
const addPlaylist = () => {

}

//Delete playlist from library
const deletePlaylist =() => {

}

//like another user's playlist
const likePlaylist = () => {

}

const playlists = {
    getPlaylists,
    addPlaylist,
    deletePlaylist,
    likePlaylist
}

export default playlists