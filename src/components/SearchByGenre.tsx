import { useState } from "react";
import{
    View,Text,StyleSheet
} from "react-native"
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler"


type SearchByGenreProps = {

}


export default function SearchByGenre(){

    const [Click, setClick] = useState(1);
    return(
        <ScrollView style={{flexDirection:'row', flexWrap:'wrap'}} >
        <View style={styles.genreContainer} >
            <TouchableHighlight onPress={()=>{setClick(Click+1)}}>
                <Text style={styles.genreBlock} >Hello {Click}</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.genreContainer} >
            <TouchableHighlight onPress={()=>{setClick(Click+1)}}>
                <Text style={styles.genreBlock} >Hello {Click}</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.genreContainer} >
            <TouchableHighlight onPress={()=>{setClick(Click+1)}}>
                <Text style={styles.genreBlock} >Hello {Click}</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.genreContainer} >
            <TouchableHighlight onPress={()=>{setClick(Click+1)}}>
                <Text style={styles.genreBlock} >Hello {Click}</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.genreContainer} >
            <TouchableHighlight onPress={()=>{setClick(Click+1)}}>
                <Text style={styles.genreBlock} >Hello {Click}</Text>
            </TouchableHighlight>
        </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    genreBlock:{
    borderBottomLeftRadius: 10,
	borderBottomRightRadius: 10,
	borderTopLeftRadius: 10,
	borderTopRightRadius: 10,
    padding:20,
    backgroundColor:"red",
    borderRadius:10,
    color:"white",

    },
    genreContainer:{
width:"50%",
padding:10
    }
})