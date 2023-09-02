import react, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";

const OptionComponent = ({text,options, setOptions}) => {
    const [selected, setSelected] = useState(false)

    const handleOptionsToShow = () => {
        options.includes(text) ? options = options.filter(item => item !== text) : options = [...options, text]
        setOptions(options)
        setSelected(!selected)
    }

    return(
        <TouchableOpacity style={selected ? styles.containerSelected: styles.containerUnelected} onPress={handleOptionsToShow}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
containerSelected:{
    backgroundColor:colors.backgroundColor,
    paddingVertical:"1%",
    marginHorizontal:"10%",
    marginVertical:"1%",
    paddingLeft:"5%",
    borderWidth:0.5,
    borderRadius:20,
    elevation: 10,
    shadowColor: colors.lightColor,
},
containerUnelected:{
    backgroundColor:colors.backgroundColor,
    paddingVertical:"1%",
    marginHorizontal:"10%",
    marginVertical:"1%",
    paddingLeft:"5%",
    borderWidth:0.5,
    borderRadius:20,
    elevation: 10,
},
text:{
    color:colors.textColor,

}
})

export default OptionComponent