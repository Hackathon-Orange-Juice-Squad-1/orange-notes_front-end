import { useState, useEffect, useRef } from "react";
import iconEdit from "../../assets/img/icon_edit.svg";
import { Container, Nav } from "./styles";
// import { ThumbWrapper } from "../ProjectThumbnail/styles";

export const ButtonEditProject = ({ className, handleDeleteClick, handleEditClick }) => {
    const navRef = useRef();
    const [isActive, setIsActive] = useState(false);
    const ToggleIsActive = () => setIsActive(!isActive);

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

    return (
        <Container>
            <button className={className} onClick={ToggleIsActive}>
                <img src={iconEdit} alt="Ícone de edição" />
            </button>

            <Nav ref={navRef} className={isActive ? "navOpen" : "navClosed"}>
                <div className="arrow-up"></div>

                <ul>
                    <li><button onClick={handleEditClick}>Editar</button></li>
                    <li><button onClick={handleDeleteClick}>Excluir</button></li>
                </ul>
            </Nav>
        </Container>
    );
};