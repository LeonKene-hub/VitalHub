import { CancellationModal } from "../../components/CancellationModal/CancellationModal"
import { ConsultationData } from "../../components/ConsultationData/ConsultationData"
import { PromptuaryModal } from "../../components/PromptuaryModal/PromptuaryModal"
import { NewConsulModal } from "../../components/NewConsulModal/NewConsulModal"
import { OptionButtons } from "../../components/OptionButtons/OptionButtons"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { DoctorModal } from "../../components/DoctorModal/DoctorModal"
import { Container } from "../../components/Container/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CardList, ContainerBox, NewConsul } from "./Style"
import { Header } from "../../components/Header/Header"
import { useState } from "react"

export const Home_Paciente = ({ navigation }) => {
    const [statusLista, setStatusLista] = useState("pendente");

    const [modalCancel, setModalCancel] = useState(false);
    const [modalPromptuary, setModalPromptuary] = useState(false);
    const [modalNewConsul, setModalNewConsul] = useState(false);
    const [modalDoctor, setModalDoctor] = useState(false);


    const [idEncontrado, setIdEncontrado] = useState("");

    const dados = [
        {
            id: 1,
            Nome: "Dr.1",
            Idade: 35,
            Email: "teste1@senai.com",
            Situacao: "pendente"
        },
        {
            id: 2,
            Nome: "Dr.2",
            Idade: 44,
            Email: "student@hotmail.com",
            Situacao: "realizado"
        },
        {
            id: 3,
            Nome: "Dr.3",
            Idade: 37,
            Email: "master3@gmal.com",
            Situacao: "pendente"
        },
        {
            id: 4,
            Nome: "Dr.4",
            Idade: 28,
            Email: "student@hotmail.com",
            Situacao: "cancelado"
        },
        {
            id: 5,
            Nome: "Dr.5",
            Idade: 55,
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
                            renderItem={({ item }) => item.Situacao === "pendente" ?
                                <ConsultationData
                                    nome={item.Nome}
                                    situacao={item.Situacao}
                                    onPressCancel={() => setModalCancel(true)}
                                    onPressCard={() => { setModalDoctor(true); setIdEncontrado(item); }}
                                /> : <></>}
                        />

                    ) : statusLista == "realizado" ? (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => item.Situacao === "realizado" ?
                                <ConsultationData
                                    nome={item.Nome}
                                    situacao={item.Situacao}
                                    onPressAppoiment={() => { setModalPromptuary(true); setIdEncontrado(item); }}
                                /> : <></>}
                        />

                    ) : (

                        <CardList
                            data={dados}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => item.Situacao === "cancelado" ?
                                <ConsultationData
                                    nome={item.Nome}
                                    situacao={item.Situacao}
                                /> : <></>}
                        />
                    )
                }
                {/* adicionar consulta */}
                <NewConsul onPress={() => setModalNewConsul(true)}>
                    <MaterialCommunityIcons name="stethoscope" size={32} color="#FBFBFB" />
                </NewConsul>

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
                navigation={navigation}

                name={idEncontrado.Nome}
                age={idEncontrado.Idade}
                email={idEncontrado.Email}
            />
            <NewConsulModal
                visible={modalNewConsul}
                onRequestClose={() => { setModalNewConsul(false) }}
            />
            <DoctorModal
                visible={modalDoctor}
                onRequestClose={() => setModalDoctor(false)}
                doctorName={idEncontrado.Nome}
                navigation={navigation}
            />
        </>
    )
}