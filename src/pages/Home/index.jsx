import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";

export const Home = () => {
    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" />
            </Main>
        </Container>
    );
};