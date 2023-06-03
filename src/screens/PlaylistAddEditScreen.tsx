import {Image, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React from "react";

export default function PlaylistAddEditScreen() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image source={require('../assets/podcast.jpg')} style={styles.imageSize}/>
                <TextInput placeholder="Playlist name"/>
                <TextInput placeholder="Add a description"/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    imageSize: {
        width: 100,
        height: 100,
    }
});
