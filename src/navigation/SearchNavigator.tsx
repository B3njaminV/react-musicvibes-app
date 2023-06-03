import {createStackNavigator} from "@react-navigation/stack";
import ExploreScreen from "../screens/ExploreScreen";
import SearchScreen from "../screens/SearchScreen";
import {SEARCH_SCREEN} from "./constants";

export default function SearchNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name={SEARCH_SCREEN} component={SearchScreen} options={{title: "Search"}}/>
        </Stack.Navigator>
    )
}
