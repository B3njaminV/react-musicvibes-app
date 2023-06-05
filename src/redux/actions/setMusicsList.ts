import Song from "../../model/Song";
import {LIST_ALBUMS} from "../constants";

export const setMusicsList = (musicsList: Song[]) => {
    return {
        type: LIST_ALBUMS,
        payload: musicsList,
    };
}