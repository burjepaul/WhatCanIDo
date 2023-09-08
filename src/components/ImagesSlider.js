import react from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { Feather } from '@expo/vector-icons'; 

import { colors } from "../config";

const ImageSlider = ({hideImageSlider, imagesToShow}) => {
    console.log(imagesToShow)
    return(
        <View style={styles.container}>
            <Feather name="x" size={70} color={colors.textColor} style={{marginTop:50, marginLeft:15}} onPress={() => {hideImageSlider()}}/>
            <FlatList
                data={imagesToShow}
                renderItem={({item}) => 
                    <Image source={{uri:item}} style={styles.image}/>
                }
                horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        position:"absolute",
        opacity:0.95,
        width:"100%",
        height:"100%",
        zIndex:2
    },
    image:{
        height:"50%",
        marginTop:"20%",
        width:450,
        marginHorizontal:7,
        resizeMode:"cover",
        borderRadius:5,
    },

})

export default ImageSlider