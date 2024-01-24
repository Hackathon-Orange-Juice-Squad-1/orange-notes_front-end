import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Form } from "../../components/Form";

export const Home = () => {
    return (
        <Container>
            <Header />

            <Main>
                <Profile userName="Camila Soares" userCountry="Brasil" />

                <Form title="Meus projetos">
                    
                </Form>
            </Main>
        </Container>
    );
};