import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Title } from "../../components/Title/Style"


export const RecuperarSenha = () => {
    return(
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

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