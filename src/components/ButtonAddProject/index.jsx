// import { useState } from "react";
import { FaImages } from "react-icons/fa";
import { Container } from "./styles";

export const ButtonAddProject = ({ onClick }) => {
    // const [open, setOpen] = useState(false);

    return (
        <Container onClick={onClick}>
            <FaImages className="icon" size={46} />

            <h2>Adicione seu primeiro projeto</h2>

            <p>Compartilhe seu talento com milhares de pessoas  </p>
        </Container>
    );
};