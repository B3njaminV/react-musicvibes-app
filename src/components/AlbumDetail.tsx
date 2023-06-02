import Album from "../model/Album";
import {Image, StyleSheet, Text, View} from "react-native";

type AlbumDetailProps = {
    item: Album
}

export default function AlbumDetail(props: AlbumDetailProps) {
    const album = props.item;

    return (
        <View style={styles.container}>
            <Image source={require('../assets/podcast.jpg')} style={styles.cover}/>
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
