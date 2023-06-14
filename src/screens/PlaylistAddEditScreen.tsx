import {Button, Image, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setPlaylistAdd} from "../redux/actions/setPlaylistAdd";
import {Playlist} from "../model/Playlist";
import { v4 as uuid } from 'uuid';

export default function PlaylistAddEditScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    let playlist = {
        name: '',
        desc: ''
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                // @ts-ignore
                <Button onPress={() => {
                    const addPlaylist = () => {
                        dispatch(setPlaylistAdd(new Playlist(uuid(), playlist.name, playlist.desc)))
                    };
                    addPlaylist();
                    navigation.goBack();
                }} title="Save"/>
            ),
        })
    }, [navigation, dispatch])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image source={require('../assets/podcast.jpg')} style={styles.imageSize}/>
                <TextInput onEndEditing={(e) => playlist.name = e.nativeEvent.text} placeholder="Playlist name"/>
                <TextInput onEndEditing={(e) => playlist.desc = e.nativeEvent.text} placeholder="Add a description"/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    imageSize: {
        width: 100,
        height: 100,
    }
});
