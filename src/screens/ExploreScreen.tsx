import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import AlbumListItem from "../components/AlbumListItem";
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import {ALBUMS} from "../data/Stub";
import {ALBUM_FROM_EXPLORE} from "../navigation/constants";

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
                        <TouchableOpacity onPress={() => navigation.navigate(ALBUM_FROM_EXPLORE, {album: item})}>
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
                        <TouchableOpacity onPress={() => navigation.navigate(ALBUM_FROM_EXPLORE, {album: item})}>
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
                        <TouchableOpacity onPress={() => navigation.navigate(ALBUM_FROM_EXPLORE, {album: item})}>
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
