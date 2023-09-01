import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";


const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <ImageBackground
                    source={{uri:'https://elanomad.ro/wp-content/uploads/2023/06/saschiz-elanomad.jpg'}}    
                    style={styles.image} 
                    resizeMode="cover"               
                >
                    <Text style={styles.title}>
                        Welcome to Saschiz
                    </Text>
                    <Text style={styles.subTitle}>
                        Unlock Local Treasures: Explore Attractions, Dine, Sleep, and More All in One App!
                    </Text>

                </ImageBackground>

            </View>
            <CustomButton title={"Load Map"} navigation={navigation} routeTo={"Map"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#003E19",
        flex:1,
    },
    titleContainer:{

    },
    image:{

    },
    title:{
        alignItems:'center',
        textAlign:'center',
        paddingVertical:"20%",
        color: "#028C6A",
        fontSize:28,
        fontWeight:"bold",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    subTitle:{
        alignItems:'center',
        textAlign:'center',
        marginVertical:"20%",
        marginHorizontal:"10%",
        color: "#028C6A",
        backgroundColor:"rgba(0, 0, 0, 0.6)",
        borderRadius:25,
        fontSize:22,
        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 1
    }
})

export default HomeScreen