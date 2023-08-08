import { View, Text, TextInput, TouchableOpacity, ScrollView, Animated, Easing } from "react-native";
import { styles } from "../../css/style"
import { useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons';


export default function LoginPage(props) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isSecure, setIsSecure] = useState(true)
    const [eyeIcon, setEyeIcon] = useState("eye-off-outline")

    const animatedDotBounce = useState(new Animated.Value(0))[0]

    function bounce() {
        Animated.timing(animatedDotBounce, {
            toValue: 1,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start()
    }

    const isFocused = useIsFocused();
    isFocused ? bounce() : animatedDotBounce.setValue(0);

    function togglePassword() {
        if (isSecure == true) {
            setIsSecure(false)
            setEyeIcon("eye-outline")
        } else {
            setIsSecure(true)
            setEyeIcon("eye-off-outline")
        }
    }

    return (

        <ScrollView style={[styles.LoginFormContainer]}>
            <View contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
                {isFocused ?
                    <Animated.View style={[{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3, position: "absolute",
                        right: 20, top: 40,
                        transform: [{
                            translateX: animatedDotBounce.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -20]

                            })
                        }]
                    }]}>
                        <Icon2 name="dot-fill" size={15} color="#9EC557" />
                        <Icon2 name="dot" size={15} color="#9EC557" />
                    </Animated.View> : ""}

                <View>
                    <View style={styles.InputForm}>

                        <View>
                            <Text style={[{ fontSize: 26, color: "#9EC557", fontWeight: "bold" }]}>Welcome Back!</Text>

                        </View>

                        <View style={styles.inputContainer}>
                            <View>
                                <Text style={styles.labelStyle}> Email </Text>
                                <TextInput placeholder="Enter your Email" placeholderTextColor={"#908E92"} value={email} keyboardType="email-address" style={styles.inputs} onChangeText={setEmail} />
                            </View>
                            <View>
                                <Text style={styles.labelStyle}> Password </Text>
                                <View style={[{ display: "flex", flexDirection: "row" }]}>
                                    <TextInput placeholder="**********" placeholderTextColor={"#908E92"} value={password} secureTextEntry={isSecure} style={[styles.inputs, { width: "100%" }]} onChangeText={setPassword} />
                                    <Text style={[{ marginLeft: -30 }]} onPress={togglePassword}>
                                        <Icon name={eyeIcon} size={30} color="#9EC557" />
                                    </Text>

                                </View>
                                <Text style={[{ fontSize: 12, marginTop: 5, color: "#908E92" }]}>Forget your password?</Text>
                                 
                            </View>

                        </View>

                        <View>
                            <TouchableOpacity style={styles.button} onPress={()=>{ props.navigation.navigate("Home")}}>
                                <Text style={[{ alignSelf: "center", color: "#fff", fontWeight: "bold", fontSize: 18 }]}> Log in </Text>
                            </TouchableOpacity>
                            <Text style={[{ fontSize: 12, marginTop: 5, color: "#908E92", textAlign: "center" }]}>Doesn't have any account? <Text style={[{color: "black", fontWeight: "bold"}]} onPress={()=>{props.navigation.navigate("SignUpPage")}}> Sign up</Text></Text>  
                        </View>
                        

                    </View>
                </View>
            </View >
        </ScrollView>
    )
}