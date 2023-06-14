import {Playlist} from "../../model/Playlist";
import {PLAYLISTS_LIST} from "../constants";

export const setPlaylistsList = (playlistsList: Playlist[]) => {
    return {
        type: PLAYLISTS_LIST,
        payload: playlistsList,
    };
}
