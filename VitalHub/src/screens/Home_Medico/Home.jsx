import { CancellationModal } from "../../components/CancellationModal/CancellationModal"
import { ConsultationData } from "../../components/ConsultationData/ConsultationData"
import { PromptuaryModal } from "../../components/PromptuaryModal/PromptuaryModal"
import { OptionButtons } from "../../components/OptionButtons/OptionButtons"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/Style"
import { Header } from "../../components/Header/Header"
import { CardList, ContainerBox } from "./Style"
import { useState } from "react"

export const Home_Medico = () => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [modalCancel, setModalCancel] = useState(false);
    const [modalPromptuary, setModalPromptuary] = useState(false);
    const [idEncontrado, setIdEncontrado] = useState("");

    const dados = [
        {
            id: 1,
            Nome: "1",
            Idade: 20,
            Email: "teste1@senai.com",
            Situacao: "pendente"
        },
        {
            id: 2,
            Nome: "2",
            Idade: 14,
            Email: "student@hotmail.com",
            Situacao: "realizado"
        },
        {
            id: 3,
            Nome: "3",
            Idade: 37,
            Email: "master3@gmal.com",
            Situacao: "pendente"
        },
        {
            id: 4,
            Nome: "4",
            Idade: 18,
            Email: "student@hotmail.com",
            Situacao: "cancelado"
        },
        {
            id: 5,
            Nome: "5",
            Idade: 5,
            Email: "student@hotmail.com",
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
                            renderItem={({ item }) => item.Situacao === "pendente" ? <ConsultationData nome={item.Nome} situacao={item.Situacao} onPressCancel={() => setModalCancel(true)} /> : <></>}
                        />

                    ) : statusLista == "realizado" ? (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => item.Situacao === "realizado" ? <ConsultationData nome={item.Nome} situacao={item.Situacao} onPressAppoiment={() => {
                                setModalPromptuary(true);
                                setIdEncontrado(item);
                            }} /> : <></>}
                        />

                    ) : (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => item.Situacao === "cancelado" ? <ConsultationData nome={item.Nome} situacao={item.Situacao} /> : <></>}
                        />
                    )
                }

            </Container>
            <CancellationModal
                visible={modalCancel}
                onRequestClose={() => { setModalCancel(false) }}

                tranparent={true}
                title={"Cancelar consulta"}
                paragraph={"Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?"}
            />
            <PromptuaryModal
                visible={modalPromptuary}
                onRequestClose={() => { setModalPromptuary(false) }}

                name={idEncontrado.Nome}
                age={idEncontrado.Idade}
                email={idEncontrado.Email}
            />
        </>
    )
}