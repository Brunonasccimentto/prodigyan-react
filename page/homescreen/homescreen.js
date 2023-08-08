import { View, Text } from "react-native";

export function HomeScreen(){
    return(
        <View style={[{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f1f1f1"}]}>
            <Text style={[{color: "#222"}]}> Home </Text>
        </View>
    )
}