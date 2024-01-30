import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Profile } from "../../components/Profile";
import { Register } from "../Register";

export const Home = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Profile />
            </Main>
            <div>
                <Register/>
            </div>
        </Container>
    );
};