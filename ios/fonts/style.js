import { StyleSheet } from "react-native";
import {vh, vw} from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: vh(45),
        textAlign: 'center',
        zIndex: 0,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        overflow: 'hidden'
    },
    background: {
        resizeMode: 'cover',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        width: vw(100),
        height: "100%",
    },
    LoginFormContainer:{
        backgroundColor: "#fff",
        display: "flex",
        flex: 1,
        zIndex: 10,
        paddingHorizontal: vw(20),
        paddingVertical: vh(6),
    },
    InputForm:{
        display: "flex",
        gap: 20,
        overflow: "scroll",
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
    },
    SignUpbutton:{
        backgroundColor: "transparent",
        borderColor: "#98C14B",
        borderWidth: 3,
        borderRadius: 60,
        padding: 12,
        marginBottom: vh(10),
        marginTop: vh(2)
    },
    labelStyle:{
        color: "#9EC557", 
        marginLeft: -4,
        fontWeight: "500"
    },
})