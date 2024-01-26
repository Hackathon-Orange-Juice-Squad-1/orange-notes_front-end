import thumbnail from "../../assets/img/img_landingpage-3x.png";
import { useToggleModal } from "../../hooks/useToggleModal";
import { Container, Main, Projects, BlankSpace } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { ButtonAddProject } from "../../components/ButtonAddProject";
import { Modal } from "../../components/Modal";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ModalPreview } from "../../components/ModalPreview";

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

                    <a href="/"><h3 style={{ margin: "1.6rem 0" }}>Visualizar publicação</h3></a>
                    
                    <div style={{ display: "flex", gap: "1.6rem" }}>
                        <Button label="Salvar" $primary="true" />
                        <Button label="Cancelar" onClick={toggleModal} />
                    </div>
                </div>
            </Modal>

            <ModalPreview 
                title="Ecommerce One Page" 
                image={thumbnail} 
                description="Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce."
                link="https://gumroad.com/products/wxCSL"
                previewopen>

            </ModalPreview>
        </Container>
    );
};