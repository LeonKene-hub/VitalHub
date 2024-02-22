import { Container } from "../../components/Container/Style"
import { ProfilePic } from "../../components/Profile/Style"
import { Title } from "../../components/Title/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { FormField } from "../../components/FormField/FormField"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { NormalButton } from "../../components/Button/Buttons"
import { TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { LinkMedium } from "../../components/Links/Style"

export const Prontuario = () => {

    const [formEdit, setFormEdit] = useState(false);


    return (
        <Container>
            <ScrollForm>
                <ProfilePic source={require("../../assets/profile.png")} />
                <View style={{ alignItems: "center" }}>

                    <Title>Nome do paciente</Title>
                    <Paragraph>paciente@gmail.com</Paragraph>

                    <FormField fieldWidth={90} editable={formEdit} placeholder={"Descrição"} labelText="Descrição da consulta" />
                    <FormField fieldWidth={90} editable={formEdit} placeholder={"Diagnóstico"} labelText="Diagnóstico do pacienteF" />
                    <FormField fieldWidth={90} editable={formEdit} placeholder={"Prescrição medica"} labelText="Prescrição médica" />

                    {formEdit == false ? (
                        <NormalButton title={"editar"} onPress={() => { setFormEdit(true) }} fieldWidth={90} />
                    ) : (
                        <NormalButton title={"Salvar"} onPress={() => { setFormEdit(false) }} fieldWidth={90} />
                    )}

                    <TouchableOpacity>
                        <LinkMedium>Cancelar</LinkMedium>
                    </TouchableOpacity>
                </View>
            </ScrollForm>
        </Container>
    )
}