import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';

const logo = require('../assets/ORPA-logo.png')

export default function Projects ({ navigation }) {

    return (
        // Contenedor de la vista
        <View style={styles.container}>

            {/* Ocultar barra de estado del telefono */}
            <StatusBar hidden/>

            {/* Contenido del menu principal - LOGO */}
            <View style={styles.content}>

                {/* Logo de la aplicacion */}
                <Image source={logo} style={styles.logo}/>

            </View>

            {/* Contenido del menu principal - Opciones */}
            <View style={[styles.content, styles.content_options]}>

                {/* Opciones personalidas */}
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Projects')}>
                    <Text style={styles.buttonText}>Proyectos</Text>
                </TouchableOpacity>

            </View>
        </View>
    )      
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#101820',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        fontSize: 20
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
    content: {
        width: '100%',
        height: '50%',
        paddingHorizontal: 40,
        paddingTop: 60,
        alignItems: 'center',
    },
    content_options: {
        justifyContent: 'flex-end',
        paddingBottom: 100        
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#007ACC',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#1A1A1A',
        borderRadius: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'sans-serif'
    }
})