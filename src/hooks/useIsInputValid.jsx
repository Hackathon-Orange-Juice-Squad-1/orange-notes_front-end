import { useState } from 'react';

export function useIsInputValid() {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleTextChange = (event) => {
        setValue(event.target.value);
    };

    const checkValidity = () => {
        if (value.trim() === "") {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    return { value, isValid, handleTextChange, checkValidity };
}