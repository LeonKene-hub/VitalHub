import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Input } from "../../components/Input/Style"


export const RedefinirSenha = () => {
    return(
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

            <Title>Redefinir senha</Title>

            <Paragraph>Insira e confirme a sua nova senha</Paragraph>

            <Input/>
            <Input/>

        </Container>
    )
}