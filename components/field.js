import { View, TextInput, Text } from "react-native"
import { styles } from "../css/style"

export function Field({text, value, onChangeText, keyboardType, placeholder, placeholderTextColor}){
   
    return(
        <View>
            <Text style={styles.labelStyle}> {text} </Text>
            <TextInput style={styles.inputs} placeholder={placeholder} placeholderTextColor={placeholderTextColor} value={value} keyboardType={keyboardType} onChangeText={onChangeText}/>
        </View>
    )
}