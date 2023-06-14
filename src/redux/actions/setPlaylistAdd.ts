import {ADD_PLAYLIST} from "../constants";
import {Playlist} from "../../model/Playlist";

export const setPlaylistAdd = (addedPlaylist: Playlist) => {
    return {
        type: ADD_PLAYLIST,
        playlist: addedPlaylist
    }
}
