import {LIBRARY_ALBUMS, LIBRARY_PLAYLISTS} from "../../data/stub";
import appReducer from "../../redux/reducers/appReducer";

const initialState = {
    libraryAlbums: LIBRARY_ALBUMS,
    libraryPlaylists: LIBRARY_PLAYLISTS,
}

// @ts-ignore
export default testReducer = (state = initialState, action: String) => {
    // @ts-ignore
    return appReducer(initialState, action)
}
