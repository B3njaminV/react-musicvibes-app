import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LIBRARY_PLAYLISTS} from "../data/Stub";
import React, {useEffect} from "react";
import PlaylistListItem from "../components/PlaylistListItem";
import {useNavigation} from "@react-navigation/native";
import {PLAYLIST_ADD_EDIT, PLAYLIST_FROM_LIBRARY} from "../navigation/constants";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylistsList} from "../redux/actions/setPlaylistsList";
import {getLibraryPlaylists} from "../api/playlist";

export default function PlaylistsScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    // @ts-ignore
    const libraryPlaylists = useSelector(state => state.appReducer.libraryPlaylists)

    useEffect(() => {
        const loadLibraryPlaylists = async () => {
            // @ts-ignore
            await dispatch(getLibraryPlaylists())
        };
        loadLibraryPlaylists();
    }, [dispatch])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                // @ts-ignore
                <Button onPress={() => navigation.navigate(PLAYLIST_ADD_EDIT)} title="Add"/>
            ),
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <FlatList data={libraryPlaylists}
                      renderItem={({item}) =>
                // @ts-ignore
                <TouchableOpacity onPress={() => navigation.navigate(PLAYLIST_FROM_LIBRARY)}>
                    <PlaylistListItem item={item}/>
                </TouchableOpacity>
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
