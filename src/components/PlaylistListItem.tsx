import {Playlist} from "../model/Playlist";
import {StyleSheet, Text} from "react-native";

type PlaylistListItemProps = {
    item: Playlist
}

export default function PlaylistListItem(props: PlaylistListItemProps) {
    const playlist = props.item

    return (
        <Text> {playlist.name} </Text>
    )
}

const styles = StyleSheet.create({

})
