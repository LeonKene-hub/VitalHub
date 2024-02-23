import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Paginas
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedefinirSenha } from './src/screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { Perfil } from './src/screens/Perfil/Perfil';
import { Home_Medico } from './src/screens/Home_Medico/Home';
import { Prontuario } from './src/screens/Prontuario_Medico/Prontuario'

//instancia do StackNavigator
const Stack = createNativeStackNavigator();

//importe das fontes
import { 
  useFonts, 
  MontserratAlternates_700Bold,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium
} from '@expo-google-fonts/montserrat-alternates';
import { Home_Paciente } from './src/screens/Home_Paciente/Home';


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
            name='Perfil'
            component={Perfil}
            options={{title: 'Perfil'}}
          />

          <Stack.Screen
            name='Home_Medico'
            component={Home_Medico}
            options={{title: 'Home_Medico'}}
          />

          <Stack.Screen
            name='Home_Paciente'
            component={Home_Paciente}
            options={{title: 'Home_Paciente'}}
          />

          <Stack.Screen
            name='Prontuario'
            component={Prontuario}
            options={{title: 'Prontuario'}}
          />

        </Stack.Navigator>

      </NavigationContainer>
  );
}