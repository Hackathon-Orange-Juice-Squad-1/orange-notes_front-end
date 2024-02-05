import {jwtDecode} from "jwt-decode";
import { useState, useEffect, useRef } from "react";
import { useToggleModal } from "../../hooks/useToggleModal";
import { useTogglePreview } from "../../hooks/useTogglePreview";
import { useToggleConfirmDeleteModal } from "../../hooks/useToggleConfirmDeleteModal";
import { useToggleSuccessModal } from "../../hooks/useToggleSuccessModal";
import { ButtonEditProject } from "../ButtonEditProject";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";
import { ModalPreview } from "../ModalPreview";
import { ModalConfirmDelete } from "../ModalConfirmDelete";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { Button } from "../Button";
import { Container, ThumbWrapper, UserInfo } from "./styles";

export const ProjectThumbnail = ({ onClick, className, thumb, tags = [], userName, title, description, link, projectId }) => {
    const { open, toggleModal } = useToggleModal();
    const { preview, togglePreview } = useTogglePreview();
    const { confirmDelete, toggleConfirmDeleteModal } = useToggleConfirmDeleteModal();
    const { toggleSuccessModal } = useToggleSuccessModal();
    const [isFocused, setIsFocused] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const token = localStorage.getItem('token');
    const userId = jwtDecode(token).id;

    function editProject(event) {
        event.preventDefault()
        fetch(`https://orange-notes-backend.onrender.com/projetos/${userId}/${projectId}`, {
            method: 'PUT',
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
            .then(() => handleSaveEditClick())
            .catch(error => alert(error.message));
    }

    const deleteProject = async () => {
        try {
            const response = await fetch(`https://orange-notes-backend.onrender.com/projetos/${userId}/${projectId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                toggleConfirmDeleteModal();
                toggleSuccessModal();
                location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const toggleEdit = () => {
        setOnEdit(!onEdit);
    };

    const handleMouseEnter = () => {
        setIsFocused(true);
    };

    const handleMouseLeave = () => {
        setIsFocused(false);
    };

    const handleClosePreview = () => {
        togglePreview();
        onEdit && toggleModal();
    };

    const handleSaveEditClick = () => {
        toggleEdit();
        toggleModal();
        toggleSuccessModal();
        location.reload();
    }

    const handleEditClick = () => {
        toggleEdit();
        toggleModal();
    };

    const handleDeleteClick = () => {
        toggleConfirmDeleteModal();
    };

    const handlePreviewClick = () => {
        toggleModal();
        togglePreview();
    };

    const handleCancelClick = () => {
        toggleEdit();
        toggleModal();
    };

    const handleCancelDeleteClick = () => {
        toggleConfirmDeleteModal();
    };

    const [previewTitleValue, setPreviewTitleValue] = useState(title);
    const previousPreviewTitleValue = useRef("");
    const [previewDescriptionValue, setPreviewDescriptionValue] = useState("");
    const previousPreviewDescriptionValue = useRef(description);
    const [previewLinkValue, setPreviewLinkValue] = useState("");
    const previousPreviewLinkValue = useRef(link);

    useEffect(() => {
        previousPreviewTitleValue.current = previewTitleValue;
    }, [previewTitleValue]);

    useEffect(() => {
        previousPreviewDescriptionValue.current = previewDescriptionValue;
    }, [previewDescriptionValue]);

    useEffect(() => {
        previousPreviewLinkValue.current = previewLinkValue;
    }, [previewLinkValue]);

    return (
        <>
            <Container>
                <ThumbWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={thumb} alt="Thumbnail de preview do projeto" onClick={togglePreview} />

                    {isFocused && <ButtonEditProject onClick={onClick} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />}
                </ThumbWrapper>

                <UserInfo className={className}>
                    <ProfileSmall userName={userName} index="12/12" className="on-thumb" />

                    <ul>
                        {tags.map((tag, index) => (
                            <Tag key={index + tag} tag={tag} />
                        ))}
                    </ul>
                </UserInfo>
            </Container>

            { onEdit ? <ModalPreview
                title={previewTitleValue}
                image={thumb}
                description={previewDescriptionValue}
                link={previewLinkValue}
                onClick={handleClosePreview}
                preview={preview}>
            </ModalPreview> 
            : <ModalPreview
                title={title}
                image={thumb}
                description={description}
                link={link}
                onClick={handleClosePreview}
                preview={preview}>
            </ModalPreview> }

            <Modal title="Editar projeto" open={open} onSubmit={editProject}>
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
                        <ThumbWrapper>
                            <img src={thumb} alt="Thumbnail de preview do projeto" />
                        </ThumbWrapper>
                        <input type="file" id="upload" style={{ display: "none" }} />
                    </label>


                    <button
                        className="preview"
                        style={{ margin: "1.6rem 0", background: "none", border: "none" }}
                        onClick={handlePreviewClick}>
                        Visualizar publicação
                    </button>

                    <div style={{ display: "flex", gap: "1.6rem" }}>
                        <Button type="submit" label="Salvar" $primary="true" />
                        <Button label="Cancelar" onClick={handleCancelClick} />
                    </div>
                </div>
            </Modal>

            <ModalConfirmDelete confirmDelete={confirmDelete} handleConfirmDeleteClick={deleteProject} handleCancelDeleteClick={handleCancelDeleteClick} deleteProject={handleDeleteClick} />
        </>
    );
};