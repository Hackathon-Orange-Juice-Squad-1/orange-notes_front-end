import thumbnail from "../../assets/img/img_landingpage-3x.png"
import iconEdit from "../../assets/img/icon_edit.svg";
import { FaImages } from "react-icons/fa";
import { Container, Thumbnail } from "./styles";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";

export const ButtonAddProject = ({ onClick, userHasProjects, className }) => {
    if (userHasProjects) {
        return (
            <Container onClick={onClick}>
                <FaImages className="icon" size={46} />

                <h2>Adicione seu primeiro projeto</h2>

                <p>Compartilhe seu talento com milhares de pessoas  </p>
            </Container>
        );
    } else {
        return (
            <Thumbnail>
                <img src={thumbnail} alt="Thumbnail de preview do projeto" />

                <button className={className}>
                    <img src={iconEdit} alt="Ícone de edição" />
                </button>

                <div>
                    <ProfileSmall userName="Camila Soares" index="12/12" className="on-thumb" />

                    <ul>
                        <Tag tag="UX" />
                        <Tag tag="Web" />
                    </ul>
                </div>
            </Thumbnail>
        );
    };
};