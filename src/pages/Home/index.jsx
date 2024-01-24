import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";

export const Home = () => {
    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" />

                <h2>Meus projetos</h2>

                <Input label="Buscar tags" name="searchTags" />
            </Main>
        </Container>
    );
};