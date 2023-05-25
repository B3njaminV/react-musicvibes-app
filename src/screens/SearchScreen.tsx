import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Search Screen</Text>
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
