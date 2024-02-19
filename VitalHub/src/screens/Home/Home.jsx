import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { OptionButtons } from "../../components/OptionButtons/OptionButtons"
import { CardList, ContainerBox } from "./Style"
import { ConsultationData } from "../../components/ConsultationData/ConsultationData"
import { useState } from "react"

export const Home = () => {
    const [statusLista, setStatusLista] = useState();
    const dados = [
        {
            id: 1,
            Nome: "1"
        },
        {
            id: 2,
            Nome: "2"
        },
        {
            id: 3,
            Nome: "3"
        },
        {
            id: 4,
            Nome: "4"
        },
        {
            id: 5,
            Nome: "5"
        },
    ]

    return (
        <Container>
            <Header />

            <CalendarHome />

            <ContainerBox>
                <OptionButtons
                    textButton={"Agendadas"}
                    actived={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <OptionButtons
                    textButton={"Realizadas"}
                    actived={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />

                <OptionButtons
                    textButton={"Canceladas"}
                    actived={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />
            </ContainerBox>

            <CardList
                data={dados}
                renderItem={(item) => <ConsultationData />}
                keyExtractor={item => dados.id}
            />
        </Container>
    )
}