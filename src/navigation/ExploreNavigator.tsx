import {createStackNavigator} from "@react-navigation/stack";
import ExploreScreen from "../screens/ExploreScreen";
import AlbumScreen from "../screens/AlbumScreen";
import {ALBUM_FROM_EXPLORE, EXPLORE_SCREEN} from "./constants";

export default function ExploreNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={EXPLORE_SCREEN}>
            <Stack.Screen name={EXPLORE_SCREEN} component={ExploreScreen} options={{title: "Explore"}}/>
            <Stack.Screen name={ALBUM_FROM_EXPLORE} component={AlbumScreen} options={{title: "Album"}}/>
        </Stack.Navigator>
    )
}
