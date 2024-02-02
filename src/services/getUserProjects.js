import {jwtDecode} from "jwt-decode";

export const getUserProjects = async () => {
    try {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id;
        const response = await fetch(`https://orange-notes-backend.onrender.com/projetos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        const body = await response.json().then((data) => data);

        if (body) {
            const projects = body.map((project) => {
                return {
                    image: project.image,
                    title: project.title,
                    tags: project.tags,
                    _id: project._id,
                    dataAtualizacao: project.dataAtualizacao,
                };
            });
            return projects
        } else {
            throw new Error(`Erro: ${body.msg}`);
        }
    } catch (error) {
        throw error;
    }
};