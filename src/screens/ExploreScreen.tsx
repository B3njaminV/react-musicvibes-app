import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function ExploreScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Explore Screen</Text>
            </View>
            <Text>Mon super texte ...</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    }
});
