import avatar from "../../assets/img/avatar-2x.png";
import { Container } from "./styles";

export const ProfileSmall = ({ userName, index }) => {
    return (
        <Container>
            <img src={avatar} alt="Imagem de avatar de usuário" />

            <div>
                <h2>{userName}</h2>

                <span>{index}</span>
            </div>
        </Container>
    );
};