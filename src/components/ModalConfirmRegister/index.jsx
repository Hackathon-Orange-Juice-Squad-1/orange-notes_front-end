import icon from "../../assets/img/confirm-register-icon.svg";
import { Container, ModalBody } from "./styles";

export const ModalConfirmRegister = ({ open }) => {
  if (open) {
    return (
        <Container open={open}>
          <ModalBody>
            <img src={icon} alt="Ícone de confirmação" />
            <h2>Cadastro feito com sucesso</h2>
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};