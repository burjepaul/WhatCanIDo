import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Linking,  TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import { colors } from "../config";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Booking from '../../assets/BookingIcon.png'
import Instagram from '../../assets/InstagramIcon.png'
import Facebook from '../../assets/FacebookIcon.png'
import Airbnb from '../../assets/AirbnbIcon.png'
import TripAdvisor from '../../assets/TripAdvisorIcon.png'
import ImageSlider from "./ImagesSlider";


const ObjectiveComponent = ({setIndex, hideObjective, objectivesData}) => {
    const [showImageSlider, setShowImageSlider] = useState(false)

    const [imagesToRenderInSlider, setImagesToRenderInSlider] = useState()

    if(setIndex){
        const keys = Object.keys(objectivesData.details.photos)
        const socialMediaIcons = Object.keys(objectivesData.details.socialMedia)
        const contact = Object.keys(objectivesData.details.contact)
        
        
        const handleImagePress = (image) => {
            for (const gallery in objectivesData.details.photos){
                if(objectivesData.details.photos[gallery].includes(image)){
                    setImagesToRenderInSlider(objectivesData.details.photos[gallery])
                } 
            }
            setShowImageSlider(true)
        }

        const hideImageSlider = () => {
            setShowImageSlider(false)
        }


        return(
            <SafeAreaView style={styles.container}>

                {
                    showImageSlider ? <ImageSlider hideImageSlider={hideImageSlider} imagesToShow={imagesToRenderInSlider}/>:null
                }

                <View style={styles.headerContainer}>
                    <AntDesign name="arrowleft" size={70} color={colors.textColor} onPress={()=> {hideObjective()}}/>
                    <Text style={{color:colors.textColor}}>Back to maps</Text>
                </View>

                <ScrollView>
                
                    <Text style={styles.title}>{objectivesData.title}</Text>
                    <Text style={styles.description}><Text>{'      '}</Text>{objectivesData.details.longDescription}</Text>
                    <FlatList
                        data={keys}
                        scrollEnabled={false}
                        ListHeaderComponent={
                            <>
                            </>
                        }
                        renderItem={({item}) => 
                        <View>
                            <Text style={styles.subtitle}>{item}</Text>
                            <FlatList
                                data={objectivesData.details.photos[item]}
                                renderItem={({item}) => 
                                    <TouchableOpacity onPress={() => handleImagePress(item)}>
                                        <Image source={{uri:item}} style={styles.image}/>
                                    </TouchableOpacity>
                                }
                                horizontal
                                />
                        </View>
                        }
                        ListFooterComponent={
                            <View style={{height:320}}>
                                <View style={styles.credentialsContainer}>

                                    <View style={styles.socialMedia}>
                                        {socialMediaIcons.includes("Instagram") ? <TouchableOpacity onPress={() => Linking.openURL(objectivesData.details.socialMedia["Instagram"])}><Image source={Instagram} style={{height:35, width:35, margin:5}}/></TouchableOpacity>:null}
                                        {socialMediaIcons.includes("Facebook") ? <TouchableOpacity onPress={() => Linking.openURL(objectivesData.details.socialMedia["Facebook"])}><Image source={Facebook} style={{height:45, width:45}}/></TouchableOpacity>:null}
                                        {socialMediaIcons.includes("Booking") ? <TouchableOpacity onPress={() => Linking.openURL(objectivesData.details.socialMedia["Booking"])}><Image source={Booking} style={{height:35, width:35, margin:5}}/></TouchableOpacity>:null}
                                        {socialMediaIcons.includes("Airbnb") ? <TouchableOpacity onPress={() => Linking.openURL(objectivesData.details.socialMedia["Airbnb"])}><Image source={Airbnb} style={{height:30, width:30, margin:5}}/></TouchableOpacity>:null}
                                        {socialMediaIcons.includes("TripAdvisor") ? <TouchableOpacity onPress={() => Linking.openURL(objectivesData.details.socialMedia["TripAdvisor"])}><Image source={TripAdvisor} style={{height:36, width:36, margin:5}}/></TouchableOpacity>:null}
                                    </View>

                                    <View style={styles.phonAnAddress}>
                                        {contact.includes("website") ? <Text style={styles.credentials} onPress={() => Linking.openURL(objectivesData.details.contact["website"])}>Website: {objectivesData.details.contact["website"]}</Text>:null}
                                        {contact.includes("address") ? <Text style={styles.credentials}>Address: {objectivesData.details.contact["address"]}</Text>:null}
                                        {contact.includes("phone") ? <Text style={styles.credentials}>Phone: {objectivesData.details.contact["phone"]}</Text>:null}
                                        {contact.includes("email") ? <Text style={styles.credentials}>Email: {objectivesData.details.contact["email"]}</Text>:null}
                                    </View>

                                </View>
                            </View>
                        }/>
                    </ScrollView>        
            </SafeAreaView>
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
    credentialsContainer:{
        height:100,
    },
    credentials:{
        color:colors.textColor,
        marginTop:5,
        paddingHorizontal:5,
        fontSize:11  
    },
    image:{
        height:150,
        width:110,
        marginHorizontal:7,
        resizeMode:"cover",
        borderRadius:5,
    },
    socialMedia:{
        flexDirection:"row",
        paddingVertical:10,
    }
})

export default ObjectiveComponent