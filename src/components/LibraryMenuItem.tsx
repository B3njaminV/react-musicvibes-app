import {StyleSheet, Text, View} from "react-native";
import LibraryMenu from "../data/LibraryMenu";
import {FontAwesome} from "@expo/vector-icons";

type LibraryMenuItemProps = {
    item: LibraryMenu
}

export default function LibraryMenuItem(props: LibraryMenuItemProps) {
    return (
        <View style={styles.container}>
            <FontAwesome name={props.item.iconName} size={24} color="black" />
            <Text> {props.item.title} </Text>
            <FontAwesome name="chevron-right" size={18} color="black"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: "2%",
    }
})
