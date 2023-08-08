import { useState } from "react"
import { Animated, Easing } from "react-native"



export function bounce(){

    const animatedDotBounce = useState(new Animated.Value(0))[0]
    Animated.timing(animatedDotBounce, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
    }).start()
}

