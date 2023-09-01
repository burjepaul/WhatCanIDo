import React from "react";
import { Text, StyleSheet,View } from "react-native";

const CustomButton = ({title, navigation, routeTo}) => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate(routeTo)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#028C6A',
        width:"35%",
        alignSelf:"center",
        alignItems:"center",
        borderRadius:6,
        elevation: 10,
        shadowColor: 'white',
        marginBottom:"4%",
        marginTop:"10%",
    },
    buttonText:{
        color:"#D1EDE1",
        padding:10,
        textAlign:"center"
    }
})

export default CustomButton