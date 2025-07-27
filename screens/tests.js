import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, FlatList, Button } from 'react-native';

const logo = require('../assets/ORPA-logo.png')
const DATA = [
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Contenido de Humedad',
        test: 'ContenidoHumedad'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Granulometria de gruesos',
        test: 'GranulometriaGruesos'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Granulometria de finos',
        test: 'ContenidoHumedad'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        title: 'Limites',
        test: 'ContenidoHumedad'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        title: 'Corte Directo',
        test: 'ContenidoHumedad'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Densidad 3/4"',
        test: 'ContenidoHumedad'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
        title: 'Densidad 10"',
        test: 'ContenidoHumedad'
    },
];
export default function Tests({ navigation }) {

    return (
        <View style={styles.container}>

            {/* Ocultar barra de estado del telefono */}
            <StatusBar hidden />

            {/* Navbar */}
            <View style={styles.navbar}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.title}>Proyectos</Text>
            </View>

            {/* Contenido */}
            <View style={[styles.content, styles.container]}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.test)}>
                            <Text style={styles.buttonText}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    navbar: {
        width: '100%',
        height: 80,
        backgroundColor: '#0A0A0A',
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#1A1A1A',
        paddingTop: 20
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        left: 10,
        top: 30
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        backgroundColor: '#101820',
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#007ACC',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#1A1A1A',
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    list: {

    }
})