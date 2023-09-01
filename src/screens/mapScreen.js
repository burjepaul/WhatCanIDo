import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import data from '../../assets/data.json';
import * as Location from 'expo-location';

const MapScreen = () => {
    const [location, setLocation] = useState()
    const [mapSize, setMapSize] = useState(0.01)
  
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
  
    console.log(mapSize)
    return(
      <MapView 
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
      </MapView>        
    )
}

const styles = StyleSheet.create({
  map:{
    width:"100%",
    height:"80%"
  }
})

export default MapScreen