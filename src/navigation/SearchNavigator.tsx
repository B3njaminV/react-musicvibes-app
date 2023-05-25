import {createStackNavigator} from "@react-navigation/stack";
import ExploreScreen from "../screens/ExploreScreen";
import SearchScreen from "../screens/SearchScreen";

export default function SearchNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={SearchScreen}/>
        </Stack.Navigator>
    )
}
