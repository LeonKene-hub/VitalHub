import { Container } from "../../components/Container/Style"
import { ProfilePic } from "../../components/Profile/Style"
import { Title } from "../../components/Title/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { FormField } from "../../components/FormField/FormField"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { NormalButton } from "../../components/Button/Buttons"
import { View } from "react-native"

export const Perfil = () => {
    return (
        <Container>
            <ScrollForm>
                <ProfilePic source={require("../../assets/profile.png")} />
                <View style={{ alignItems: "center" }}>

                    <Title>Nome do paciente</Title>
                    <Paragraph>paciente@gmail.com</Paragraph>

                    <FormField fieldWidth={90} labelText="Data de nascimento" />
                    <FormField fieldWidth={90} labelText="CPF" />
                    <FormField fieldWidth={90} labelText="Endereco" />

                    <View style={{width: "90%", justifyContent: "space-between", flexDirection: "row"}}>
                        <FormField fieldWidth={45} labelText="Cep" />
                        <FormField fieldWidth={45} labelText="Cidade" />
                    </View>

                    <NormalButton title={"Salvar"} fieldWidth={90} />
                    <NormalButton title={"editar"} fieldWidth={90} />

                </View>
            </ScrollForm>
        </Container>
    )
}