import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout from '../components/layout.js';
import Main from './main.js';
import Projects from './projects.js';

const Stack = createNativeStackNavigator();

export default function RootScreen() {
    return (
        <Layout>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Projects" component={Projects} />
            </Stack.Navigator>
        </Layout>
    );
}
