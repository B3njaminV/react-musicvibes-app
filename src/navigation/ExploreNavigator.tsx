import {createStackNavigator} from "@react-navigation/stack";
import ExploreScreen from "../screens/ExploreScreen";

export default function ExploreNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Explore">
            <Stack.Screen name="Explore" component={ExploreScreen}/>
        </Stack.Navigator>
    )
}
