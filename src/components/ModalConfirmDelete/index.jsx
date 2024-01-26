import { Container, ModalBody } from "./styles";
import { Button } from "../Button";

export const ModalConfirmDelete = ({ confirmDelete, onClick }) => {
  if (confirmDelete) {
    return (
        <Container confirmDelete={confirmDelete}>
          <ModalBody>
            <h2>Deseja Excluir?</h2>
            
            <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>

            <div>
                <Button label="Excluir" $primary onClick={onClick} />
                <Button label="Cancelar" onClick={onClick} />
            </div>
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};