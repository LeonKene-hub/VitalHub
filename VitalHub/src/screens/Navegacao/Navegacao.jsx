import { Button, View } from "react-native";
import { Title } from "../../components/Title/Style";

export const Navegacao = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />

            <Button
                title="VerificarEmail"
                onPress={() => navigation.navigate('VerificarEmail')}
            />

            <Button
                title="RedefinirSenha"
                onPress={() => navigation.navigate('RedefinirSenha')}
            />

            <Button
                title="CriarConta"
                onPress={() => navigation.navigate('CriarConta')}
            />

            <Button
                title="Testes"
                onPress={() => navigation.navigate('Testes')}
            />

            <Title> Dentro do app</Title>
            <Button
                title="Perfil"
                onPress={() => navigation.navigate('Perfil')}
            />
        </View>
    );
}