import { TouchableOpacity } from "react-native"
import { NormalButton } from "../Button/Buttons"
import { FormChoice, FormField } from "../FormField/FormField"
import { LinkMedium } from "../Links/Style"
import { Title } from "../Title/Style"
import { ConsulLevel, ConsulLocal, ContainerView, ModalConsul} from "./Style"


export const NewConsulModal = ({
    visible,
    onRequestClose
}) => {
    return (
        <ModalConsul
            isVisible={visible}
        >
            <ContainerView>
                <Title>Agendar consulta</Title>

                <ConsulLevel>
                    <FormChoice 
                        fieldWidth={90}
                        labelText={"Qual o nível da consulta"}
                    />
                    {/* <FormField
                        editable={true}
                        fieldWidth={90}
                        placeholder={"Rotina, Exame, Urgência"}
                        labelText="Qual o nível da consulta"
                    /> */}
                </ConsulLevel>

                <ConsulLocal>
                    <FormField
                        fieldWidth={90}
                        editable={true}
                        placeholder={"Informe a localização"}
                        labelText="Informe a localização desejada"
                    />
                </ConsulLocal>

                <NormalButton
                    fieldWidth={90}
                    title={"continuar"}
                />

                <TouchableOpacity onPress={onRequestClose}>
                    <LinkMedium>Cancelar</LinkMedium>
                </TouchableOpacity>
            </ContainerView>
        </ModalConsul>
    )
}