import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PLAYLISTS} from "../data/stub";
import LibraryMenuItem from "../components/LibraryMenuItem";
import React from "react";
import PlaylistListItem from "../components/PlaylistListItem";
import {useNavigation} from "@react-navigation/native";
import {PLAYLIST_FROM_LIBRARY} from "../navigation/constants";

export default function PlaylistsScreen() {
    const navigation = useNavigation()


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
