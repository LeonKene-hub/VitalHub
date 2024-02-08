import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { BackgroundOption, ContainerLogo } from "../../components/ContainerLogo/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Title } from "../../components/Title/Style"
import { AntDesign } from '@expo/vector-icons';


export const RecuperarSenha = () => {
    return (
        <Container >
            <ContainerLogo>
                <BackgroundOption>
                    <AntDesign name="arrowleft" size={24} color="#34898F" />
                </BackgroundOption>

                <Logo source={require("../../assets/VitalHub_Logo1.png")} />
            </ContainerLogo>

            <Title>Recuperar senha</Title>

            <Paragraph>Digite abaixo o seu email cadastrado que enviaremos um link para recuperacao de senha</Paragraph>

            <Input
                placeholder={'Usuário ou Email'}
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}