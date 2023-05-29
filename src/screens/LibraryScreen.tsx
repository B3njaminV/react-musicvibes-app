import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import LibraryMenuItem from "../components/LibraryMenuItem";
import LibraryMenu from "../data/LibraryMenu";
import {useNavigation} from "@react-navigation/native";
import Album from "../data/Album";
import AlbumListItem from "../components/AlbumListItem";
import {ScrollView} from "react-native-gesture-handler";

const MENU_ITEM: LibraryMenu[] = [
    new LibraryMenu("music", "PlayLists", "PlaylistsFromLibrary"),
    new LibraryMenu("users", "Artists", "ArtistsFromLibrary"),
    new LibraryMenu("music", "Albums", "AlbumsFromLibrary"),
    new LibraryMenu("th-large", "Genres", "GenresFromLibrary"),
]

const ALBUMS: Album[] = [
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk')
]

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
                                  <TouchableOpacity onPress={() => navigation.navigate("AlbumFromLibrary", {album: item})}>
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
