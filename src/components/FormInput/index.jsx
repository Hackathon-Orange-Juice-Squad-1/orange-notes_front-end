import { useState } from "react";
import { Container } from "./styles";

export const FormInput = ({ label, name, onClick, icon: Icon, ...rest }) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');

    function handleTextChange(text) {
        setValue(text);
    
        if (text !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    return (
        <Container className={ isActive ? "active" : ""}>
            { Icon && <button type="button" onClick={onClick}><img src={Icon} /></button> }
            <input id={name} value={value} onChange={(e) => handleTextChange(e.target.value)} {...rest} />
            <label htmlFor={name}>{label}</label>
        </Container>
    );
};