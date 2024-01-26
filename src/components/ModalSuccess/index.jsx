import check from "../../assets/img/success-icon.svg";
import { Container, ModalBody } from "./styles";
import { Button } from "../Button";

export const ModalSuccess = ({ open, title }) => {
  if (open) {
    return (
        <Container open={open}>
          <ModalBody>
            <h2>{title}</h2>
            
            <img src={check} alt="Ícone de confirmação" />

            <Button label="Voltar para projetos" $primary />
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};