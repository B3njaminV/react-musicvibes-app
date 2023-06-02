import {createStackNavigator} from "@react-navigation/stack";
import LibraryScreen from "../screens/LibraryScreen";
import AlbumScreen from "../screens/AlbumScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ArtistsScreen from "../screens/ArtistsScreen";
import GenresScreen from "../screens/GenresScreen";
import PlaylistsScreen from "../screens/PlaylistsScreen";
import {
    ALBUM_FROM_LIBRARY,
    ALBUMS_FROM_LIBRARY,
    ARTISTS_FROM_LIBRARY,
    GENRES_FROM_LIBRARY, LIBRARY_SCREEN, PLAYLIST_FROM_LIBRARY,
    PLAYLISTS_FROM_LIBRARY
} from "./constants";
import PlaylistScreen from "../screens/PlaylistScreen";

export default function LibraryNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={LIBRARY_SCREEN}>
            <Stack.Screen name={LIBRARY_SCREEN} component={LibraryScreen}/>
            <Stack.Screen name={ALBUM_FROM_LIBRARY} component={AlbumScreen}/>
            <Stack.Screen name={ALBUMS_FROM_LIBRARY} component={AlbumsScreen}/>
            <Stack.Screen name={ARTISTS_FROM_LIBRARY} component={ArtistsScreen}/>
            <Stack.Screen name={GENRES_FROM_LIBRARY} component={GenresScreen}/>
            <Stack.Screen name={PLAYLISTS_FROM_LIBRARY} component={PlaylistsScreen}/>
            <Stack.Screen name={PLAYLIST_FROM_LIBRARY} component={PlaylistScreen}/>
        </Stack.Navigator>
    )
}
