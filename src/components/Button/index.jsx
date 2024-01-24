import { Container } from "./styles";

export const Button = ({ label, ...props }) => {
    return (
        <Container { ...props }>
            { label }
        </Container>
    );
};