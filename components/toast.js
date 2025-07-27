import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';


export default function Toast({ setToast, text }) {

    const bottom = useRef(new Animated.Value(-80)).current
    const opacity = useRef(new Animated.Value(1)).current

    function animate() {
        Animated.timing(bottom, {
            toValue: 20,
            duration: 1000,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }).start(()=>setToast(false))
        })
    }

    useEffect(()=>{
        animate()
    }, [])

    return (
        <Animated.View style={[styles.container, { bottom, opacity }]}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        backgroundColor: '#555555',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        marginHorizontal: 40
    },
    text: {
        color: 'white',
        fontSize: 15
    }
})