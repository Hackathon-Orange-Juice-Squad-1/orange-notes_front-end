import { Container } from "./styles";

export const ButtonEditProject = ({ onClick, className, editModal, toggleModal, handleDeleteClick, }) => {
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