import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import LibraryMenuItem from "../components/LibraryMenuItem";
import LibraryMenu from "../data/LibraryMenu";
import {useNavigation} from "@react-navigation/native";

const MENU_ITEM: LibraryMenu[] = [
    new LibraryMenu("music", "PlayLists"),
    new LibraryMenu("users", "Artists"),
    new LibraryMenu("music", "Albums"),
    new LibraryMenu("th-large", "Genres"),
]

export default function LibraryScreen() {
    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <View style={styles.menu_container}>
                <FlatList data={MENU_ITEM} renderItem={({item}) =>
                    // @ts-ignore
                    <TouchableOpacity onPress={() => navigation.navigate("Album")}>
                        <LibraryMenuItem item={item}/>
                    </TouchableOpacity>
                }/>
            </View>
            <View style={styles.album_container}>
                <Text style={styles.title}> Latest add </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu_container: {
        alignItems: "center"
    },
    album_container: {
        alignItems: "flex-start"
    },
    title: {
        fontSize: 20
    }
});
