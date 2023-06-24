import {describe, expect, it} from "@jest/globals";
import {Playlist} from "../../../model/Playlist";
import {ADD_PLAYLIST, PLAYLISTS_LIST} from "../../constants";
import {setPlaylistAdd} from "../setPlaylistAdd";
import { v4 as uuid } from 'uuid';
import {LIBRARY_PLAYLISTS} from "../../../data/stub";
import {setPlaylistsList} from "../setPlaylistsList";

describe('test actions', () => {
    it('should create an playlist with ADD_PLAYLIST type', () => {
        const playlist = new Playlist(uuid(), "Sports", "Playlist to do sports")
        const expectation = {
            type: ADD_PLAYLIST,
            playlist: playlist
        }

        expect(setPlaylistAdd(playlist)).toEqual(expectation)
    });

    it('should load playlist list with LIBRARY_PLAYLISTS type', () => {
        const playlistList = LIBRARY_PLAYLISTS

        const expectation = {
            type: PLAYLISTS_LIST,
            payload: playlistList
        }

        expect(setPlaylistsList(playlistList)).toEqual(expectation)
    });
});
