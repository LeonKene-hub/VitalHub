import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { NormalButton } from "../../components/Button/Buttons"
import { Container } from "../../components/Container/Style"
import { MedCard } from "../../components/MedCard/MedCard"
import { LinkMedium } from "../../components/Links/Style"
import { Title } from "../../components/Title/Style"
import { TouchableOpacity } from "react-native"
import { Body, RenderInside } from "./Style"
import { useState } from "react"

export const AgendarConsulta = ({
    status = "clinica"
}) => {

    const [clinicaSelected, setClinicaSelected] = useState(false);
    const [medicoSelected, setMedicoSelected] = useState(false);

    return (
        <Container style={{justifyContent: "center", alignItems: "center", margin: 0}}>
            <Body>
                <Title style={{marginTop: 35, marginBottom: 35}}>Selecionar {status}</Title>

                <RenderInside>

                    <ClinicCard
                        actived={clinicaSelected}
                        onPress={() => clinicaSelected ? setClinicaSelected(false) : setClinicaSelected(true)}
                    />
                    <MedCard
                        actived={medicoSelected}
                        onPress={() => medicoSelected ? setMedicoSelected(false) : setMedicoSelected(true)}
                    />
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