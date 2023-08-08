import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { Home } from './page/homescreen/home';
import {LoginTab} from "./page/initialscreens/logintab"
import { Info } from './page/clients/info';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { MoreInfo } from './page/clients/moreInfo';

const Stack = createStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function App() {

  // const panResponder = PanResponder.create({
  //     onMoveShouldSetPanResponder: ()=> true,
  //     // onPanResponderGrant: ()=>{
  //     //   rotateAnim.setOffset({
  //     //     x: rotateAnim.x._value,
  //     //   })

  //     // },
  //     onPanResponderMove: (e, gesture)=> {
  //       Animated.timing(rotateAnim, {
  //         toValue: {
  //           x: 100,
  //           y: 100
  //         },
  //         duration: 15000,
  //         easing: Easing.ease,
  //         useNativeDriver: true
  //       }).start()
  //     },
  //     onPanResponderRelease: (e, gesture)=> {
  //       rotateAnim.setValue({
  //         x: 0,
  //         y: 0
  //       })

  //       Animated.timing(rotateAnim, {
  //       }).stop()
  //     }
  //   })

  return (
    <>
      <NavigationContainer >
        <StatusBar backgroundColor="#698830" barStyle="light-content" />

        <Stack.Navigator initialRouteName='LoginTab' screenOptions={{headerShown: false}}>
          <Stack.Screen name='LoginTab' component={LoginTab} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Info' component={Info} options={{headerShown: true, headerStyle: {backgroundColor: "#9EC557"}, headerTintColor: "#f1f1f1"}}/> 
          <Stack.Screen name='MoreInfo' component={MoreInfo} options={{headerShown: true, headerStyle: {backgroundColor: "#9EC557"}, headerTintColor: "#f1f1f1", headerTitle: "Mais informações"}}/>
        </Stack.Navigator>

      </NavigationContainer>
     <Toast/>
    </>
  );
}

export default App;
