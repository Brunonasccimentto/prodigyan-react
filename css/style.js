import { StyleSheet } from "react-native";
import {vh, vw} from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        zIndex: 0,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        overflow: 'hidden',
    },
    background: {
        resizeMode: 'cover',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        height: "100%",
    },
    LoginFormContainer:{
        display: "flex",
        zIndex: 10, 
        flex: 1,
        gap: 20,
        overflow: "scroll",
        
    },
    InputForm:{
        display: "flex",
        gap: 20,
        paddingHorizontal: vw(20),
        paddingVertical: vh(5),
    },
    inputContainer:{
        display: "flex",
        gap: 30, 
    },
    inputs:{
        borderBottomWidth: 1,
        borderBottomColor: "#908E92",
        paddingVertical: 2,
        fontSize: 14,
        paddingLeft: 0,
        color: "#222"
    },
    button: {
        backgroundColor: "#98C14B",
        borderRadius: 60,
        padding: 15,
        marginTop: vh(2)
    },
    SignUpbutton:{
        backgroundColor: "transparent",
        borderColor: "#98C14B",
        borderWidth: 3,
        borderRadius: 60,
        padding: 12,
        marginTop: vh(4)
    },
    labelStyle:{
        color: "#9EC557", 
        marginLeft: -4,
        fontWeight: "500"
    },
    item: {
        padding: 6,
        marginLeft: "5%",
        display: "flex", 
        flexDirection: "row"
    },
    sectionHeader: {
        backgroundColor: "#9EC557",
        padding: 5,
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: "5%"
    }
})