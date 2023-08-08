import { View, Text, SectionList, TextInput, TouchableOpacity, Animated, Easing, FlatList } from "react-native";
import { todos } from "../../services/api";
import { styles } from "../../css/style";
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export function ClientsScreen({ navigation }) {

    const [listClients, setListClients] = useState([])
    const [text, setText] = useState("");
    const [filtedList, setFiltedList] = useState();
    const [toggleSearch, setToggleSearch] = useState(false);

    useEffect(() => {

        function newColor() {
            const Colors = ["black", "red", "blue", "limegreen", "purple", "darkorange", "olivedrab", "lightsalmon", "lightseagreen", "orangered", "saddlebrown", "chocolate", "goldenrod", "indigo", "midnightblue", "mediumvioletred", "deeppink"]
            const randomColor = Math.floor(Math.random() * Colors.length)
    
            return Colors[randomColor]
        }

        async function clientes() {
            const res = await todos()
            
            if (res.status !== 200) {
                return Toast.show({
                    type: "error",
                    text1: "Houve um problema com a lista de clientes",
                    text2: "Tente novamente mais tarde"
                })
            }

            // setListClients(res.data)

            res.data.forEach(cliente => {
                cliente.color = newColor()

                setListClients((arr) => [...arr, cliente ])
            });

        }
        clientes()
    }, [])

    const toggleSearchInputAnim = useState(new Animated.Value(0))[0]

    function toggleSearchInput(value) {
        Animated.timing(toggleSearchInputAnim, {
            toValue: value,
            duration: 500,
            easing: Easing.elastic(1.5),
            useNativeDriver: true,
        }).start()
    }

    function openSearch() {
        toggleSearchInput(toggleSearch === false ? 1 : 0);
        setToggleSearch(!toggleSearch);
    }

    function search(text) {

        setText(text)

        if (text !== "") {
            const filtedArray = listClients.filter((e) => {
                return e.nome.toLowerCase().match(text.toLowerCase())
            })

            setFiltedList(filtedArray.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.item} activeOpacity={1} onPress={() => { navigation.navigate("Info", { id: item.idcliente, nome: item.nome, color: item.color }) }}>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 45, width: 45, borderRadius: 100, backgroundColor: `${item.color}`, alignSelf: "center" }}>
                            <Text style={{ color: "#f1f1f1", fontSize: 20 }}>{item.nome.substring(0, 1).toUpperCase()}</Text>
                        </View>

                        <Text style={{ color: "#333", alignSelf: "center", fontSize: 16, marginLeft: "5%" }}>{item.nome}</Text>
                    </TouchableOpacity>
                )

            }))

        }
    }

    return (
        <View style={[{ flex: 1, backgroundColor: "#f1f1f1" }]}>
            <View style={[{ display: "flex", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 20 }]}>

                <Animated.View style={{
                    flex: 1,
                    height: 40,
                    transform: [{
                        scaleX: toggleSearchInputAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        })
                    }]
                }}>
                    {toggleSearch ?
                        <View style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center" }}>
                            <TouchableOpacity onPress={() => { openSearch(), setText("") }}>
                                <Ionicons name="arrow-back" size={30} color="#555" />
                            </TouchableOpacity>

                            <TextInput placeholder="Pesquisar..." placeholderTextColor="#333" autoFocus={true} style={[{ color: "#333", }]} value={text} onChangeText={(text) => { search(text) }} />
                        </View>

                        : <View />

                    }

                </Animated.View>
                {toggleSearch === false ?
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 230 }}>
                        <Text style={{ color: "#9EC557", fontWeight: "bold", fontSize: 20 }}> CLIENTES </Text>
                        <TouchableOpacity onPress={openSearch}>
                            <Ionicons name="search" size={30} color="#555" />
                        </TouchableOpacity>
                    </View>

                    : <View />
                }

            </View>

            {text === "" ?
                <FlatList
                    data={listClients}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => { navigation.navigate("Info", { id: item.idcliente, nome: item.nome, color: item.color }) }}>
                            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 45, width: 45, borderRadius: 100, backgroundColor: `${item.color}`, alignSelf: "center" }}>
                                <Text style={{ color: "#f1f1f1", fontSize: 20 }}>{item.nome.substring(0, 1).toUpperCase()}</Text>
                            </View>
                            <Text style={{ color: "#333", alignSelf: "center", fontSize: 16, marginLeft: "5%" }}>{item.nome}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index} />

                : [filtedList]}
        </View>
    )
}