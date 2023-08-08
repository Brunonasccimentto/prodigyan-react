import { View, Text, Image } from "react-native";
import { buscarId } from "../../services/api";
import UserInfo from "../../components/userInfo";
import { useEffect, useState } from "react";
import LottieView from 'lottie-react-native';
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function Info({ route, navigation }) {

    const { id, nome, color } = route.params
    const [userInfo, setUserInfo] = useState({ telefone: "", email: "", logradouro: "", numero: "", complemento: "", bairro: "", cidade: "", uf: "", cep: "", tipo: "" })

    useEffect(() => {
        const data = async () => {
            const res = await buscarId(id)
           
            if(res.status === 200){
               return setUserInfo({
                    nome: res.data[0].nome,
                    telefone: res.data[0].telefone,
                    email: res.data[0].email,
                    logradouro: res.data[0].logradouro,
                    numero: res.data[0].numero,
                    complemento: res.data[0].complemento,
                    bairro: res.data[0].bairro,
                    cidade: res.data[0].cidade,
                    uf: res.data[0].uf,
                    cep: res.data[0].cep,
                    tipo: res.data[0].tipo
                })
            }

            Toast.show({
                type: "error",
                text1: "Erro ao carregar dados do cliente",
                text2: "Tente novamente mais tarde"
            })
            
        }

        data()
    }, [])

    

    //item.playerName.substring(0, 2).toUpperCase()
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{ backgroundColor: "#9EC557", width: "100%", height: "20%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <View style={{ position: "absolute", alignSelf: "center", top: "50%" }}>
                    {/* <Image source={{ uri: data.image }} style={{ height: 150, width: 150, borderRadius: 150, }} /> */}
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 120, width: 120, borderRadius: 150, backgroundColor: `${color}`, alignSelf: "center" }}>
                        <Text style={{ color: "#f1f1f1", fontSize: 55 }}>{nome.substring(0, 1).toUpperCase()}</Text>
                    </View>

                    <Text style={{ color: "#333", textAlign: "center", fontSize: 24, marginTop: 15 }}> {nome} </Text>
                </View>

            </View>

            <View style={{ height: "50%", padding: 10, display: "flex", justifyContent: "center" }}>
                {userInfo.email !== "" ?
                    <View>
                        <Text style={{ color: "#333", fontSize: 20 }}>Informações</Text>

                        <View style={{ display: "flex", gap: 15, marginTop: 25, marginBottom: 45 }}>
                            <UserInfo label={"Id"} iconName="user-o" data={id} />
                            <UserInfo label={"Email"} iconName="envelope-o" data={userInfo.email} />
                            <UserInfo label={"Telefone"} iconName="phone" data={userInfo.telefone} />
                            <UserInfo label={"Tipo"} iconName="key" data={userInfo.tipo} />
                        </View>

                        <Text style={{ color: "#98C14B", fontSize: 18, alignSelf: "flex-end" }} onPress={()=> {navigation.navigate("MoreInfo", {cliente: userInfo})}}> Mais informações {">>"}</Text>
                    </View>

                    : <LottieView
                    autoPlay={true}
                    source={require("../../images/loading-dots.json")}
                    loop={true}
                    style={{alignSelf: "center", justifyContent: "center", width: 150, height: 150}}
                    resizeMode="cover" />}


            </View>

        </View>
    )
}