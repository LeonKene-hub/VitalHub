import { NormalButton } from "../../components/Button/Buttons"
import { Container } from "../../components/Container/Style"
import { ContentAccount, TextAccountLink } from "../../components/ContentAccount/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Paragraph } from "../../components/Paragraph/Style"
import { Title } from "../../components/Title/Style"

export const CriarConta = () => {
    return(
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

            <Title>Criar conta</Title>

            <Paragraph>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Paragraph>

            <Input placeholder="Usuário ou E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confirmar Senha"/>

            <NormalButton title={"Cadastrar"} fieldWidth={90}/>

            <ContentAccount>
                <TextAccountLink>Reenviar Código</TextAccountLink>
            </ContentAccount>
        </Container>
    )
}