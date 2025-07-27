import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Toast from '../../components/toast';

const logo = require('../../assets/ORPA-logo.png')

export default function GranulometriaGruesos() {

    const [pesoTara, setPesoTara] = useState(0)
    const [pesoMHconTara, setPesoMHconTara] = useState(0)
    const [pesoMSconTara, setPesoMSconTara] = useState(0)
    const [ContenidoHumedad, setContenidoHumedad] = useState(0)
    const [toast, setToast] = useState(false)
    const [toastText, setToastText] = useState('')

    const handlePesoTara = (value) => { setPesoTara(Number(value)) }
    const handlePesoMHconTara = (value) => setPesoMHconTara(Number(value))
    const handlePesoMSconTara = (value) => setPesoMSconTara(Number(value))

    useEffect(() => {
        const todosSonValidos =
            pesoTara > 0 &&
            pesoMHconTara > 0 &&
            pesoMSconTara > 0 &&
            pesoMSconTara > pesoTara;

        if (todosSonValidos) {
            const calcContenidoHumedad =
                ((pesoMHconTara - pesoMSconTara) / (pesoMSconTara - pesoTara)) * 100;

            setContenidoHumedad(parseFloat(calcContenidoHumedad.toFixed(2)));
        } else {
            setContenidoHumedad(null); // O 0 si prefieres
        }
    }, [pesoTara, pesoMHconTara, pesoMSconTara])

    return (
        <View style={styles.container}>
            {/* Ocultar barra de estado del telefono */}
            <StatusBar hidden />

            {/* Navbar */}
            <View style={styles.navbar}>

                {/* Logo de la empresa */}
                <Image style={styles.logo} source={logo} />

                {/* Nombre del ensayo */}
                <Text style={styles.title}>Granulometria de Gruesos</Text>

            </View>

            {/* Contenido */}
            <View style={[styles.content, { flex: 1 }]}>

                {/* Nombre del Proyecto */}
                <Text style={styles.titleProject}>JACHAÑA</Text>
                <Text style={styles.titleProject}>C-121 M2 KM 61+750</Text>

                {/* Datos */}
                <View style={styles.inputContainer}>
                    <TouchableOpacity 
                        style={styles.quest} 
                        onPress={() => {
                            setToast(true) 
                            setToastText('Peso de tara')
                    }}>
                        <Text style={{ color: '#ffffff', fontSize: 18 }}>?</Text>
                    </TouchableOpacity>
                    <Text style={styles.textData}>Wt :</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                        onChangeText={handlePesoTara}
                    />
                </View>

                <View style={{ height: 20 }} />

                <View style={styles.inputContainer}>
                    <TouchableOpacity 
                        style={styles.quest} 
                        onPress={() => {
                            setToast(true) 
                            setToastText('Peso muestra humeda + peso de tara')
                    }}>
                        <Text style={{ color: '#ffffff', fontSize: 18 }}>?</Text>
                    </TouchableOpacity>
                    <Text style={styles.textData}>Wmh + T :</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                        onChangeText={handlePesoMHconTara}
                    />
                </View>

                <View style={{ height: 20 }} />

                <View style={styles.inputContainer}>

                    <TouchableOpacity 
                        style={styles.quest} 
                        onPress={() => {
                            setToast(true) 
                            setToastText('Peso muestra seca + peso de tara')
                    }}>
                        <Text style={{ color: '#ffffff', fontSize: 18 }}>?</Text>
                    </TouchableOpacity>
                    <Text style={styles.textData}>
                        Wms + T :
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType="numeric"
                        onChangeText={handlePesoMSconTara}
                    />
                </View>

                {/* Mostrar resultado y subir datos */}
                <View style={styles.footer}>

                    {/* Contenido de Humedad */}
                    <View style={{
                        width: '100%',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <Text style={styles.textContenidoHumedad}>Contenido de Humedad:</Text>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 20,
                        }}>
                            {ContenidoHumedad !== null ? `${ContenidoHumedad} %` : '--'}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => setToast(true)}>
                        <Text style={styles.buttonText}>Subir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                toast &&
                <Toast text={toastText} setToast={setToast} />
            }
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
        paddingVertical: 20,
        justifyContent: 'flex-start'
    },
    titleProject: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: 20
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingLeft: 30
    },
    textData: {
        color: '#FFFFFF',
        fontSize: 20,
        width: '50%'
    },
    textInput: {
        color: '#FFFFFF',
        backgroundColor: '#24313C',
        fontSize: 14,
        fontWeight: 'light',
        borderRadius: 5,
        width: '50%'
    },
    quest: {
        width: 24,
        height: 24,
        backgroundColor: 'gray',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
    },
    footer: {
        marginBottom: 20,
        paddingVertical: 20,
        alignItems: 'center',
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
    textContenidoHumedad: {
        marginBottom: 40,
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'sans-serif',
        textAlign: 'left',
    }
})