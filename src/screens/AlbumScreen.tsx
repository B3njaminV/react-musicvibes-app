import {Image, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import AlbumDetail from "../components/AlbumDetail";

export default function AlbumScreen() {
    const route = useRoute()
    const navigation = useNavigation()

    // @ts-ignore
    const album = route.params.album

    useEffect(() => {
        navigation.setOptions({ title: album.title })
    }, [navigation])

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
