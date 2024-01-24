import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Profile } from "../../components/Profile";

export const Home = () => {
    return (
        <Container>
            <Header />

            <Main>
                <Profile />
            </Main>
        </Container>
    );
};