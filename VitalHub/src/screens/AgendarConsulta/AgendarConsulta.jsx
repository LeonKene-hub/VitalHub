import { NormalButton } from "../../components/Button/Buttons"
import { Container } from "../../components/Container/Style"
import { LinkMedium } from "../../components/Links/Style"
import { Title } from "../../components/Title/Style"
import { TouchableOpacity } from "react-native"
import { Body, RenderInside } from "./Style"

export const AgendarConsulta = ({
    status = "clinica"
}) => {
    return (
        <Container style={{justifyContent: "center", alignItems: "center", margin: 0}}>
            <Body>
                <Title style={{marginTop: 35, marginBottom: 35}}>Selecionar {status}</Title>

                <RenderInside>
                    
                </RenderInside>

                <NormalButton
                    title={"Continuar"}
                    //fieldWidth={90}
                />

                <TouchableOpacity style={{ marginBottom: 15 }}>
                    <LinkMedium>Cancelar</LinkMedium>
                </TouchableOpacity>
            </Body>
        </Container>
    )
}