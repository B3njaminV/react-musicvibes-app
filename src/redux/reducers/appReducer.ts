import {LIST_ALBUMS} from "../constants";

const initialState = {
    musics: [],
    favoriteMusics: [],
}

// @ts-ignore
export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALBUMS:
            // @ts-ignore
            state.favoriteMusics.push(action.nounours)
            return {...state};
        default:
            return state;
    }
}