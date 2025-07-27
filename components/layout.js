import React, { useEffect, useState, useRef } from 'react'
import { useNavigationState } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, StatusBar, Animated, Dimensions } from 'react-native';

const icon = require('../assets/ORPA-logo.png')

export default function Layout({ children }) {

    // Get the height of the device
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width

    // Values init for animation components
    const navbarAnimation = useRef(new Animated.Value(screenHeight * 0.5)).current;
    const contentAnimation = useRef(new Animated.Value(screenHeight * 0.5)).current;
    const logoAnimation = useRef(new Animated.Value(200)).current
    const logoTranslateAnimationX = useRef(new Animated.Value(0)).current;
    const logoTranslateAnimationY = useRef(new Animated.Value(0)).current;
    const usernameTranslateAnimationX = useRef(new Animated.Value(0)).current;
    const usernameTranslateAnimationY = useRef(new Animated.Value(0)).current;
    const [direction, setDirection] = useState('column');
    const [justify, setJustify] = useState('center');



    // Get route current
    function getActiveRouteName(state) {
        if (!state) return null;
        const route = state.routes[state.index];
        if (route.state) {
            return getActiveRouteName(route.state);
        }
        return route.name;
    }

    // Variables for save current route
    const routeName = useNavigationState((state) => getActiveRouteName(state))

    // Change height if the route is diffent of Main and Root
    useEffect(() => {
        // Verify Route
        const isMain = routeName !== 'Main' && routeName !== 'Root'

        // Height Navbar
        const navbarAnimationHeight = isMain
            ? screenHeight * 0.08
            : screenHeight * 0.5;

        // Height Content
        const contentAnimationHeight = isMain
            ? screenHeight * 0.92
            : screenHeight * 0.5;

        // Size Logo Navbar
        const logoAnimationSize = isMain
            ? 50
            : 200;

        const logoTranslateAnimationXValue = isMain
            ? -screenWidth + 230
            : 0

        const logoTranslateAnimationYValue = isMain
            ? 10
            : 0

        const usernameTranslateAnimationXValue = isMain
            ? screenWidth - 240
            : 0

        const usernameTranslateAnimationYValue = isMain
            ? -23
            : 0

        Animated.parallel([
            Animated.timing(navbarAnimation, {
                toValue: navbarAnimationHeight,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(contentAnimation, {
                toValue: contentAnimationHeight,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(logoAnimation, {
                toValue: logoAnimationSize,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(logoTranslateAnimationX, {
                toValue: logoTranslateAnimationXValue,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(logoTranslateAnimationY, {
                toValue: logoTranslateAnimationYValue,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(usernameTranslateAnimationX, {
                toValue: usernameTranslateAnimationXValue,
                duration: 300,
                useNativeDriver: false
            }),
            Animated.timing(usernameTranslateAnimationY, {
                toValue: usernameTranslateAnimationYValue,
                duration: 300,
                useNativeDriver: false
            })
        ]).start();
    }, [routeName]);


    return (
        <View style={styles.container}>

            {/* Hidden Status Bar of the Phone */}
            <StatusBar hidden />

            {/* Logo - Navbar Animation*/}
            <Animated.View style={[
                styles.navbar,
                { height: navbarAnimation }
            ]}>
                <Animated.Image
                    source={icon}
                    style={[
                        styles.logo,
                        {
                            width: logoAnimation,
                            height: logoAnimation,
                            transform: [
                                { translateX: logoTranslateAnimationX },
                                { translateY: logoTranslateAnimationY }
                            ]
                        }
                    ]} />
                <Animated.Text
                    style={[
                        styles.username,
                        {
                            transform: [
                                { translateX: usernameTranslateAnimationX },
                                { translateY: usernameTranslateAnimationY }
                            ],
                            textAlign: 'center',
                            width: 150
                        }
                    ]}>
                    Usuarioasdasd
                </Animated.Text>
            </Animated.View>

            {/* Content */}
            <Animated.View style={[
                styles.content,
                { height: contentAnimation }
            ]}>
                {children}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#10254F',
    },
    navbar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        borderRadius: 40
    },
    content: {
        width: '100%',
    },
    username: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        borderWidth: 2,
    }
});