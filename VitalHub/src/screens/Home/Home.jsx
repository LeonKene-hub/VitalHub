import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { OptionButtons } from "../../components/OptionButtons/OptionButtons"
import { CardList, ContainerBox } from "./Style"
import { ConsultationData } from "../../components/ConsultationData/ConsultationData"
import { useState } from "react"
import { CancellationModal } from "../../components/CancellationModal/CancellationModal"

export const Home = () => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [modalVisible, setModalVisible] = useState(false);

    const dados = [
        {
            id: 1,
            Nome: "1",
            Situacao: "pendente"
        },
        {
            id: 2,
            Nome: "2",
            Situacao: "realizado"
        },
        {
            id: 3,
            Nome: "3",
            Situacao: "pendente"
        },
        {
            id: 4,
            Nome: "4",
            Situacao: "cancelado"
        },
        {
            id: 5,
            Nome: "5",
            Situacao: "realizado"
        },
    ]

    return (
        <>
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

                {
                    statusLista == "pendente" ? (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item}) => item.Situacao === "pendente" ? <ConsultationData nome={item.Nome} situacao={item.Situacao} onPressCancel={() => setModalVisible(true)}/> : <></>}
                        />

                    ) : statusLista == "realizado" ? (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item}) => item.Situacao === "realizado" ? <ConsultationData nome={item.Nome} situacao={item.Situacao} onPressAppoiment={() => setModalVisible(true)}/> : <></>}
                        />

                    ) : (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item}) => item.Situacao === "cancelado" ? <ConsultationData nome={item.Nome} situacao={item.Situacao}/> : <></>}
                        />
                    )
                }

            </Container>
            <CancellationModal
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}
                tranparent={true}
                title={"Cancelar consulta"}
                paragraph={"Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?"}
            />
        </>
    )
}