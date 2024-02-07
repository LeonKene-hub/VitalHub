import { Button, ButtonTitle } from "../../components/Button/Style"
import { CheckCode, CheckCodeBox } from "../../components/CheckCode/Style"
import { Container } from "../../components/Container/Style"
import { ContentAccount, TextAccountLink } from "../../components/ContentAccount/Style"
import { Logo } from "../../components/Logo/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Title } from "../../components/Title/Style"


export const VerificarEmail = () => {
    return(
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

            <Title>Verifique seu e-mail</Title>

            <Paragraph>Digite o codigo de 4 digitos enviado para username@email.com</Paragraph>

            <CheckCodeBox>
                <CheckCode placeholder='0' keyboardType="numeric" maxLength={1}/>
                <CheckCode placeholder='0' keyboardType="numeric" maxLength={1}/>
                <CheckCode placeholder='0' keyboardType="numeric" maxLength={1}/>
                <CheckCode placeholder='0' keyboardType="numeric" maxLength={1}/>
            </CheckCodeBox>

            <Button>
                <ButtonTitle>Verificar</ButtonTitle>
            </Button>

            <ContentAccount>
                <TextAccountLink>Reenviar Codigo</TextAccountLink>
            </ContentAccount>
        </Container>
    )
}