import { useToggleModal } from "../../hooks/useToggleModal";
import { Container, Main, Projects, BlankSpace } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { ButtonAddProject } from "../../components/ButtonAddProject";
import { Modal } from "../../components/Modal";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

export const Home = () => {
    const { open, toggleModal } = useToggleModal();

    const handleUploadClick = () => {
        const fileInput = document.getElementById('upload');
        fileInput.click();
    };

    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" onClick={toggleModal} />

                <h2>Meus projetos</h2>

                <Input type="text" label="Buscar tags" name="searchTags" />

                <Projects>
                    <ButtonAddProject onClick={toggleModal} />

                    <BlankSpace />

                    <BlankSpace />
                </Projects>
            </Main>

            <Modal title="Adicionar projeto" open={open}>
                <div className="modal__form">
                    <Input type="text" label="Título" name="title" />

                    <Input type="text" label="Tags" name="tags" />

                    <Input type="text" label="Link" name="link" />

                    <Textarea label="Descrição" name="description" />
                </div>

                <div className="modal__file">
                    <h3>Selecione o conteúdo que você deseja fazer upload</h3>

                    <label htmlFor="upload">
                        <ButtonAddProject onClick={handleUploadClick} />
                        <input type="file" id="upload" style={{ display: "none" }} />
                    </label>

                    <h3 style={{ margin: "1.6rem 0" }}>Visualizar publicação</h3>

                    <div style={{ display: "flex", gap: "1.6rem" }}>
                        <Button label="Salvar" $primary="true" />
                        <Button label="Cancelar" onClick={toggleModal} />
                    </div>
                </div>
            </Modal>
        </Container>
    );
};