import { Container, ModalBody } from "./styles";

export const Modal = ({ children, open, title }) => {
  if (open) {
    return (
        <Container open={open}>
          <ModalBody>
            <h2>{title}</h2>
            <div>
              {children}
            </div>
          </ModalBody>
        </Container>
      );
  } else {
    return <></>;
  };
};