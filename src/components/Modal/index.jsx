import { Container, ModalBody } from "./styles";

export const Modal = ({ children, isOpen }) => {
  if (isOpen) {
    return (
        <Container isOpen={isOpen}>
          <ModalBody>
            {children}
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};