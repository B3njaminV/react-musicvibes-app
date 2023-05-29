import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useRoute} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import AlbumDetail from "../components/AlbumDetail";

export default function AlbumScreen() {
    const route = useRoute()
    // @ts-ignore
    const album = route.params.album

    return (
        <ScrollView>
            <View style={styles.container}>
                <AlbumDetail item={album}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    }
});
