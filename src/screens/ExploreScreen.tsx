import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import AlbumListItem from "../components/AlbumListItem";
import Album from "../data/Album";
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";

const ALBUMS: Album[] = [
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk'),
    new Album("Alive 2007", require('../assets/podcast.jpg'), 'Daft  Punk')
]

export default function ExploreScreen() {
    const navigation = useNavigation()

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>A découvrir</Text>
                <FlatList
                    data={ALBUMS}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({item}) =>
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate("AlbumFromExplore")}>
                            <AlbumListItem item={item}/>
                        </TouchableOpacity>
                    }/>
                <Text style={styles.title}>Pour toi</Text>
                <FlatList
                    data={ALBUMS}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({item}) =>
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate("AlbumFromExplore")}>
                            <AlbumListItem item={item}/>
                        </TouchableOpacity>
                    }/>
                <Text style={styles.title}>Plus ...</Text>
                <FlatList
                    data={ALBUMS}
                    keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={({item}) =>
                        // @ts-ignore
                        <TouchableOpacity onPress={() => navigation.navigate("AlbumFromExplore")}>
                            <AlbumListItem item={item}/>
                        </TouchableOpacity>
                    }/>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
