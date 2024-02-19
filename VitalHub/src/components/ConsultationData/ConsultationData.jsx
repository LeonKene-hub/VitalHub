import { Age, Appointment, CardBoby, CardContainer, CardInfo, CardOptions, Data, Hour, ImageUserCard, InfoBox, Name, Option, OptionText, TypeConsul } from "./Style"
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export const ConsultationData = ({
    nome = "Beta Tester",
    idade = 20,
    tipoConsulta = "Rotina",
    hora = "14:00",
    opcao = "Cancelar"
}) => {
    return (
        <CardBoby>
            <CardContainer>
                <ImageUserCard source={{ uri: "https://github.com/LeonKene-hub.png" }} />

                <CardInfo>
                    <InfoBox>
                        <Name>{nome}</Name>
                        <Data>
                            <Age>{idade} anos</Age>
                            <Fontisto name="ellipse" size={7} color="#D9D9D9" />
                            <TypeConsul>{tipoConsulta}</TypeConsul>
                        </Data>
                    </InfoBox>

                    <CardOptions>
                        <Hour>
                            <MaterialIcons name="watch-later" size={14} color="#49B3BA" />
                            <Appointment> {hora} </Appointment>
                        </Hour>

                        <Option>
                            <OptionText> {opcao} </OptionText>
                        </Option>
                    </CardOptions>
                </CardInfo>

            </CardContainer>
        </CardBoby>
    )
}