import { Image, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function MusicItem({item}: { item: any }) {
    return (
        <View style={styles.MusicItemContainer}>
            <Image source={item.image} style={styles.MusicItemImage} />
            <Text style={styles.MusicItemTitle}>{item.title}</Text>
            <Text style={styles.MusicItemAuthor}>{item.author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MusicItemContainer: {
        marginRight: 12,
    },
    MusicItemImage: {
        width: 130,
        height: 130,
        borderRadius: 8,
    },
    MusicItemTitle: {
        marginTop: 8,
        fontWeight: 'bold',
    },
    MusicItemAuthor: {
        color: '#666',
    },

});

