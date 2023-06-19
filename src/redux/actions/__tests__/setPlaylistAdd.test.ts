import {describe, expect, it} from "@jest/globals";
import {Playlist} from "../../../model/Playlist";
import {ADD_PLAYLIST} from "../../constants";
import {setPlaylistAdd} from "../setPlaylistAdd";
import { v4 as uuid } from 'uuid';

describe('test actions', () => {
    it('should create an playlist with ADD_PLAYLIST type', () => {
        const playlist = new Playlist(uuid(), "Sports", "Playlist to do sports")
        const expectation = {
            type: ADD_PLAYLIST,
            playlist: playlist
        }

        expect(setPlaylistAdd(playlist)).toEqual(expectation)
    });
});
