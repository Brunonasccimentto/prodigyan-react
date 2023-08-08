import { View, Text, TouchableOpacity } from "react-native"
import { Field } from "../components/field"

export default function FindClient(){
    return(
        <View style={[{ display: "flex", gap: 20 }]}>
        <Text style={[styles.labelStyle, { fontSize: 18, fontWeight: "600", marginLeft: 0.5 }]}>Buscar Cliente </Text>

        <Field text="Id" value={id} onChangeText={setId} />
        <Field text="Email" value={findEmail} keyboardType="email-address" onChangeText={setFindEmail} />

        <TouchableOpacity style={[styles.button,]} onPress={buscarEmailId}>
            <Text style={[{ alignSelf: "center", color: "#fff", fontWeight: "bold", fontSize: 18, }]}> buscar </Text>
        </TouchableOpacity>
    </View>
    )
}