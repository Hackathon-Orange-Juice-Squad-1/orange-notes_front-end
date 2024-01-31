import { CgClose } from "react-icons/cg";
import { Container, ModalBody } from "./styles";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";

export const ModalPreview = ({ title, image, description, link, preview, onClick, avatar, nome, data }) => {
  if (preview) {
    return (
      <Container>
        <ModalBody>
          <button onClick={onClick}><CgClose size={24} /></button>

          <h2>{title}</h2>

          <img src={image} alt="Imagem de preview do projeto" />

          <div>
            <ProfileSmall avatar={avatar} userName={nome} index={data} />

            <ul>
              <Tag tag="UX" />
              <Tag tag="Web" />
            </ul>
          </div>

          <p>
            {description}
          </p>

          <h3>Download</h3>
          <a href={link} target="_blank" rel="noreferrer" >{link}</a>
        </ModalBody>
      </Container>
    );
  } else {
    return <></>;
  };
};