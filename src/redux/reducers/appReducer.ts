import {ADD_PLAYLIST, LIBRARY_ALBUMS, PLAYLISTS_LIST} from "../constants";

const initialState = {
    libraryAlbums: [],
    libraryPlaylists: [],
}

// @ts-ignore
export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIBRARY_ALBUMS:
            return {...state, libraryAlbums: action.payload}
        case PLAYLISTS_LIST:
            return {...state, libraryPlaylists: action.payload};
        case ADD_PLAYLIST:
            // @ts-ignore
            state.libraryPlaylists.push(action.addedLibraryPlaylist)
            return {...state}
        default:
            return state;
    }
}
