import Album from "../model/Album";
import {Image, StyleSheet, Text, View} from "react-native";
import {ALBUM_COVER_LINK} from "./constants";

type AlbumDetailProps = {
    item: Album
}

export default function AlbumDetail(props: AlbumDetailProps) {
    const album = props.item;

    return (
        <View style={styles.container}>
            <Image testID="album-cover" source={{uri: ALBUM_COVER_LINK}} style={styles.cover}/>
            <Text testID="album-title" style={styles.title}> {album.title} </Text>
            <Text testID="album-artist" style={styles.title}> {album.artistName} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "2%",
        alignItems: "center"
    },
    cover: {
        width: 200,
        height: 200,
    },
    title: {
        fontWeight: "bold",
    }
});
