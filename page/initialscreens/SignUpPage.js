import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated, Easing, Vibration } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-toast-message'
import { vh } from 'react-native-expo-viewport-units';
import Icon from 'react-native-vector-icons/Octicons';
import { styles } from "../../css/style";
import { tipos, gravar } from "../../services/api";
import { Step1, Step2, Step3 } from "../form/steps";

export default function SignUpPage(props) {

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [tipoCliente, setTipoCliente] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [logradouro, setLogradouro] = useState(null);
    const [cep, setCep] = useState(null)
    const [numero, setNumero] = useState(null);
    const [complemento, setComplemento] = useState(null);
    const [bairro, setBairro] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [uf, setUf] = useState(null);
    const [step, setStep] = useState(1)
    const [dataTipos, setDataTipos] = useState()

    const rotate = props.route.params.rotateFunction;
    const shrinkScreen = props.route.params.shrinkScreen
    const shrinkFood = props.route.params.shrinkFood
    const setHeightValue = props.route.params.setHeightValue

    useEffect(() => {
        async function type() {
            const response = await tipos()

            if(response.status === 200){

                const map = response.data.map((item) => {
                    return (
                        <Picker.Item label={item.tipo} value={item.idtipo_cliente} key={item.idtipo_cliente} />
                    )
                })

                setDataTipos(map)

            } else {
                Toast.show({
                    type: "error",
                    text1: "erro ao carregar"
                })
            }
            
        }
        type()
    }, [])

    const animatedDotBounce = useState(new Animated.Value(0))[0]

    const isFocused = useIsFocused();
    isFocused ? rotate(1) : rotate(0);
    isFocused ? bounce() : animatedDotBounce.setValue(0);
    isFocused ? setHeightValue(38) : setHeightValue(45);
    isFocused ? shrinkScreen(300) : shrinkScreen(0);
    isFocused ? shrinkFood(1) : shrinkFood(0)

    function bounce() {
        Animated.timing(animatedDotBounce, {
            toValue: 1,
            duration: 1000,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start()
    }

    async function register() {

            if (nome, email, telefone, logradouro, cep, numero, bairro, cidade !== null || "") {
                const response = await gravar(nome, email, tipoCliente, telefone, logradouro, cep, numero, complemento, bairro, cidade, uf);
                
                if(response.status !== 200) { 
                    Toast.show({
                        type: "error",
                        text1: "Ocorreu um erro",
                        text2: "Tente novamente mais tarde"
                    })
                    Vibration.vibrate(500)

                    return  
                }

                Toast.show({
                    type: "success",
                    text1: `Cliente ${nome}`,
                    text2: response.data
                })

                props.navigation.navigate("loginPage")
                setNome("")
                setEmail("")
                setTelefone("")
                setLogradouro("")
                setCep("")
                setNumero("")
                setComplemento("")
                setBairro("")
                setCidade("")
                setUf("") 

                return
               
            } 

            Toast.show({
                type: "error",
                text1: "Preencha todos os campos do formulário",
            })
            Vibration.vibrate(500)

    }

    const formStepConditional = () => {
        switch (step) {
            case 1: return <Step1 nome={nome} email={email} telefone={telefone} setNome={setNome} setEmail={setEmail} setTelefone={setTelefone} dataTipos={dataTipos} tipoCliente={tipoCliente} setTipoCliente={setTipoCliente} />
            case 2: return <Step2 logradouro={logradouro} cep={cep} setLogradouro={setLogradouro} setCep={setCep} numero={numero} complemento={complemento} setNumero={setNumero} setComplemento={setComplemento} />
            case 3: return <Step3 bairro={bairro} setBairro={setBairro} cidade={cidade} uf={uf} setCidade={setCidade} setUf={setUf} />
        }
    }

    return (
        <ScrollView style={styles.LoginFormContainer}>
            <View contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
                {isFocused ?
                    <Animated.View style={[{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                        position: "absolute",
                        left: 20,
                        top: 40,
                        transform: [{
                            translateX: animatedDotBounce.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 20]
                            })
                        }]
                    }]}>
                        <Icon name="dot" size={15} color="#9EC557" />
                        <Icon name="dot-fill" size={15} color="#9EC557" />
                    </Animated.View> : ""}

                <View style={[styles.InputForm,]}>
                    <View style={[styles.inputContainer, { height: vh(54) }]}>
                        <View>
                            <Text style={[{ fontSize: 26, color: "#9EC557", fontWeight: "bold" }]}>Sign Up</Text>
                        </View>

                        {formStepConditional()}

                        {step > 1 &&
                            <TouchableOpacity style={[{ position: "absolute", left: 0, bottom: 0, }]} onPress={() => { setStep(step - 1) }}>
                                <Text style={[{ color: "#98C14B", fontWeight: "bold", fontSize: 18 }]}> Previus </Text>
                            </TouchableOpacity>}
                        <TouchableOpacity style={[{ position: "absolute", right: 0, bottom: 0 }]} onPress={() => { step <= 2 ? setStep(step + 1) : register() }}>
                            <Text style={[{ color: "#98C14B", fontWeight: "bold", fontSize: 18 }]}> {step <= 2 ? "Next" : "Submit"} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}