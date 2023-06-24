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
            <Image source={{uri: ALBUM_COVER_LINK}} style={styles.cover}/>
            <Text style={styles.title}> {album.title} </Text>
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
