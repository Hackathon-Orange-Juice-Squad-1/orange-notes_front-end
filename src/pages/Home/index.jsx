import { useToggleModal } from "../../hooks/useToggleModal";
import { Container, Main, Projects, BlankSpace } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { ButtonAddProject } from "../../components/ButtonAddProject";
import { Modal } from "../../components/Modal";

export const Home = () => {
    const { open, toggleModal } = useToggleModal();

    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" onClick={toggleModal} />

                <h2>Meus projetos</h2>

                <Input label="Buscar tags" name="searchTags" />

                <Projects>
                    <ButtonAddProject onClick={toggleModal} />

                    <BlankSpace />

                    <BlankSpace />
                </Projects>
            </Main>

            <Modal isOpen={open}>
                <h1>Modal</h1>
                <button onClick={toggleModal}>Fechar</button>
            </Modal>
        </Container>
    );
};