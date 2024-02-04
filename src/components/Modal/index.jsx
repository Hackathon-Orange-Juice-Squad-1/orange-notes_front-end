import { Container, ModalBody } from "./styles";

export const Modal = ({ children, open, title, onSubmit }) => {
  if (open) {
    return (
        <Container open={open}>
          <ModalBody>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
              {children}
            </form>
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};