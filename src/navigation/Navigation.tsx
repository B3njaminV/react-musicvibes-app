import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import LibraryNavigator from "./LibraryNavigator";
import ExploreNavigator from "./ExploreNavigator";
import SearchNavigator from "./SearchNavigator";
import TabBarIcon from "../components/TabBarIcon";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="LibraryTab" screenOptions={{ headerShown: false }}>
                <BottomTabNavigator.Screen name="ExploreTab" component={ExploreNavigator}
                                           options={{
                                               title: 'Explore',
                                               tabBarIcon: ({color}) => <TabBarIcon name="th-large" color={color}/>,
                                           }}/>
                <BottomTabNavigator.Screen name="LibraryTab" component={LibraryNavigator}
                                           options={{
                                               title: 'Library',
                                               tabBarIcon: ({color}) => <TabBarIcon name="music" color={color}/>,
                                           }}/>
                <BottomTabNavigator.Screen name="SearchTab" component={SearchNavigator}
                                           options={{
                                               title: 'Search',
                                               tabBarIcon: ({color}) => <TabBarIcon name="search" color={color}/>,
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}
