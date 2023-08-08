import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { HomeScreen } from './homescreen';
import { ClientsScreen } from '../clients/clients';

const BottomTab = createBottomTabNavigator();

export function Home(){
    return(
        <BottomTab.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {backgroundColor: "#f1f1f1"},
            tabBarShowLabel: false,
            // tabBarActiveTintColor: '#222',
            // tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'HomeScreen') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Clients') {
                  iconName = focused
                    ? 'md-people-sharp'
                    : 'md-people-outline';
                }
                return (
                  <Ionicons
                    name={iconName}
                    size={22}
                    color={"#98C14B"}
                  />
                );
              }
        })}>
            <BottomTab.Screen name='HomeScreen' component={HomeScreen} screenOptions={{}} />
            <BottomTab.Screen name='Clients' component={ClientsScreen}/>
            
        </BottomTab.Navigator>
    )
}