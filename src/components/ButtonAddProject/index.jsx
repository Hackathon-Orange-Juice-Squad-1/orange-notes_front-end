import thumbnail from "../../assets/img/img_landingpage-3x.png"
import iconEdit from "../../assets/img/icon_edit.svg";
import React, { useState, useRef, useEffect } from "react";
import { FaImages } from "react-icons/fa";
import { Container, Thumbnail, Nav } from "./styles";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";

export const ButtonAddProject = ({ onClick, className, userHasProjects, toggleUserHasProjects, editModal, toggleModal }) => {
    const [isActive, setIsActive] = useState(false);
    const navRef = useRef();
    const ToggleIsActive = () => setIsActive(!isActive);

    const handleEditClick = () => {
        editModal();
        toggleModal();
    }

    const handleDeleteClick = () => {
        toggleUserHasProjects();
        ToggleIsActive();
    }

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!userHasProjects) {
        return (
            <Container onClick={onClick}>
                <FaImages className="icon" size={46} />

                <h2>Adicione seu primeiro projeto</h2>

                <p>Compartilhe seu talento com milhares de pessoas  </p>
            </Container>
        );
    } else {
        return (
            <Thumbnail>
                <img src={thumbnail} alt="Thumbnail de preview do projeto" />

                <button className={className} onClick={ToggleIsActive}>
                    <img src={iconEdit} alt="Ícone de edição" />
                </button>

                <div className={className}>
                    <ProfileSmall userName="Camila Soares" index="12/12" className="on-thumb" />

                    <ul>
                        <Tag tag="UX" />
                        <Tag tag="Web" />
                    </ul>
                </div>

                <Nav ref={navRef} className={isActive ? "navOpen" : "navClosed"}>
                <div className="arrow-up"></div>

                    <ul>
                        <li><button onClick={handleEditClick}>Editar</button></li>
                        <li><button onClick={handleDeleteClick}>Excluir</button></li>
                    </ul>
                </Nav>
            </Thumbnail>
        );
    };
};