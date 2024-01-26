import { useState } from "react";

export const useToggleSuccessModal = () => {
    const [success, setSuccess] = useState(false);

    const toggleSuccessModal = () => { setSuccess(!success) }      

    return { success, toggleSuccessModal };
};