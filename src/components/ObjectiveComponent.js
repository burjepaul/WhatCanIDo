import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import { colors } from "../config";

const ObjectiveComponent = ({setIndex, hideObjective, objectivesData}) => {
    if(setIndex){
        const keys = Object.keys(objectivesData.details.photos)
        const values = Object.values(objectivesData.details.photos)
        console.log(objectivesData.details.photos["Interior"])
        console.log(keys)
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <AntDesign name="arrowleft" size={70} color={colors.textColor} onPress={()=> {hideObjective()}}/>
                    <Text style={{color:colors.textColor}}>Back to maps</Text>
                </View>
                <Text style={styles.title}>{objectivesData.title}</Text>
                <Text style={styles.description}><Text>{'      '}</Text>{objectivesData.details.longDescription}</Text>
                <FlatList
                    data={keys}
                    renderItem={({item}) => 
                    <View>
                        <Text style={styles.subtitle}>{item}</Text>
                        <FlatList
                            data={objectivesData.details.photos[item]}
                            renderItem={({item}) => <Image source={{uri:item}} style={styles.image}/>}
                            horizontal
                        />
                    </View>
                    }
                />
                <Text style={styles.credentials}>Address: {objectivesData.details.address}</Text>
                <Text style={styles.credentials}>Phone number:  {objectivesData.details.phone}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundColor,
        opacity:0.91,
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
    subtitle:{
        color:colors.textColor,
        fontSize:20,
        fontWeight:"300",
        marginLeft:10
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
    },
    image:{
        height:150,
        width:110,
        marginHorizontal:7,
        resizeMode:"cover",
        borderRadius:5,
    }
})

export default ObjectiveComponent