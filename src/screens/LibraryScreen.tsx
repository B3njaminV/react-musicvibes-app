import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import LibraryMenuItem from "../components/LibraryMenuItem";
import {useNavigation} from "@react-navigation/native";
import AlbumListItem from "../components/AlbumListItem";
import {LIBRARY_ALBUMS, MENU_ITEM} from "../data/stub";
import {ALBUM_FROM_LIBRARY} from "../navigation/constants";
import {useSelector, useDispatch} from "react-redux";
import {getLibraryAlbums} from "../api/albums";

export default function LibraryScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    // @ts-ignore
    const libraryAlbums = useSelector(state => state.appReducer.libraryAlbums)

    useEffect(() => {
        const loadLibraryAlbums = async () => {
            // @ts-ignore
            await dispatch(getLibraryAlbums());
        };
        loadLibraryAlbums();
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <View style={styles.menu_container}>
                <FlatList data={MENU_ITEM} renderItem={({item}) =>
                    // @ts-ignore
                    <TouchableOpacity onPress={() => navigation.navigate(item.direction)}>
                        <LibraryMenuItem item={item}/>
                    </TouchableOpacity>
                }/>
            </View>
            <View style={styles.albums_container}>
                <Text style={styles.title}> Latest add </Text>
                <FlatList data={libraryAlbums}
                          numColumns={2}
                          horizontal={false}
                          contentContainerStyle={{alignItems: 'center'}}
                          renderItem={({item}) =>
                              // @ts-ignore
                              <TouchableOpacity onPress={() => navigation.navigate(ALBUM_FROM_LIBRARY, {album: item})}>
                                  <AlbumListItem item={item}/>
                              </TouchableOpacity>
                }/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    menu_container: {
        alignItems: "center"
    },
    albums_container: {
        flex: 1,
        width: '100%'
    },
    title: {
        fontSize: 20
    }
});
