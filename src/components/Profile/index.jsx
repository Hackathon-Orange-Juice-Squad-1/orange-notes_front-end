import avatar from "../../assets/img/avatar-3x.png";
import { Container } from "./styles";
import { Button } from "../Button";

export const Profile = ({ userName, userCountry, onClick }) => {
    return (
        <Container>
            <img src={avatar} alt="Imagem de avatar de usu�rio" />

            <div>
                <h2>{userName}</h2>

                <span>{userCountry}</span>

                <Button label="Adicionar projeto" onClick={onClick} />
            </div>
        </Container>
    );
};