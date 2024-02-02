import { ButtonEditProject } from "../ButtonEditProject"; 
import { Container } from "./styles";

export const ProjectThumbnail = ({ onClick, className, editModal, toggleModal, handleDeleteClick, thumb, tags = [], userName }) => {
    return (
        <Container>
            <img src={thumb} alt="Thumbnail de preview do projeto" />

            <button className={className} onClick={ToggleIsActive}>
                <img src={iconEdit} alt="Ícone de edição" />
            </button>

            <div className={className}>
                <ProfileSmall userName={userName} index="12/12" className="on-thumb" />

                <ul>
                    {tags.map((tag, index) => (
                        <Tag key={index + tag} tag={tag} />
                    ))}
                </ul>
            </div>

            <ButtonEditProject />
        </Container>
    );
};