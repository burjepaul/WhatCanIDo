import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import MapView, { Callout } from 'react-native-maps'
import { Marker } from 'react-native-maps';

import OptionComponent from "../components/OptionComponent";

import { extractAllServices, filterDataByOptions, transformServicesForIconName } from "../helpers";
import { colors } from "../config";
import data from '../../assets/data.json';
import * as Location from 'expo-location';
import icons from "../icons";
import photo from '../../assets/icon.png'

const MapScreen = () => {
    const [location, setLocation] = useState()
    const [mapSize, setMapSize] = useState(0.01)
    const [optionsToShow, setOptionsToShow] = useState([])

    const setData = (data) => {
      setOptionsToShow(data)
    }

    useEffect(() => {
      const getPermissions = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted'){
          console.log("Please grant location permission!")
          return
        }
  
        let currentLocation = await Location.getCurrentPositionAsync({})
        setLocation(currentLocation)
      }
  
      getPermissions()
    },[])

    const services = extractAllServices(data)
    const filteredData = filterDataByOptions(data, optionsToShow)

    return(
    <View style={styles.container}>
      <Text style={styles.question}>What are you looking for?</Text>
      <View style={styles.optionsContainer}>
        {services.slice(0,2).map((service, index) => <OptionComponent key={index} text={service} options={optionsToShow} setOptions={setData}/>)}
      </View>
      <View style={styles.optionsContainer}>
        {services.slice(2,4).map((service, index) => <OptionComponent key={index} text={service} options={optionsToShow} setOptions={setData}/>)}
      </View>
      <MapView 
        style={styles.map}
        onRegionChange={(region) => {setMapSize(region.latitudeDelta)}}
        region={{
          latitude: 46.1889621,
          longitude: 24.9617289,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        mapType='satellite'
        // showsUserLocation
        >  
      {
        mapSize < 0.1 ? 
        filteredData.map((entry) => {
          const text = transformServicesForIconName(entry.services) 
          return(
            <Marker
            key={entry.id}
            coordinate={entry.coordinates}
            title={entry.title}
            description={entry.description}
            image={icons[text]}
            color={"black"}
            >
              <Callout tooltip>
                <View style={styles.callout}>

                  <View style={styles.textCalloutContainer}>
                    <Text style={styles.calloutTitle}>{entry.title}</Text>
                    <Text style={styles.calloutText}>{entry.description}</Text>
                  </View>

                <View>

<Text style={{ height: 200, position: "relative", bottom: 35 }}>

                      <Image
                        source={{uri:entry.photoUri}}    
                        style={styles.image}       
                        
                        />
                        </Text>
                        </View>
                  <View style={styles.arrowBorder}/>
                  <View style={styles.arrow}/>
                  <View/>

                </View>
              </Callout>
            </Marker>
            )
          })
          :
          data.map((entry) => {
            return(
              <Marker
              key={entry.id}
              coordinate={entry.regionCoordinates}
              title={entry.region}
              />
              )
            })
          }
      </MapView>        
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.backgroundColor,
  },
  question:{
    backgroundColor:colors.backgroundColor,
    marginTop:"4%",
    paddingVertical:"3%",
    paddingLeft:"5%",
    color: colors.textColor,
    fontSize:18,
    fontWeight:"bold",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10
  },
  map:{
    width:"100%",
    height:"100%"
  },
  optionsContainer:{
    backgroundColor:colors.backgroundColor,
    flexDirection:"row",
    paddingBottom:"1%",
    alignSelf:"center"
  },
  textCalloutContainer:{
    width:"50%"
  },
  imageContainer:{
    width:"50%",
    backgroundColor:"red"
  },
  callout:{
    backgroundColor:colors.backgroundColor,
    width:250,
    padding:5,
    borderRadius:5,
    alignSelf:"center",
    flexDirection:"row"
  },
  calloutTitle:{
    color:colors.textColor,
    fontSize:13,
    textAlign:"center",
    paddingVertical:5
  },
  calloutText:{
    color:colors.textColor,
    fontSize:10,
  },
  image:{
    width:120,
    height:80
  },
  arrow:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#fff',
    borderWidth: 16,
    alignSelf:"center",
    marginTop:-32
  },
  arrowBorder:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#fff',
    borderWidth: 16,
    alignSelf:"center",
    marginTop:-0.5,
    marginBottom:-15
  }
})

export default MapScreen