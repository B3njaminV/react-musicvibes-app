import {StyleSheet} from 'react-native';
import React from "react";
import Navigation from "./navigation/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import store from "./redux/store";
import {Provider} from "react-redux";
export default function App() {
  return (
      <>
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation></Navigation>
          </SafeAreaProvider>
        </Provider>
      </>
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
