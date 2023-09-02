import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import data from '../../assets/data.json';
import * as Location from 'expo-location';
import { extractAllServices } from "../helpers";
import { colors } from "../config";
import OptionComponent from "../components/OptionComponent";

const options = [
  {
    id:"1",
    text: "Sleeping"
  },
  {
    id:"2",
    text: "Eating"
  },
  {
    id:"3",
    text: "Drinking"
  },
  {
    id:"4",
    text: "Visiting"
  },
]

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

    return(
    <View>
      <Text style={styles.question}>What are you looking for?</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => <OptionComponent key={option.id} text={option.text} options={optionsToShow} setOptions={setData}/>)}
      </View>
      {/* <MapView 
        style={styles.map}
        onRegionChange={(region) => {setMapSize(region.latitudeDelta)}}
        region={{
          latitude: 46.1928621,
          longitude: 24.9617289,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType='satellite'
        // showsUserLocation
        >  
      {
        mapSize < 0.1 ? 
        data.map((entry) => {
          return(
            <Marker
            key={entry.id}
            coordinate={entry.coordinates}
            title={entry.title}
            description={entry.services[0]}
            />
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
      </MapView>         */}
    </View>
    )
}

const styles = StyleSheet.create({
  question:{
    backgroundColor:colors.backgroundColor,
    paddingVertical:"2%",
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
    backgroundColor:colors.backgroundColor
  }
})

export default MapScreen