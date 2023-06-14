import {StyleSheet, Text, TextInput, View} from "react-native";
import React, { useState } from "react";
import SearchByGenre from "../components/SearchByGenre"
import SearchByName from "../components/SearchByName";

export default function SearchScreen() {


    const [SearchValue,SetSearchValue] = useState("")

    return (
        <>
        <TextInput
        style={styles.input}
        onChangeText={SetSearchValue}
        value={SearchValue}
        placeholder="Search here ..."
      />
      { SearchValue.length==0 && <SearchByGenre /> }
      { SearchValue.length>0 && <SearchByName /> }
        
        </>
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
});
