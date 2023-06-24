import {describe, expect, jest, test} from "@jest/globals";
import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./testReducer";
import {Provider} from "react-redux";
import {render, screen} from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import AlbumDetail from "../AlbumDetail";
import {ALBUM_COVER_LINK} from "../constants";

jest.useFakeTimers()

const store = configureStore({
    reducer: {
        // @ts-ignore
        appReducer: testReducer,
    },
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

// @ts-ignore
const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);

describe('<AlbumDetail/>', () => {
    test('Assert displayed values', () => {
       const expectedAlbum = store.getState().appReducer.libraryAlbums[0]

        render(
            <Wrapper>
                <AlbumDetail item={expectedAlbum}/>
            </Wrapper>
        )

        expect(screen.getByTestId('album-title')).toHaveTextContent(expectedAlbum.title)
        expect(screen.getByTestId('album-artist')).toHaveTextContent(expectedAlbum.artistName)
        expect(screen.getByTestId('album-cover')).toHaveProp("source", {uri: ALBUM_COVER_LINK})
    });
});
