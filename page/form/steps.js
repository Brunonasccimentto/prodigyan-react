import { View, Text } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { Field } from "../../components/field"
import { styles } from "../../css/style"

export function Step1({nome, email, telefone, tipoCliente, setNome, setEmail, setTelefone, setTipoCliente, dataTipos}){
    return(
        <View style={[{ display: "flex", gap: 20 }]}>
            <Field text="Nome" placeholder="Enter your Name" placeholderTextColor={"#908E92"} style={styles.inputs} value={nome} onChangeText={setNome} />
            <Field text="Email" placeholder="Enter your Email" placeholderTextColor={"#908E92"} style={styles.inputs} value={email} keyboardType="email-address" onChangeText={setEmail} />
            <Field text="Telefone" placeholder="(44) 998746401" placeholderTextColor={"#908E92"} style={styles.inputs} value={telefone} keyboardType="phone-pad" onChangeText={setTelefone} />
            <View>
                <Text style={styles.labelStyle}> Escolha o tipo de cliente</Text>
                <Picker style={[{ color: "black", marginLeft: -15, marginBottom: -20 }]} dropdownIconColor={"#908E92"} selectedValue={tipoCliente} onValueChange={(value) => setTipoCliente(value)}>
                    {dataTipos}
                </Picker>
            </View>
        </View>
    )
} 

export function Step2({ logradouro, cep, numero, complemento, setLogradouro, setCep, setNumero, setComplemento }){
    return(
        <View style={[{ display: "flex", gap: 20 }]}>
            <Field text="Logradouro" placeholder="casa" placeholderTextColor={"#908E92"} style={styles.inputs} value={logradouro} onChangeText={setLogradouro} />
            <Field text="CEP" placeholder="72890741" placeholderTextColor={"#908E92"} style={styles.inputs} value={cep} onChangeText={setCep} />
            <Field text="Número" placeholder="14" placeholderTextColor={"#908E92"} style={styles.inputs} value={numero} onChangeText={setNumero} />
            <Field text="Complemento" placeholder="" placeholderTextColor={"#908E92"} style={styles.inputs} value={complemento} onChangeText={setComplemento} />
        </View>
    )
} 

export function Step3({ bairro, cidade, uf, setBairro, setCidade, setUf}){
    return(
        <View style={[{ display: "flex", gap: 20 }]}>
            <Field text="Bairro" placeholder="morada das garças" placeholderTextColor={"#908E92"} style={styles.inputs} value={bairro} onChangeText={setBairro} />
            <Field text="Cidade" placeholder="São paulo" placeholderTextColor={"#908E92"} style={styles.inputs} value={cidade} onChangeText={setCidade} />
            <View>
                <Text style={styles.labelStyle}> UF </Text>
                <Picker style={[{ color: "black", marginLeft: -15 }]} dropdownIconColor={"#908E92"} selectedValue={uf} onValueChange={(value) => setUf(value)}>
                    <Picker.Item label="AC" value="AC" key="1" />
                    <Picker.Item label="AL" value="AL" key="2" />
                    <Picker.Item label="AP" value="AP" key="3" />
                    <Picker.Item label="AM" value="AM" key="4" />
                    <Picker.Item label="BA" value="BA" key="5" />
                    <Picker.Item label="CE" value="CE" key="6" />
                    <Picker.Item label="DF" value="DF" key="7" />
                    <Picker.Item label="ES" value="ES" key="8" />
                    <Picker.Item label="GO" value="GO" key="9" />
                    <Picker.Item label="MA" value="MA" key="10" />
                    <Picker.Item label="MT" value="MT" key="11" />
                    <Picker.Item label="MS" value="MS" key="12" />
                    <Picker.Item label="MG" value="MG" key="13" />
                    <Picker.Item label="PA" value="PA" key="14" />
                    <Picker.Item label="PB" value="PB" key="15" />
                    <Picker.Item label="PR" value="PR" key="16" />
                    <Picker.Item label="PE" value="PE" key="17" />
                    <Picker.Item label="PI" value="PI" key="18" />
                    <Picker.Item label="RJ" value="RJ" key="19" />
                    <Picker.Item label="RN" value="RN" key="20" />
                    <Picker.Item label="RS" value="RS" key="21" />
                    <Picker.Item label="RO" value="RO" key="22" />
                    <Picker.Item label="RR" value="RR" key="23" />
                    <Picker.Item label="SC" value="SC" key="24" />
                    <Picker.Item label="SP" value="SP" key="25" />
                    <Picker.Item label="SE" value="SE" key="26" />
                    <Picker.Item label="TO" value="TO" key="27" />
                </Picker>
            </View>
        </View>
    )
} 