import {jwtDecode} from "jwt-decode";
import thumbnail from "../../assets/img/img_landingpage-3x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToggleModal } from "../../hooks/useToggleModal";
import { useTogglePreview } from "../../hooks/useTogglePreview";
import { useToggleUserHasProjects } from "../../hooks/useToggleUserHasProjects";
import { useToggleSuccessModal } from "../../hooks/useToggleSuccessModal";
import { useToggleConfirmDeleteModal } from "../../hooks/useToggleConfirmDeleteModal";
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
import { ModalConfirmDelete } from "../../components/ModalConfirmDelete";

export const Home = () => {
    const navigate = useNavigate();
    const { open, toggleModal } = useToggleModal();
    const { preview, togglePreview } = useTogglePreview();
    const { success, toggleSuccessModal } = useToggleSuccessModal();
    const { confirmDelete, toggleConfirmDeleteModal } = useToggleConfirmDeleteModal();
    const { userHasProjects, toggleUserHasProjects } = useToggleUserHasProjects();
    const token = localStorage.getItem('token'); 
    const isTokenVerified = isTokenValid(token);
    console.log(token); 

    function isTokenValid(userToken) {
        try {
            jwtDecode(userToken)
            return true;
        } catch (err) {
            // err
            console.log(err);
            return false;
        }
    }
    
    const handleSaveClick = () => {
        toggleDeletion(false);

        if (userHasProjects) {
            toggleModal();
            toggleSuccessModal();
        } else {
            alert('Por favor, insira a imagem e os dados do seu projeto.')
        }
    };

    const handlePreviewClick = () => {
        if (userHasProjects) {
            toggleModal();
            togglePreview();
        } else {
            alert('Por favor, insira a imagem e os dados do seu projeto.')
        }
    };

    const handleClosePreviewClick = () => {
        togglePreview();
        toggleModal();
    };

    const handleDeleteClick = () => {
        toggleConfirmDeleteModal();
    };

    const handleConfirmDeleteClick = () => {
        toggleUserHasProjects();
        toggleDeletion(true);
        toggleConfirmDeleteModal();
        toggleSuccessModal();
    };

    const handleCancelDeleteClick = () => {
        toggleConfirmDeleteModal();
    };

    const [edit, toggleEdit] = useState(false);
    const [deletion, toggleDeletion] = useState(false);
    const editModal = () => toggleEdit(true);
    const addModal = () => toggleEdit(false);
    const modalTitle = edit ? "Editar projeto" : "Adicionar projeto";
    const successModalTitle = () => {
        if (deletion) {
            return "Projeto deletado com sucesso!";
        } else {
            if (edit) {
                return "Projeto editado com sucesso!";
            } else {
                return "Projeto adicionado com sucesso!";
            }
        }
    };

    // const handleUploadClick = () => {
    //     const fileInput = document.getElementById('upload');
    //     fileInput.click();
    // };

    if (isTokenVerified) {
        return (
            <Container>
                <Header />
    
                <Main>
                    <Profile userName="Camila Soares" userCountry="Brasil" onClick={() => { toggleModal(); addModal(); }} />
    
                    <h2>Meus projetos</h2>
    
                    <Input type="text" label="Buscar tags" name="searchTags" />
    
                    <Projects>
                        <ButtonAddProject onClick={() => { toggleModal(); addModal(); }} userHasProjects={userHasProjects} toggleUserHasProjects={toggleUserHasProjects} editModal={editModal} toggleModal={toggleModal} handleDeleteClick={handleDeleteClick} />
    
                        <BlankSpace />
    
                        <BlankSpace />
                    </Projects>
                </Main>
    
                <Modal title={modalTitle} open={open}>
                    <div className="modal__form">
                        <Input type="text" label="T�tulo" name="title" />
    
                        <Input type="text" label="Tags" name="tags" />
    
                        <Input type="text" label="Link" name="link" />
    
                        <Textarea label="Descri��o" name="description" />
                    </div>
    
                    <div className="modal__file">
                        <h3>Selecione o conte�do que voc� deseja fazer upload</h3>
    
                        <label htmlFor="upload">
                            <ButtonAddProject onClick={toggleUserHasProjects} className="on-edit" userHasProjects={userHasProjects} />
                            <input type="file" id="upload" style={{ display: "none" }} />
                        </label>
    
                        <button
                            className="preview"
                            style={{ margin: "1.6rem 0", background: "none", border: "none" }}
                            onClick={handlePreviewClick}>
                            Visualizar publica��o
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
                    description="Temos o prazer de compartilhar com voc�s uma varia��o da nosso primeiro recurso gratuito, Monoceros. � um modelo de uma p�gina para mostrar seus produtos. Tentamos redesenhar uma vers�o mais B2C e minimalista do nosso primeiro template de e-commerce."
                    link="https://gumroad.com/products/wxCSL"
                    onClick={handleClosePreviewClick}
                    preview={preview}>
    
                </ModalPreview>
    
                <ModalSuccess title={successModalTitle()} onClick={toggleSuccessModal} success={success} />
    
                <ModalConfirmDelete confirmDelete={confirmDelete} handleConfirmDeleteClick={handleConfirmDeleteClick} handleCancelDeleteClick={handleCancelDeleteClick} />
            </Container>
        );
    } else {
        navigate('/login');
    }
};