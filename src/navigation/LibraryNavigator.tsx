import {createStackNavigator} from "@react-navigation/stack";
import LibraryScreen from "../screens/LibraryScreen";
import AlbumScreen from "../screens/AlbumScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ArtistsScreen from "../screens/ArtistsScreen";
import GenresScreen from "../screens/GenresScreen";
import PlaylistsScreen from "../screens/PlaylistsScreen";

export default function LibraryNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Library">
            <Stack.Screen name="Library" component={LibraryScreen}/>
            <Stack.Screen name="AlbumFromLibrary" component={AlbumScreen}/>
            <Stack.Screen name="AlbumsFromLibrary" component={AlbumsScreen}/>
            <Stack.Screen name="ArtistsFromLibrary" component={ArtistsScreen}/>
            <Stack.Screen name="GenresFromLibrary" component={GenresScreen}/>
            <Stack.Screen name="PlaylistsFromLibrary" component={PlaylistsScreen}/>
        </Stack.Navigator>
    )
}
