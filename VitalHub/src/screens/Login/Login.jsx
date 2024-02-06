import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"

export const Login = () => {
    return(
        <Container>

            <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Uruário ou Email"
            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <LinkMedium>Esqueceu sua senha</LinkMedium>

            {/* <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonGoogleTitle></ButtonGoogleTitle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount> */}

        </Container>
    )
}