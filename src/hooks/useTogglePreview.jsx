import { useState } from "react";

export const useTogglePreview = () => {
    const [preview, setPreview] = useState(false);

    const togglePreview = () => { setPreview(!preview) }      

    return { preview, togglePreview };
};