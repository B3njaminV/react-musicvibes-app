import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import MusicItem from "../components/MusicItem";

export default function ExploreScreen() {

    const musics = [
        {
            id: '1',
            title: 'Music',
            subtitle: 'Sous-titre',
            author: 'Auteur',
            image: require('../assets/podcast.jpg'),
        },
        {
            id: '',
            title: 'Music ',
            subtitle: 'Sous-titre ',
            author: 'Auteur ',
            image: require('../assets/podcast.jpg'),
        },
        {
            id: '3',
            title: 'Music ',
            subtitle: 'Sous-titre ',
            author: 'Auteur ',
            image: require('../assets/podcast.jpg'),
        },
        {
            id: '4',
            title: 'Music ',
            subtitle: 'Sous-titre ',
            author: 'Auteur ',
            image: require('../assets/podcast.jpg'),
        },
        {
            id: '5',
            title: 'Music ',
            subtitle: 'Sous-titre ',
            author: 'Auteur ',
            image: require('../assets/podcast.jpg'),
        },
        {
            id: '6',
            title: 'Music',
            subtitle: 'Sous-titre',
            author: 'Auteur',
            image: require('../assets/podcast.jpg'),
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>A découvrir</Text>
            <FlatList
                data={musics}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={MusicItem}
            />
            <Text style={styles.title}>Pour toi</Text>
            <FlatList
                data={musics}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={MusicItem}
            />
            <Text style={styles.title}>Plus ...</Text>
            <FlatList
                data={musics}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={MusicItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
