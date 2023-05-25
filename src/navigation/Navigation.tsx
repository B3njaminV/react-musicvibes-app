import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import LibraryNavigator from "./LibraryNavigator";
import ExploreNavigator from "./ExploreNavigator";
import SearchNavigator from "./SearchNavigator";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Library" screenOptions={{ headerShown: false }}>
                <BottomTabNavigator.Screen name="Explore" component={ExploreNavigator}
                                           options={{
                                               title: 'Explore',
                                               tabBarIcon: ({color}) => <TabBarIcon name="th-large" color={color}/>,
                                           }}/>
                <BottomTabNavigator.Screen name="Library" component={LibraryNavigator}
                                           options={{
                                               title: 'Library',
                                               tabBarIcon: ({color}) => <TabBarIcon name="music" color={color}/>,
                                           }}/>
                <BottomTabNavigator.Screen name="Search" component={SearchNavigator}
                                           options={{
                                               title: 'Search',
                                               tabBarIcon: ({color}) => <TabBarIcon name="search" color={color}/>,
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} {...props} />;
}
