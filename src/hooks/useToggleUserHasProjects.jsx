import { useState } from "react";
import { getUserProjects } from "../services/getUserProjects"; 

export const useToggleUserHasProjects = () => {
    const [userHasProjects, setUserHasProjects] = useState(false);
    const toggleUserHasProjects = () => setUserHasProjects(!userHasProjects);   

    const checkUserProjects = async () => {
        const response = await getUserProjects();
        if (response.length > 0) {
            return true;
        } else {
            return false;
        }
    };

    return { userHasProjects, setUserHasProjects, toggleUserHasProjects, checkUserProjects };
};