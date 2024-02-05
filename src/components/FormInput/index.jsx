import { Container } from "./styles";

export const FormInput = ({ label, value, name, onClick, onChange, icon: Icon, ...rest }) => {
    return (
        <Container>
            { Icon && <button type="button" onClick={onClick}><img src={Icon} /></button> }
            <input id={name} value={value} placeholder={label} onChange={(e) => onChange(e.target.value)} {...rest} />
            <label htmlFor={name}>{label}</label>
        </Container>
    );
};