import avatar from "../../assets/img/avatar-3x.png";
import { useEffect, useState } from "react";
import { getUserData } from "../../services/getUserData";
import { Container } from "./styles";
import { Button } from "../Button";

export const Profile = ({ userCountry, onClick }) => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getUserData().then((response) => {
            setUserData(response);
        });
    }, []);

    console.log(userData);

    return (
        <Container>
            <img src={userData.userAvatar} alt="Imagem de avatar de usuário" />

            <div>
                <h2>{userData.userName}</h2>

                <span>{userCountry}</span>

                <Button label="Adicionar projeto" onClick={onClick} />
            </div>
        </Container>
    );
};