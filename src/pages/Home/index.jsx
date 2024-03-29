import thumbnail from "../../assets/img/img_landingpage-3x.png";
import { getUserProjects } from "../../services/getUserProjects";
import React, { useState, useRef, useEffect } from "react";
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
import { ProjectThumbnail } from "../../components/ProjectThumbnail";
import { Modal } from "../../components/Modal";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ModalPreview } from "../../components/ModalPreview";
import { ModalSuccess } from "../../components/ModalSuccess";
import { ModalConfirmDelete } from "../../components/ModalConfirmDelete";
import { jwtDecode } from "jwt-decode";

export const Home = () => {
    const { open, toggleModal } = useToggleModal();
    const { preview, togglePreview } = useTogglePreview();
    const { success, toggleSuccessModal } = useToggleSuccessModal();
    const { confirmDelete, toggleConfirmDeleteModal } = useToggleConfirmDeleteModal();
    const { userHasProjects, setUserHasProjects, toggleUserHasProjects, checkUserProjects } = useToggleUserHasProjects();

    useEffect(() => {
        checkUserProjects().then((response) => {
            setUserHasProjects(response);
        });
    }, []);

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getUserProjects().then((response) => {
            setProjects(response);
        });
    }, []);

    const fileInputRef = useRef();

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const [focusedProject, setFocusedProject] = useState(null);

    const [previewTitleValue, setPreviewTitleValue] = useState("");
    const previousPreviewTitleValue = useRef("");
    const [previewDescriptionValue, setPreviewDescriptionValue] = useState("");
    const previousPreviewDescriptionValue = useRef("");
    const [previewLinkValue, setPreviewLinkValue] = useState("");
    const previousPreviewLinkValue = useRef("");

    useEffect(() => {
        previousPreviewTitleValue.current = previewTitleValue;
    }, [previewTitleValue]);

    useEffect(() => {
        previousPreviewDescriptionValue.current = previewDescriptionValue;
    }, [previewDescriptionValue]);

    useEffect(() => {
        previousPreviewLinkValue.current = previewLinkValue;
    }, [previewLinkValue]);

    const handleSaveClick = () => {
        toggleModal();
        toggleSuccessModal();
    };

    const handlePreviewClick = () => {
        toggleModal();
        togglePreview();
    };

    const handleClosePreviewClick = () => {
        togglePreview();
        toggleModal();
    };

    const handleDeleteClick = () => {
        toggleConfirmDeleteModal();
    };

    const handleConfirmDeleteClick = () => {
        toggleDeletion(true);
        projects.deleteProject();
        toggleConfirmDeleteModal();
        toggleSuccessModal();
    };

    const handleCancelDeleteClick = () => {
        toggleConfirmDeleteModal();
    };

    const handleCancelAddClick = () => {
        toggleModal();
    }

    const handleConfirmSuccessClick = () => {
        toggleSuccessModal();
        location.reload();
    };

    const [edit, toggleEdit] = useState(false);
    // const [deletion, toggleDeletion] = useState(false);
    const editModal = () => toggleEdit(true);
    const addModal = () => toggleEdit(false);
    const modalTitle = edit ? "Editar projeto" : "Adicionar projeto";
    const successModalTitle = () => {
        if (edit) {
            return "Projeto editado com sucesso!";
        } else {
            return "Projeto adicionado com sucesso!";
        }

    };
    // const handleUploadClick = () => {
    //     const fileInput = document.getElementById('upload');
    //     fileInput.click();
    // };

    const token = localStorage.getItem('token');
    const { id } = jwtDecode(token);

    function addProject(event) {
        event.preventDefault()
        fetch(`https://orange-notes-backend.onrender.com/projetos/${id}`, {
            method: 'POST',
            body: JSON.stringify({

                title: event.currentTarget.title.value,
                link: event.currentTarget.link.value,
                tags: [event.currentTarget.tags.value],
                desc: event.currentTarget.description.value,
            }),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(() => handleSaveClick())
            .catch(error => alert(error.message));
    }

    return (
        <Container>
            <Header />

            <Main>
                <Profile userCountry="Brasil" onClick={() => { toggleModal(); addModal(); }} />

                <div className="search">
                    <h2>Meus projetos</h2>

                    <Input type="text" label="Buscar tags" name="searchTags" />
                </div>

                <Projects>
                    {userHasProjects ?
                        projects.map(project => {
                            return (
                                <ProjectThumbnail
                                    onClick={() => { toggleModal(); editModal(); }}
                                    key={project._id}
                                    userName={project.userName}
                                    tags={project?.tags}
                                    thumb={project?.image?.url || 'https://img.freepik.com/fotos-gratis/inspiracao-desenvolvimento-moderno-criativo_53876-21248.jpg?w=996&t=st=1707142640~exp=1707143240~hmac=05607122ec7effc15bf1ba8cb1f54b466ccb16e0f51fed73ec5cff4bf5541f25'}
                                    title={project.title}
                                    description={project.desc}
                                    link={project.link}
                                    projectId={project._id}
                                />
                            )
                        })
                        : <div className="no-projects">
                            <ButtonAddProject
                                onClick={() => { toggleModal(); addModal(); }}
                                editModal={editModal}
                                toggleModal={toggleModal}
                                handleDeleteClick={handleDeleteClick}
                            />

                            <BlankSpace />

                            <BlankSpace />
                        </div>}

                    <ModalPreview
                        nome={focusedProject?.userName}
                        data={focusedProject?.dataAtualizacao}
                        title={focusedProject?.title}
                        image={focusedProject?.image?.url || 'https://img.freepik.com/fotos-gratis/inspiracao-desenvolvimento-moderno-criativo_53876-21248.jpg?w=996&t=st=1707142640~exp=1707143240~hmac=05607122ec7effc15bf1ba8cb1f54b466ccb16e0f51fed73ec5cff4bf5541f25'}
                        description={focusedProject?.desc}
                        link={focusedProject?.link}
                        onClick={() => setFocusedProject(null)}
                        preview={focusedProject !== null}>
                    </ModalPreview>
                </Projects>
            </Main>

            <Modal title={modalTitle} open={open} onSubmit={addProject}>
                <div className="modal__form">
                    <Input
                        type="text"
                        label="Título"
                        name="title"
                        ref={previousPreviewTitleValue}
                        value={previewTitleValue}
                        onChange={(e) => setPreviewTitleValue(e.target.value)}
                    />

                    <Input type="text" label="Tags" name="tags" />

                    <Input
                        type="text"
                        label="Link"
                        name="link"
                        ref={previousPreviewLinkValue}
                        value={previewLinkValue}
                        onChange={(e) => setPreviewLinkValue(e.target.value)}
                    />

                    <Textarea
                        label="Descrição"
                        name="description"
                        ref={previousPreviewDescriptionValue}
                        value={previewDescriptionValue}
                        onChange={(e) => setPreviewDescriptionValue(e.target.value)}
                    />
                </div>

                <div className="modal__file">
                    <h3>Selecione o conteúdo que você deseja fazer upload</h3>

                    <label htmlFor="upload">
                        <ButtonAddProject onClick={handleImageUploadClick} />
                        <input type="file" id="upload" ref={fileInputRef} style={{ display: 'none' }} />
                    </label>


                    <button
                        className="preview"
                        style={{ margin: "1.6rem 0", background: "none", border: "none" }}
                        onClick={handlePreviewClick}>
                        Visualizar publicação
                    </button>

                    <div style={{ display: "flex", gap: "1.6rem" }}>
                        <Button type="submit" label="Salvar" $primary="true" />
                        <Button label="Cancelar" onClick={handleCancelAddClick} />
                    </div>
                </div>
            </Modal>

            <ModalPreview
                title={previewTitleValue}
                image={thumbnail}
                description={previewDescriptionValue}
                link={previewLinkValue}
                onClick={handleClosePreviewClick}
                preview={preview}>
            </ModalPreview>

            <ModalSuccess title={successModalTitle()} onClick={handleConfirmSuccessClick} success={success} />

            <ModalConfirmDelete confirmDelete={confirmDelete} handleConfirmDeleteClick={handleConfirmDeleteClick} handleCancelDeleteClick={handleCancelDeleteClick} />
        </Container>
    );
};