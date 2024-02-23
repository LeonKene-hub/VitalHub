import { ContentAccount, TextAccount, TextAccountLink } from "../../components/ContentAccount/Style"
import { GoogleButton, NormalButton } from "../../components/Button/Buttons"
import { Container } from "../../components/Container/Style"
import { LinkMedium } from "../../components/Links/Style"
import { Input } from "../../components/Input/Style"
import { Title } from "../../components/Title/Style"
import { Logo } from "../../components/Logo/Style"

export const Login = () => {
    return (
        <Container>

            <Logo source={require("../../assets/VitalHub_Logo1.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou Email"
            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <NormalButton title={"Entrar"} fieldWidth={90} />

            <GoogleButton title={"Entrar com Google"} fieldWidth={90} />

            <ContentAccount>
                <TextAccount>Nao tem conta? <TextAccountLink>Crie uma conta agora!</TextAccountLink></TextAccount>
            </ContentAccount>

        </Container>
    )
}