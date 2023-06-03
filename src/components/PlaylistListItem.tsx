import {Playlist} from "../model/Playlist";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

type PlaylistListItemProps = {
    item: Playlist
}

export default function PlaylistListItem(props: PlaylistListItemProps) {
    const playlist = props.item

    return (
        <View style={styles.container}>
            <Image source={require('../assets/podcast.jpg')} style={styles.coverSize}/>
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
       width: 50,
       height: 50,
    }
})
