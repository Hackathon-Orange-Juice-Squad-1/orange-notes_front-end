import { Container } from "./styles";

export const ProfileSmall = ({ userName, index, className, avatar }) => {
  return (
    <Container className={className}>
      <img src={avatar} alt="Imagem de avatar de usuário" />

      <div>
        <h2>{userName}</h2>

        <span>{index}</span>
      </div>
    </Container>
  );
};