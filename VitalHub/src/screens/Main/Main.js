import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home_Paciente } from '../Home_Paciente/Home'
import { Perfil } from '../Perfil/Perfil'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ContentIcon, TextIcon } from './Style';



const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='Home_Paciente'

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 70, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if ( route.name === "Home_Paciente" ) {
                        return(
                            <ContentIcon
                                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color="#4E4B59"/>
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    } else {
                        return(
                            <ContentIcon
                                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name='user-circle' size={18} color="#4E4B59"/>
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )
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