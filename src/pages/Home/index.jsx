import thumbnail from "../../assets/img/img_landingpage-3x.png";
import React, { useState } from "react";
import { useToggleModal } from "../../hooks/useToggleModal";
import { useTogglePreview } from "../../hooks/useTogglePreview";
import { useToggleUserHasProjects } from "../../hooks/useToggleUserHasProjects";
import { useToggleSuccessModal } from "../../hooks/useToggleSuccessModal";
import { Container, Main, Projects, BlankSpace } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { ButtonAddProject } from "../../components/ButtonAddProject";
import { Modal } from "../../components/Modal";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ModalPreview } from "../../components/ModalPreview";
import { ModalSuccess } from "../../components/ModalSuccess";

export const Home = () => {
    const { open, toggleModal } = useToggleModal();
    const { preview, togglePreview } = useTogglePreview();
    const { success, toggleSuccessModal } = useToggleSuccessModal();
    const { userHasProjects, toggleUserHasProjects } = useToggleUserHasProjects();

    const handleSaveClick = () => {
        if (userHasProjects) {
            toggleModal();
            toggleSuccessModal();
        } else {
            alert('Por favor, insira a imagem e os dados do seu projeto.')
        }
    };

    const [edit, toggleEdit] = useState(false);
    const editModal = () => toggleEdit(true);
    const addModal = () => toggleEdit(false);
    const modalTitle = edit ? "Editar projeto" : "Adicionar projeto";
    const successModalTitle = edit ? "Edição concluída com sucesso!" : "Projeto adicionado com sucesso!";

    // const handleUploadClick = () => {
    //     const fileInput = document.getElementById('upload');
    //     fileInput.click();
    // };


    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" onClick={() => { toggleModal(); addModal(); }} />

                <h2>Meus projetos</h2>

                <Input type="text" label="Buscar tags" name="searchTags" />

                <Projects>
                    <ButtonAddProject onClick={() => { toggleModal(); addModal(); }} userHasProjects={userHasProjects} toggleUserHasProjects={toggleUserHasProjects} editModal={editModal} toggleModal={toggleModal} />

                    <BlankSpace />

                    <BlankSpace />
                </Projects>
            </Main>

            <Modal title={modalTitle} open={open}>
                <div className="modal__form">
                    <Input type="text" label="Título" name="title" />

                    <Input type="text" label="Tags" name="tags" />

                    <Input type="text" label="Link" name="link" />

                    <Textarea label="Descrição" name="description" />
                </div>

                <div className="modal__file">
                    <h3>Selecione o conteúdo que você deseja fazer upload</h3>

                    <label htmlFor="upload">
                        <ButtonAddProject onClick={toggleUserHasProjects} className="on-edit" userHasProjects={userHasProjects} />
                        <input type="file" id="upload" style={{ display: "none" }} />
                    </label>

                    <button 
                        className="preview" 
                        style={{ margin: "1.6rem 0", background: "none", border: "none" }}
                        onClick={() => { toggleModal(); togglePreview(); 
                    }}>
                            Visualizar publicação
                    </button>
                    
                    <div style={{ display: "flex", gap: "1.6rem" }}>
                        <Button label="Salvar" $primary="true" onClick={handleSaveClick} />
                        <Button label="Cancelar" onClick={toggleModal} />
                    </div>
                </div>
            </Modal>

            <ModalPreview 
                title="Ecommerce One Page" 
                image={thumbnail} 
                description="Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce."
                link="https://gumroad.com/products/wxCSL"
                onClick={togglePreview}
                preview={preview}>

            </ModalPreview>

            <ModalSuccess title={successModalTitle} onClick={toggleSuccessModal} success={success} />
        </Container>
    );
};