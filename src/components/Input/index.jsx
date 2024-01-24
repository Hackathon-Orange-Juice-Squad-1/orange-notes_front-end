import { Container } from "./styles";

export const Input = ({ label, name, ...rest }) => {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <input id={name} placeholder={label} {...rest} />
        </Container>
    );
};