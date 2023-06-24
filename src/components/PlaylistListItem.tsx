import {Playlist} from "../model/Playlist";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {PLAYLIST_COVER_LINK} from "./constants";

type PlaylistListItemProps = {
    item: Playlist
}

export default function PlaylistListItem(props: PlaylistListItemProps) {
    const playlist = props.item

    return (
        <View style={styles.container}>
            <Image source={{uri: PLAYLIST_COVER_LINK}} style={styles.coverSize}/>
            <Text> {playlist.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
    },

    coverSize: {
       width: 65,
       height: 65,
    }
})
