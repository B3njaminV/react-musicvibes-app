import {LIBRARY_PLAYLISTS} from "../data/stub";
import {Playlist} from "../model/Playlist";
import {setPlaylistsList} from "../redux/actions/setPlaylistsList";

export const getLibraryPlaylists = () => {
    // @ts-ignore
    return async dispatch => {
        try {
            const libraryPlaylistList : Playlist[] = LIBRARY_PLAYLISTS
            dispatch(setPlaylistsList(libraryPlaylistList))
        } catch (error) {
            console.error(error)
        }
    }
}
