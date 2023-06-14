import { useState } from "react";
import{
    View,Text,StyleSheet, Pressable, Touchable, TouchableOpacity
} from "react-native"
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { randomNumber } from "./util/MyFunctions";


type SearchByGenreProps = {

}

const genres =["Metal","Rock","Jazz","Punk","Pop","HIP HOP","RAP","Classic","Country"]

export default function SearchByGenre(){

    
    return(
        <ScrollView>
        <View style={{display:"flex",flexDirection:'row',flexWrap:"wrap",width:"100%"}} >
            {
                genres.map(
                    genre=>{
                        return(
                            <View style={{...styles.genreContainer}} >
                                <TouchableOpacity style={{...styles.genreBlock,backgroundColor:randomNumber()}}  >
                                    <Text style={{color:"white"}} >{genre}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                )
            }
        </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    genreBlock:{
    borderBottomLeftRadius: 10,
	borderBottomRightRadius: 10,
	borderTopLeftRadius: 0,
	borderTopRightRadius: 10,
    padding:20,
    //borderRadius:10,
    color:"white",

    },
    genreContainer:{
        width:"50%",
padding:10,
    }
})