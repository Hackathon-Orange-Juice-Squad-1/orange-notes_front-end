import { useState } from "react";
import { Container, Main, Projects, BlankSpace } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { ButtonAddProject } from "../../components/ButtonAddProject";
import { Modal } from "../../components/Modal";

export const Home = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" />

                <h2>Meus projetos</h2>

                <Input label="Buscar tags" name="searchTags" />

                <Projects>
                    <ButtonAddProject onClick={() => setOpen(!open)} />

                    <BlankSpace />

                    <BlankSpace />
                </Projects>
            </Main>

            <Modal isOpen={open}>
                <h1>Modal</h1>
                <button onClick={() => setOpen(!open)}>Fechar</button>
            </Modal>
        </Container>
    );
};