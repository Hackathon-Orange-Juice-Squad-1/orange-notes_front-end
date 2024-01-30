import { Container } from "./styles";

export const Textarea = ({ label, name, ...rest }) => {
    return (
        <Container>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} placeholder={label}{...rest} />
        </Container>
    );
};