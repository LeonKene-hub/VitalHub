import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Paginas
import { AgendarConsulta } from './src/screens/AgendarConsulta/AgendarConsulta';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { Prontuario } from './src/screens/Prontuario_Medico/Prontuario'
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { Home } from './src/screens/Home/Home';
import { Prescricao } from './src/screens/Prescricao/Prescricao';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Perfil } from './src/screens/Perfil/Perfil';
import { Login } from './src/screens/Login/Login';

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

//importe das fontes
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold
} from '@expo-google-fonts/quicksand';

import {
  useFonts,
  MontserratAlternates_700Bold,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium
} from '@expo-google-fonts/montserrat-alternates';
import { LocalMap } from './src/screens/LocalMap/LocalMap';
import { CameraTeste } from './src/screens/CameraTeste/CameraTeste';
import { Main } from './src/screens/Main/Main';

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name='Main'
          component={Main}
          options={{ title: 'Main' }}
        />

        {/* <Stack.Screen
          //nome tela
          name='Navegacao'
          //componente que sera chamado
          component={Navegacao}
          //titulo da tela
          options={{ title: 'Navegacao' }}
        /> */}

        <Stack.Screen
          name='RecuperarSenha'
          component={RecuperarSenha}
          options={{ title: 'RecuperarSenha' }}
        />

        <Stack.Screen
          name='VerificarEmail'
          component={VerificarEmail}
          options={{ title: 'VerificarEmail' }}
        />

        <Stack.Screen
          name='RedefinirSenha'
          component={RedefinirSenha}
          options={{ title: 'RedefinirSenha' }}
        />

        <Stack.Screen
          name='CriarConta'
          component={CriarConta}
          options={{ title: 'CriarConta' }}
        />

        <Stack.Screen
          name='Perfil'
          component={Perfil}
          options={{ title: 'Perfil' }}
        />

        {/* <Stack.Screen
          name='Home_Medico'
          component={Home_Medico}
          options={{ title: 'Home_Medico' }}
        /> */}

        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name='Prontuario'
          component={Prontuario}
          options={{ title: 'Prontuario' }}
        />

        <Stack.Screen
          name='AgendarConsulta'
          component={AgendarConsulta}
          options={{ title: 'AgendarConsulta' }}
        />

        <Stack.Screen
          name='Prescricao'
          component={Prescricao}
          options={{ title: 'Prescricao' }}
        />

        <Stack.Screen
          name='LocalMap'
          component={LocalMap}
          options={{ title: 'LocalMap' }}
        />

        <Stack.Screen
          name='CameraTeste'
          component={CameraTeste}
          options={{ title: 'CameraTeste' }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}