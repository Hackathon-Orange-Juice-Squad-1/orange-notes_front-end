import {jwtDecode} from "jwt-decode";
import avatarPlaceholder from "../assets/img/avatar-placeholder.png";

export const getUserData = async () => {
    try {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id;
        const response = await fetch(`https://orange-notes-backend.onrender.com/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const body = await response.json().then((data) => data);

        if (body) {
            if (Object.keys(body.profilePicture).length == 0 || body.profilePicture == null) {
                body.profilePicture = avatarPlaceholder;
            }

            const userName = body.first_name; 
            const userLastName = body.last_name;
            const userAvatar = body.profilePicture;
            
            return {userName, userLastName, userAvatar}; 
        } else {
            throw new Error(`Erro: ${body.msg}`);
        }
    } catch (error) {
        throw error;
    }
};