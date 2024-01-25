import { Container } from "./styles";

export const Button = ({ label, onClick, ...props }) => {
    return (
        <Container onClick={onClick} { ...props }>
            { label }
        </Container>
    );
};