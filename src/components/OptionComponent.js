import react, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

const OptionComponent = ({text,options, setOptions}) => {
    const [selected, setSelected] = useState(false)

    const handleOptionsToShow = () => {
        options.includes(text) ? options = options.filter(item => item !== text) : options = [...options, text]
        setOptions(options)
        setSelected(!selected)
    }

    const iconToShow = () => {
        switch(text){
            case "Sleeping":
                return <FontAwesome name="bed" size={20} style={styles.icons} color="black" />
            case "Eating":
                return <FontAwesome5 name="utensils" size={20} style={styles.icons} color="black" />
            case "Drinking":
                return <FontAwesome5 name="beer" size={20} style={styles.icons} color="black" />
            case "Visiting":
                return <FontAwesome5 name="walking" size={20} style={styles.icons} color="black" />
            default:
                null
                }
    }

    return(
        <TouchableOpacity style={selected ? styles.containerSelected: styles.containerUnelected} onPress={handleOptionsToShow}>
            {iconToShow()}
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
containerSelected:{
    backgroundColor:colors.semibackgroundColor,
    paddingVertical:"0.5%",
    marginHorizontal:"2%",
    marginVertical:"0.5%",
    paddingLeft:"5%",
    borderWidth:0.5,
    borderRadius:20,
    elevation: 10,
    flexDirection:"row",
    width:160,
    shadowColor: colors.lightColor,
},
containerUnelected:{
    backgroundColor:colors.backgroundColor,
    paddingVertical:"0.5%",
    marginHorizontal:"2%",
    marginVertical:"0.5%",
    paddingLeft:"5%",
    borderWidth:0.5,
    borderRadius:20,
    elevation: 10,
    flexDirection:"row",
    width:160
},
text:{
    color:colors.textColor,
    fontSize:14,
},
icons:{
    width:"25%"
}
})

export default OptionComponent