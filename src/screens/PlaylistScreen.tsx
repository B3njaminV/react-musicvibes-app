import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";

export default function PlaylistScreen() {
    const navigation = useNavigation()

    return (
        <ScrollView>
            <View>
                <Text> Salut </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})
