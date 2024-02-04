import { Container, Main, Projects, Thumbnail, Title } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
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
                            <img src={project?.image?.url || 'https://cdn-icons-png.freepik.com/512/408/408557.png'} alt="Thumbnail de preview do projeto" />

                            <div>
                                <ProfileSmall avatar={project.photoUrl} userName={project.userName} index={project.dataCriacao} className="on-thumb" />
                            </div>
                        </Thumbnail>
                    ))}
                    <div>
                        <ModalPreview
                            avatar={focusedProject?.photoUrl}
                            nome={focusedProject?.userName}
                            data={focusedProject?.dataCriacao}
                            title={focusedProject?.title}
                            image={focusedProject?.image?.url}
                            description={focusedProject?.desc}
                            link={focusedProject?.link}
                            onClick={() => setFocusedProject(null)}
                            preview={focusedProject !== null}>

                        </ModalPreview>
                    </div>
                </Projects>
            </Main>


        </Container>
    );
};