import { useState } from "react";

export const useToggleConfirmDeleteModal = () => {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const toggleConfirmDeleteModal = () => { setConfirmDelete(!confirmDelete) }      

    return { confirmDelete, toggleConfirmDeleteModal };
};