import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

//importe das fontes
import { 
  useFonts, 
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium
} from '@expo-google-fonts/montserrat-alternates';

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navegacao
      //Container
      //StackNavigation
      //StackScreen

      <NavigationContainer>

        {/* Componente para navegacao */}
        <Stack.Navigator>

          <Stack.Screen
            //nome tela
            name='Navegacao'
            //componente que sera chamado
            component={Navegacao}
            //titulo da tela
            options={{title: 'Navegacao'}}
          />

          <Stack.Screen
            name='Login'
            component={Login}
            options={{title: 'Login'}}
          />

        </Stack.Navigator>

      </NavigationContainer>
  );
}