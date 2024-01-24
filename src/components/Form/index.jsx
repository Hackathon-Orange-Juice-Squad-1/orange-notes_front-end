import { Container } from "./styles";

export const Form = ({ children, title, ...rest }) => {
    return (
        <Container {...rest}>
            <h2>{title}</h2>
            
            {children}
        </Container>
    );
};