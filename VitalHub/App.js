import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Paginas
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

//importe das fontes
import { 
  useFonts, 
  MontserratAlternates_700Bold,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium
} from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';


export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium
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

          <Stack.Screen
            name='RecuperarSenha'
            component={RecuperarSenha}
            options={{title: 'RecuperarSenha'}}
          />

          <Stack.Screen
            name='VerificarEmail'
            component={VerificarEmail}
            options={{title: 'VerificarSenha'}}
          />

        </Stack.Navigator>

      </NavigationContainer>
  );
}