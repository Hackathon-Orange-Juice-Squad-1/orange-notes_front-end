import { useState } from "react";

export const useToggleModal = () => {
    const [open, setOpen] = useState(false);

    const toggleModal = () => { setOpen(!open) }      

    return { open, toggleModal };
};