import {StyleSheet, Text, View} from "react-native";
import React from "react";
import LibraryMenuItem from "../components/LibraryMenuItem";

export default function LibraryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Library Page</Text>
                <LibraryMenuItem/>
                <LibraryMenuItem/>
                <LibraryMenuItem/>
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
