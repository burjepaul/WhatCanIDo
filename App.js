import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './src/components/BottomTabNavigator';
import HomeScreen from './src/screens/homeScreen';
import MapScreen from './src/screens/mapScreen';

const Stack = createStackNavigator()
  // #D1EDE1 #7BC5AE #028C6A #003E19

const headerProps = {
  title:'Home',           
  headerStyle: {
    backgroundColor: '#003E19',
  },
  headerTintColor: '#D1EDE1',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#003E19"/> 
        {/* <MapScreen/> */}
          <Stack.Navigator>
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Map" component={MapScreen} options={headerProps}/>
          </Stack.Navigator>

        </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
