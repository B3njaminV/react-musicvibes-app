import React, { FunctionComponent } from "react";
import {Image,StyleSheet,ScrollView,FlatList,TouchableOpacity,Text,View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

interface SearchByNameProps {
    
}

const searchedObjects = [
    {
        name:"fsdf sdfsdrgf",
        type:"Music",
    },
    {
        name:"jfs setzset",
        type:"Music",
    },
    {
        name:"fzeze",
        type:"Music",
    },
    {
        name:"eezrr zerze",
        type:"Artist",
    },
    {
        name:"fsdf sdfsdrgf",
        type:"Artist",
    },
    {
        name:"fssssezef",
        type:"Music",
    },

    {
        name:"fsdf sdfsdrgf",
        type:"Music",
    },{
        name:"fsdf sdfsdrgf",
        type:"Music",
    },

    {
        name:"fsdf sdfsdrgf",
        type:"Artist",
    },{
        name:"fsdf sdfsdrgf",
        type:"Artist",
    },{
        name:"fsdf sdfsdrgf",
        type:"Artist",
    },{
        name:"fsdf sdfsdrgf",
        type:"Artist",
    },{
        name:"fsdf sdfsdrgf",
        type:"Music",
    },{
        name:"fsdf sdfsdrgf",
        type:"Music",
    },{
        name:"fsdf sdfsdrgf",
        type:"Music",
    },{
        name:"fsdf sdfsdrgf",
        type:"Music",
    },
]
 
const SearchByName: FunctionComponent<SearchByNameProps> = () => {
    return ( 
            <FlatList
                data={searchedObjects}
                renderItem={({item,index})=>
                    <>
                    <TouchableOpacity key={index}>
                        <View style={styles.container}>
                            <Image source={require('../assets/podcast.jpg')} style={styles.coverSize}/>
                            <View>
                                <Text style={styles.name} >{item.name}</Text>
                                <Text style={styles.type} >{item.type}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    </>
                }
                />
            
        
     );
}

const styles = StyleSheet.create({

    container:{
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        display:"flex",flexDirection:"row",flexWrap:"wrap"
    },

    coverSize: {
        width: 50,
        height: 50,
     },

    name: {
       fontWeight: "bold",
       fontSize: 20,
    },
    type:{
        color:"grey",
        fontSize: 10,
    }
})
 
export default SearchByName;