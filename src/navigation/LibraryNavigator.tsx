import {createStackNavigator} from "@react-navigation/stack";
import LibraryScreen from "../screens/LibraryScreen";
import AlbumScreen from "../screens/AlbumScreen";

export default function LibraryNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Library">
            <Stack.Screen name="Library" component={LibraryScreen}/>
            <Stack.Screen name="Album" component={AlbumScreen}/>
        </Stack.Navigator>
    )
}
