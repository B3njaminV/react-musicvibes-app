import Album from "../model/Album";
import {setLibraryAlbumList} from "../redux/actions/setLibraryAlbumList";
import {LIBRARY_ALBUMS} from "../data/stub";

export const getLibraryAlbums = () => {
    // @ts-ignore
    return async dispatch => {
        try {
            const libraryAlbumList : Album[] = LIBRARY_ALBUMS
            dispatch(setLibraryAlbumList(libraryAlbumList))
        } catch (error) {
            console.error(error)
        }
    }
}
