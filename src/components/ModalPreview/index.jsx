import { Container, ModalBody } from "./styles";
import { ProfileSmall } from "../ProfileSmall";
import { Tag } from "../Tag";

export const ModalPreview = ({ title, image, description, link, previewopen="true" }) => {
  if (previewopen) {
    return (
        <Container open={previewopen}>
          <ModalBody>
            <h2>{title}</h2>

            <img src={image} alt="Imagem de preview do projeto" />

            <div>
                <ProfileSmall userName="Camila Soares" index="12/12" />

                <ul>
                    <Tag tag="UX" />
                    <Tag tag="Web" />
                </ul>
            </div>

            <p>
                {description}
            </p>

            <h3>Download</h3>
            <a href={link}>{link}</a>
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};