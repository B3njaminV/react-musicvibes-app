import {StyleSheet} from 'react-native';
import React from "react";
import Navigation from "./navigation/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaProvider>
        <Navigation></Navigation>
      </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
});
