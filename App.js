import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './screens/main.js'
import Projects from './screens/projects.js'
import Tests from './screens/tests.js';
import ContenidoHumedad from './screens/tests/contenido_humedad.js';
import GranulometriaGruesos from './screens/tests/granulometria_gruesos.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
        <Stack.Screen name="Main" component={Menu} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Tests" component={Tests} />
        <Stack.Screen name="ContenidoHumedad" component={ContenidoHumedad} />
        <Stack.Screen name="GranulometriaGruesos" component={GranulometriaGruesos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}