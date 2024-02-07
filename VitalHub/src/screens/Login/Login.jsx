import { Image } from "react-native"
import { Button, ButtonGoogle, ButtonGoogleTitle, ButtonTitle } from "../../components/Button/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkMedium } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount, TextAccountLink } from "../../components/ContentAccount/Style"

export const Login = () => {
    return(
        <Container>

            <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou Email"
            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={24} color="#496BBA" />
                <ButtonGoogleTitle>Entrar com Google</ButtonGoogleTitle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Nao tem conta? <TextAccountLink>Crie uma conta agora!</TextAccountLink></TextAccount>
            </ContentAccount>

        </Container>
    )
}