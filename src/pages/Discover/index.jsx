import avatarPlaceholder from "../../assets/img/avatar-placeholder.png";
import { Container, Main, Projects, Thumbnail, Title } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ProjectThumbnail } from "../../components/ProjectThumbnail";
import { ProfileSmall } from "../../components/ProfileSmall";
import { ModalPreview } from "../../components/ModalPreview";
import { useState, useEffect } from "react";


export const Discover = () => {

    const [focusedProject, setFocusedProject] = useState(null);

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(' https://orange-notes-backend.onrender.com/projetos/all')
            .then((response) => response.json())
            .then((data) => setProjectList(data));
    }, [])



    return (
        <Container>
            <Header />

            <Main>
                <Title>
                    <h1>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</h1>
                </Title>

                <Input type="text" label="Buscar tags" name="searchTags" />

                <Projects>
                    {projectList.map((project) => (
                        <Thumbnail key={project._id} onClick={() => setFocusedProject(project)}>
                            <img src={project?.image?.url || 'https://img.freepik.com/fotos-gratis/inspiracao-desenvolvimento-moderno-criativo_53876-21248.jpg?w=996&t=st=1707142640~exp=1707143240~hmac=05607122ec7effc15bf1ba8cb1f54b466ccb16e0f51fed73ec5cff4bf5541f25'} alt="Thumbnail de preview do projeto" width="390px" height="260px" />

                            <div>
                                <ProfileSmall avatar={project.photoUrl ? project.photoUrl : avatarPlaceholder} userName={project.userName} index={project.dataCriacao} className="on-thumb" />
                            </div>
                        </Thumbnail>
                    ))}
                    <ModalPreview
                        avatar={focusedProject?.photoUrl}
                        nome={focusedProject?.userName}
                        data={focusedProject?.dataCriacao}
                        title={focusedProject?.title}
                        image={focusedProject?.image?.url || 'https://img.freepik.com/fotos-gratis/inspiracao-desenvolvimento-moderno-criativo_53876-21248.jpg?w=996&t=st=1707142640~exp=1707143240~hmac=05607122ec7effc15bf1ba8cb1f54b466ccb16e0f51fed73ec5cff4bf5541f25'}
                        description={focusedProject?.desc}
                        link={focusedProject?.link}
                        onClick={() => setFocusedProject(null)}
                        preview={focusedProject !== null}>

                    </ModalPreview>
                </Projects>
            </Main>


        </Container>
    );
};