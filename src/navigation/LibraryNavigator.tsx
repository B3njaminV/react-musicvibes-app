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
    GENRES_FROM_LIBRARY, LIBRARY_SCREEN, PLAYLIST_ADD_EDIT, PLAYLIST_FROM_LIBRARY,
    PLAYLISTS_FROM_LIBRARY
} from "./constants";
import PlaylistScreen from "../screens/PlaylistScreen";
import {Button} from "react-native";
import PlaylistAddEditScreen from "../screens/PlaylistAddEditScreen";

export default function LibraryNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={LIBRARY_SCREEN}>
            <Stack.Screen name={LIBRARY_SCREEN}
                          component={LibraryScreen}
                          options={{title: "Library"}}/>

            <Stack.Screen name={ALBUM_FROM_LIBRARY}
                          component={AlbumScreen}
                          options={{title: "Album"}}/>

            <Stack.Screen name={ALBUMS_FROM_LIBRARY}
                          component={AlbumsScreen}
                          options={{title: "Albums"}}/>

            <Stack.Screen name={ARTISTS_FROM_LIBRARY}
                          component={ArtistsScreen}
                          options={{title: "Artists"}}/>

            <Stack.Screen name={GENRES_FROM_LIBRARY}
                          component={GenresScreen}
                          options={{title: "Genres"}}/>

            <Stack.Screen name={PLAYLISTS_FROM_LIBRARY}
                          component={PlaylistsScreen}
                          options={() => ({
                              title: "Playlists",
                              headerRight: () => (
                                  <Button title="Add" />
                              ),
                          })}/>

            <Stack.Screen name={PLAYLIST_FROM_LIBRARY}
                          component={PlaylistScreen}/>

            <Stack.Screen name={PLAYLIST_ADD_EDIT}
                          component={PlaylistAddEditScreen}
                          options={{title: "Add a playlist"}}/>
        </Stack.Navigator>
    )
}
