import { View, Text } from "react-native";
import UserInfo from "../../components/userInfo";

export function MoreInfo({ route }) {

    const { cliente } = route.params

    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{padding: 10, display: "flex", justifyContent: "center" }}>
                    <View>

                        <View style={{ display: "flex", gap: 15, marginTop: 25, marginBottom: 45 }}>
                           
                            <UserInfo label={"Nome"} data={cliente.nome} />
                            <UserInfo label={"Telefone"} data={cliente.telefone} />
                            <UserInfo label={"Email"} data={cliente.email} />
                            <UserInfo label={"Logradouro"} data={cliente.logradouro} />
                            <UserInfo label={"Número"} data={cliente.numero} />
                            {cliente.complemento !== null || "" ? <UserInfo label={"Complemento"} data={cliente.complemento} /> : <View/> }
                            <UserInfo label={"Cep"} data={cliente.cep} />
                            <UserInfo label={"cidade"} data={cliente.cidade} />
                            <UserInfo label={"Uf"} data={cliente.uf} />
                            <UserInfo label={"Bairro"} data={cliente.bairro} />
                             
                        </View>
                    </View>
            </View>
        </View>
    )
}