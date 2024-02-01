import { Container } from "./styles";

export const ProjectsList = ({ projects, ...rest }) => {
    return (
        <Container {...rest}>
            { projects.map((project, index) => (
                <li key={index}>
                    { project.title }
                </li>
            )) }
        </Container>
    );
};