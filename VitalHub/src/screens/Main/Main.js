import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home_Paciente } from '../Home_Paciente/Home'
import { Perfil } from '../Perfil/Perfil'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='Home'

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if ( route.name === "Home" ) {
                        return(
                            <></>
                        )
                    } else {

                    }
                } 
            })}
        >

            <BottomTab.Screen
                name="Home_Paciente"
                component={Home_Paciente}
            />


            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
            />
        </BottomTab.Navigator>
    )
}