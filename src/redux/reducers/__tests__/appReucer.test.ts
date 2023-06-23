import {describe, expect, it} from "@jest/globals";
import appReducer from "../appReducer";
import {Playlist} from "../../../model/Playlist";
import {v4 as uuid} from "uuid";
import {ADD_PLAYLIST} from "../../constants";

describe('test reducer', () => {
    let initialState = {
        libraryAlbums: [],
        libraryPlaylists: [],
    }

    it('should return initial state', () => {
        expect(appReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_PLAYLIST', () => {
        const playlist = new Playlist(uuid(), "Sports", "Playlist to do sports")
        expect(
            appReducer(initialState, {
                type: ADD_PLAYLIST,
                playlist,
            })
        ).toEqual({
            libraryAlbums: [],
            libraryPlaylists: [playlist],
        });
    });
});
