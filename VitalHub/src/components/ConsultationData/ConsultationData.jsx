import { Age, Appointment, CardBoby, CardContainer, CardInfo, CardOptions, Data, Hour, ImageUserCard, InfoBox, Name, Option, OptionText, TypeConsul } from "./Style"
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Text } from "react-native";

export const ConsultationData = () => {
    return (
        <CardBoby>
            <CardContainer>
                <ImageUserCard source={{ uri: "https://github.com/LeonKene-hub.png" }} />

                <CardInfo>
                    <InfoBox>
                        <Name>Beta Tester</Name>
                        <Data>
                            <Age>20 anos</Age>
                            <Fontisto name="ellipse" size={7} color="#D9D9D9" />
                            <TypeConsul>Rotina</TypeConsul>
                        </Data>
                    </InfoBox>

                    <CardOptions>
                        <Hour>
                            <MaterialIcons name="watch-later" size={14} color="#49B3BA" />
                            <Appointment>14:00</Appointment>
                        </Hour>

                        <Option>
                            <OptionText>Cancelar</OptionText>
                        </Option>
                    </CardOptions>
                </CardInfo>

            </CardContainer>
        </CardBoby>
    )
}