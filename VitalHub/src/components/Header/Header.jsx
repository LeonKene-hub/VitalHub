import { Animated, TouchableOpacity } from "react-native";
import { BoxUser, DataUser, ImageUser, Line, LinearContainer, UserName, Wellcome } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from "react";

export const Header = ({ navigation }) => {

    const [index, setindex] = useState(0);
    // [0,1,2,3,4,5,6] \\
    const [colors, setColors] = useState(['#60BFC5', '#60BFC5','#60BFC5', ]);

    useEffect(() => {
        const color1 = `#60BFC5`
        const color2 = `#496BBA`

        const intervalo = setInterval(() => {
            if (index < 3) {

                setColors(prevColors => {
                    const nova = colors[index] == color1 ? color2 : color1; //checa a cor da posicao atual
                    const posicao = [...prevColors]; // copia o array inteiro
                    posicao[index] = nova;
                    return posicao
                })
                
                setindex(index + 1)
            } else {
                setindex(0)
            }
        }, 500); // Executa a cada 5 segundos

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(intervalo);
    }, [index])

    return (
        <LinearContainer
            colors={colors}
        >

            <Line>
                <BoxUser
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <ImageUser source={{ uri: "https://github.com/LeonKene-hub.png" }} />

                    <DataUser>
                        <Wellcome>Bem Vindo</Wellcome>
                        <UserName>Beta Tester</UserName>
                    </DataUser>

                </BoxUser>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="bell" size={25} color="white" />
                </TouchableOpacity>
            </Line>
        </LinearContainer>
    )
}
