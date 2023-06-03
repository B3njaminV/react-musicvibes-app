import { Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import Album from "../model/Album";

type AlbumListItemProps = {
    item: Album
}

export default function AlbumListItem(props: AlbumListItemProps) {
    const album = props.item

    return (
        <View style={styles.container}>
            <Image source={require('../assets/podcast.jpg')} style={styles.cover}/>
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.artist}>{album.artistName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    cover: {
        width: 130,
        height: 130,
        borderRadius: 8,
    },
    title: {
        marginTop: 8,
        fontWeight: 'bold',
    },
    artist: {
        color: '#666',
    },
});

