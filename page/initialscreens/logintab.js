import React, { useState } from 'react';
import { ImageBackground, View, Animated, Easing, Vibration } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { vh } from 'react-native-expo-viewport-units';
import Animate, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { styles } from '../../css/style';
import bg from "../../images/bg2.jpg"
import foods from "../../images/foods.png"

const Tab = createMaterialTopTabNavigator();

export function LoginTab() {

    const rotateAnim = useState(new Animated.ValueXY(0, 0))[0]
    const shrinkAnim = useState(new Animated.Value(0))[0]
    const shrinkFoodAnim = useState(new Animated.Value(0))[0]
  
    function rotate(value) {
      Animated.timing(rotateAnim, {
        toValue: value,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start()
    }

    function shrinkScreen(value){
      Animated.timing(shrinkAnim, {
        toValue: value,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.ease
      }).start()
    }

    function shrinkFood(value){
      Animated.timing(shrinkFoodAnim, {
        toValue: value,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.ease
      }).start()
    }

    const AnimContainerFood = useSharedValue({height: vh(45)});

    const AnimContainerFoodStyle = useAnimatedStyle(()=>{
      return{
        height: withTiming(AnimContainerFood.value.height, {
          duration: 500
        })
      }
    })

    function setHeightValue(value){

      AnimContainerFood.value = {height: vh(value)}
    }

    return (
      <>
        <Animate.View style={[styles.container, AnimContainerFoodStyle]} >
          <ImageBackground style={[styles.background]} source={bg}>
            <Animated.Image
              source={foods}
              style={[{
                width: 500,
                height: 500,
                alignSelf: "center",
                top: -75,
                marginLeft: 30,
                transform: [{
                  rotate: rotateAnim.x.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["20deg", "80deg"]
                  })
                },
                {scale: shrinkFoodAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9]
                })}],
              }]}
            >
            </Animated.Image>
          </ImageBackground>
        </Animate.View>
  
        <Tab.Navigator screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: { display: 'none' }
  
        }}>
          <Tab.Screen name='loginPage' component={LoginPage} initialParams={{ }} />
          <Tab.Screen name='SignUpPage' component={SignUpPage} initialParams={{ rotateFunction: rotate, shrinkScreen: shrinkScreen, shrinkFood: shrinkFood, setHeightValue: setHeightValue}} /> 
            
        </Tab.Navigator>
      </>
    )
  }