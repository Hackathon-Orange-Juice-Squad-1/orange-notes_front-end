import { useEffect, useState } from "react";
import { getUserData } from "../../services/getUserData";
import { Container } from "./styles";

export const ProfileSmall = ({ index, className, userName, avatar }) => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getUserData().then((response) => {
            setUserData(response);
        });
    }, []);

    return (
        <Container className={className}>
            <img src={userData.userAvatar} alt="Imagem de avatar de usuário" />

            <div>
                <h2>{userName}</h2>

                <span>{index}</span>
            </div>
        </Container>
    );
};