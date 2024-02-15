import { BoxUser, DataUser, ImageUser, Line, LinearContainer, UserName, Wellcome } from "./Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Header = () => {
    return (
        <LinearContainer>
            <Line>
                <BoxUser>
                    <ImageUser source={{uri: "https://github.com/LeonKene-hub.png"}}/>

                    <DataUser>
                        <Wellcome>Bem Vindo</Wellcome>
                        <UserName>Beta Tester</UserName>
                    </DataUser>

                </BoxUser>

                <MaterialCommunityIcons name="bell" size={25} color="white" />
            </Line>
        </LinearContainer>
    )
}
