import {LIBRARY_ALBUMS} from "../constants";
import Album from "../../model/Album";

export const setLibraryAlbumList = (libraryAlbumList: Album[]) => {
    return {
        type: LIBRARY_ALBUMS,
        payload: libraryAlbumList,
    };
}
