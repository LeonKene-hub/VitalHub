import { FormField } from "../../components/FormField/FormField"
import { Container } from "../../components/Container/Style"
import {Paragraph} from "../../components/Paragraph/Style"
import { Title } from "../../components/Title/Style"
import { InfoBody, Line, Map } from "./Style"

export const LocalMap = () => {
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
            </InfoBody>
        </Container>
    )
}