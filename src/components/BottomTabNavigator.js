import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";

import { FontAwesome5, Octicons, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import MapScreen from "../screens/mapScreen";
import AboutUsScreen from "../screens/aboutUsScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  // #D1EDE1 #7BC5AE #028C6A #003E19
  return (
    <Tab.Navigator
      screenOptions={{tabBarActiveTintColor:'#D1EDE1', tabBarStyle:{backgroundColor:'#003E19'}, tabBarInactiveTintColor:'#028C6A'}}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          headerTintColor: '#003E19',
          headerStyle:{
           backgroundColor:'#003E19'
          },
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
           <FontAwesome5 name="home" color={color} size={size} />
          )          
        }}
      />
      <Tab.Screen name="Map" component={MapScreen} 
        options={{
          headerShown: false, 
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marked-alt" color={color} size={size}/>
          )          
        }}
      />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} 
        options={{ 
          headerShown: false, 
          tabBarLabel: 'About Us',
           tabBarIcon: ({ color, size }) => (
            <Octicons name="checklist" color={color} size={size} />
           )
        }}/>
    </Tab.Navigator>
  );
}

export default BottomTab