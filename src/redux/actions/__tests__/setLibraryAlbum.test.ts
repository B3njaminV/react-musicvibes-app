import {describe, expect, it} from "@jest/globals";
import {LIBRARY_ALBUMS as LIBRARY_ALBUMS_STUB} from "../../../data/Stub";
import {setLibraryAlbumList} from "../setLibraryAlbumList";
import {LIBRARY_ALBUMS} from "../../constants";

describe('', () => {
    it('should load library albums with LIBRARY_ALBUMS type', () => {
        const albums = LIBRARY_ALBUMS_STUB

        const expectation = {
            type: LIBRARY_ALBUMS,
            payload: albums
        }

        expect(setLibraryAlbumList(albums)).toEqual(expectation);
    });
});
