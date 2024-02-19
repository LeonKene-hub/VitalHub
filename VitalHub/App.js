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

import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { Testes } from './src/screens/Testes/Testes';
import { Perfil } from './src/screens/Perfil/Perfil';
import { Home } from './src/screens/Home/Home';


export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold
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
        <Stack.Navigator screenOptions={{headerShown: false}}>

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

          <Stack.Screen
            name='RedefinirSenha'
            component={RedefinirSenha}
            options={{title: 'RedefinirSenha'}}
          />

          <Stack.Screen
            name='CriarConta'
            component={CriarConta}
            options={{title: 'CriarConta'}}
          />

          <Stack.Screen
            name='Testes'
            component={Testes}
            options={{title: 'Testes'}}
          />

          <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{title: 'Perfil'}}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{title: 'Home'}}
          />

        </Stack.Navigator>

      </NavigationContainer>
  );
}