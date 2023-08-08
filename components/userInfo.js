import { View, Text } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function UserInfo({label, data, iconName}) {
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <FontAwesome name={iconName} color="#a1a3a6" size={25} />
                <Text style={{ color: "#a1a3a6", alignSelf: "center", fontSize: 18 }}>   {label}</Text>
            </View>
            <Text style={{ color: "#333", fontSize: 16 }}>{data}</Text>
        </View>
    )
}