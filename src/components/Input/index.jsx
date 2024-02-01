import { Container } from "./styles";

export const Input = ({ label, name, value, ...rest }) => {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <input id={name} placeholder={label} value={value} {...rest} />
        </Container>
    );
};