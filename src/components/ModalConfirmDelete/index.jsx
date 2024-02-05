import { Container, ModalBody } from "./styles";
import { Button } from "../Button";

export const ModalConfirmDelete = ({ confirmationText, confirmDelete, handleConfirmDeleteClick, handleCancelDeleteClick }) => {
  if (confirmDelete) {
    return (
        <Container>
          <ModalBody>
            <h2>Deseja Excluir?</h2>
            
            <p>Se você prosseguir irá {confirmationText}</p>

            <div>
                <Button label="Excluir" $primary onClick={handleConfirmDeleteClick} />
                <Button label="Cancelar" onClick={handleCancelDeleteClick} />
            </div>
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};