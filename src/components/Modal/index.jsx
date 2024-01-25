import { Container, ModalBody } from "./styles";

export const Modal = ({ children, open }) => {
  if (open) {
    return (
        <Container open={open}>
          <ModalBody>
            {children}
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};