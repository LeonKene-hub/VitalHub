import { ContentAccount, TextAccountLink } from "../../components/ContentAccount/Style"
import { NormalButton } from "../../components/Button/Buttons"
import { Paragraph } from "../../components/Paragraph/Style"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"

export const CriarConta = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo1.png")} />

            <Title>Criar conta</Title>

            <Paragraph>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Paragraph>

            <Input placeholder="Usuário ou E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirmar Senha" />

            <NormalButton title={"Cadastrar"} fieldWidth={90} />

            <ContentAccount>
                <TextAccountLink>Reenviar Código</TextAccountLink>
            </ContentAccount>
        </Container>
    )
}