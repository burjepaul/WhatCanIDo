import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import { colors } from "../config";

const ObjectiveComponent = ({setIndex, hideObjective, objectivesData}) => {
    console.log(setIndex)
    if(setIndex){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <AntDesign name="arrowleft" size={70} color={colors.textColor} onPress={()=> {hideObjective()}}/>
                    <Text style={{color:colors.textColor}}>Back to maps</Text>
                </View>
                <Text style={styles.title}>{objectivesData.title}</Text>
                <Text style={styles.description}><Text>{'      '}</Text>{objectivesData.details.longDescription}</Text>
                <Text style={styles.credentials}>Address: {objectivesData.details.address}</Text>
                <Text style={styles.credentials}>Phone number:  {objectivesData.details.phone}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundColor,
        opacity:0.9,
        height:"100%",
        width:"100%",
        position:"absolute",
        zIndex:1
    },
    headerContainer:{
        marginTop:35,
        marginLeft:15,
        flexDirection:"row",
        alignItems:"center"
    },
    title:{
        color:colors.textColor,
        textAlign:"center",
        fontSize:22,
        fontWeight:"500"
    },
    description:{
        color:colors.textColor,
        padding:15,
        fontSize:11
    },
    credentials:{
        color:colors.textColor,
        paddingHorizontal:5,
        fontSize:11  
    }
})

export default ObjectiveComponent