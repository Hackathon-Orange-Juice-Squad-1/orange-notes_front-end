import check from "../../assets/img/success-icon.svg";
import { Container, ModalBody } from "./styles";
import { Button } from "../Button";

export const ModalSuccess = ({ success, title, onClick }) => {
  if (success) {
    return (
        <Container>
          <ModalBody>
            <h2>{title}</h2>
            
            <img src={check} alt="Ícone de confirmação" />

            <Button label="Voltar para projetos" $primary onClick={onClick} />
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};