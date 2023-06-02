import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import LibraryMenuItem from "../components/LibraryMenuItem";
import {useNavigation} from "@react-navigation/native";
import AlbumListItem from "../components/AlbumListItem";
import {ScrollView} from "react-native-gesture-handler";
import {ALBUMS, MENU_ITEM} from "../data/stub";
import {ALBUM_FROM_LIBRARY} from "../navigation/constants";

export default function LibraryScreen() {
    const navigation = useNavigation()

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.menu_container}>
                    <FlatList data={MENU_ITEM} renderItem={({item}) =>
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate(item.direction)}>
                            <LibraryMenuItem item={item}/>
                        </TouchableOpacity>
                    }/>
                </View>
                <View style={styles.album_container}>
                    <Text style={styles.title}> Latest add </Text>
                    <FlatList data={ALBUMS}
                              numColumns={2}
                              renderItem={({item}) =>
                                  // @ts-ignore
                                  <TouchableOpacity onPress={() => navigation.navigate(ALBUM_FROM_LIBRARY, {album: item})}>
                                      <AlbumListItem item={item}/>
                                  </TouchableOpacity>
                              }/>
                </View>
            </View>
        </ScrollView>
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
