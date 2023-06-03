import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PLAYLISTS} from "../data/stub";
import React, {useEffect} from "react";
import PlaylistListItem from "../components/PlaylistListItem";
import {useNavigation} from "@react-navigation/native";
import {PLAYLIST_ADD_EDIT, PLAYLIST_FROM_LIBRARY} from "../navigation/constants";

export default function PlaylistsScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                // @ts-ignore
                <Button onPress={() => navigation.navigate(PLAYLIST_ADD_EDIT)} title="Add"/>
            ),
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <FlatList data={PLAYLISTS}
                      renderItem={({item}) =>
                // @ts-ignore
                <TouchableOpacity onPress={() => navigation.navigate(PLAYLIST_FROM_LIBRARY)}>
                    <PlaylistListItem item={item}/>
                </TouchableOpacity>
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
