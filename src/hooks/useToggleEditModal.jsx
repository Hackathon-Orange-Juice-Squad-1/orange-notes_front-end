import { useState } from "react";

export const useToggleEditModal = () => {
    const [edit, setEdit] = useState(false);

    const toggleEditModal = () => {setEdit(true);}
    const toggleAddModal = () => {setEdit(false);}

    return { edit, toggleEditModal, toggleAddModal };
};