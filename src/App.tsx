import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Mes super Nounours !</Text>
        </View>
        <Text>Mon super texte ...</Text>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darksalmon",
  },
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
});
