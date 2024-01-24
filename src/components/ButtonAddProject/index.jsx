import { FaImages } from "react-icons/fa";
import { Container } from "./styles";

export const ButtonAddProject = () => {
    return (
        <Container>
            <label htmlFor="upload">
                <FaImages size={46} />

                <input id="upload" type="file" />
            </label>

            <h2>Adicione seu primeiro projeto</h2>

            <p>Compartilhe seu talento com milhares de pessoas  </p>
        </Container>
    );
};