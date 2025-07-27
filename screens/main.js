import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

export default function Main({ navigation }) {

    return (
        // Vista principal de la app
        <View style={style.container}>

            {/* Options */}
            <View>

                {/* Navigate - Projects */}
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Projects')}
                    style={style.button}
                >
                    <Text style={style.buttonText}>Proyectos</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#10254F',
        paddingHorizontal: 20,
    },
    container_icon: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // icon: {
    //     width: 200,
    //     height: 200,
    //     borderRadius: 100,
    // },
    username: {
        color: 'white',
        fontSize: 15
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        color: 'black',
        fontSize: 16
    }
})

