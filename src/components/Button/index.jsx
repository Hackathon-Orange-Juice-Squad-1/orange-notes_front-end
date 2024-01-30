import { Container } from "./styles";

export const Button = ({ label, onClick, $primary, ...props }) => {
    return (
        <Container onClick={onClick} $primary={$primary} { ...props }>
            { label }
        </Container>
    );
};