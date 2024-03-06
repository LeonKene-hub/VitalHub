import { FormField } from "../../components/FormField/FormField"
import { Container } from "../../components/Container/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Title } from "../../components/Title/Style"
import { InfoBody, Line, Map } from "./Style"
import { TouchableOpacity } from "react-native"
import { LinkMedium } from "../../components/Links/Style"

export const LocalMap = ({ navigation }) => {
    return (
        <Container>
            <Map />
            <InfoBody>
                <Title>Clínica Natureh</Title>
                <Paragraph>São Paulo, SP</Paragraph>

                <FormField
                    labelText="Endereço"
                    fieldWidth={90}
                />

                <Line>
                    <FormField
                        labelText="Número"
                        fieldWidth={45}
                    />
                    <FormField
                        labelText="Bairro"
                        fieldWidth={45}
                    />
                </Line>

                <TouchableOpacity style={{ marginBottom: 15, marginTop: 15 }} onPress={() => navigation.replace('Home_Paciente')}>
                    <LinkMedium>Cancelar</LinkMedium>
                </TouchableOpacity>
            </InfoBody>
        </Container>
    )
}