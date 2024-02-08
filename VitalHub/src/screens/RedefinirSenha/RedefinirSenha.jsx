import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Input } from "../../components/Input/Style"
import {Button, ButtonTitle} from "../../components/Button/Style"
import { BackgroundOption, ContainerLogo } from "../../components/ContainerLogo/Style"
import { AntDesign } from '@expo/vector-icons';


export const RedefinirSenha = () => {
    return(
        <Container>
            <ContainerLogo>
                <BackgroundOption>
                    <AntDesign name="arrowleft" size={24} color="#34898F" />
                </BackgroundOption>

                <Logo source={require("../../assets/VitalHub_Logo1.png")} />
            </ContainerLogo>

            <Title>Redefinir senha</Title>

            <Paragraph>Insira e confirme a sua nova senha</Paragraph>

            <Input placeholder="Nova Senha"/>
            <Input placeholder="Confirmar nova senha"/>

            <Button>
                <ButtonTitle>Confirmar sua senha</ButtonTitle>
            </Button>

        </Container>
    )
}