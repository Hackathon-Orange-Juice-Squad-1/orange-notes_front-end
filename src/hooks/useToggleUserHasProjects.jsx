import { useState } from "react";

export const useToggleUserHasProjects = () => {
    const [userHasProjects, setUserHasProjects] = useState(false);
    const toggleUserHasProjects = () => setUserHasProjects(!userHasProjects);   

    return { userHasProjects, toggleUserHasProjects };
};