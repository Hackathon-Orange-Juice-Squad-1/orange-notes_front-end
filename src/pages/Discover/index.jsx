import { Container, Main, Projects, Thumbnail, Title } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ProfileSmall } from "../../components/ProfileSmall";
import projectBiancaG from "../../assets/img/projectBiancaG.png"
import avatarBianca from "../../assets/img/avatarBianca.png"
import { ModalPreview } from "../../components/ModalPreview";
import { useState } from "react";


export const Discover = () => {

    const [isOpenModal, setOpenModal] = useState(false);

    return (
        <Container>
            <Header />

            <Main>
                <Title>
                    <h1>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</h1>
                </Title>

                <Input type="text" label="Buscar tags" name="searchTags" />

                <Projects>
                    <Thumbnail onClick={() => setOpenModal(true)}>
                        <img src={projectBiancaG} alt="Thumbnail de preview do projeto" />

                        <div>
                            <ProfileSmall avatar={avatarBianca} userName="Bianca Martin" index="02/24" className="on-thumb" />
                        </div>
                    </Thumbnail>
                    <div>
                        <ModalPreview
                            avatar={avatarBianca}
                            nome="Bianca Martin"
                            data="02/24"
                            title="Ecommerce One Page"
                            image={projectBiancaG}
                            description="Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce."
                            link="https://gumroad.com/products/wxCSL"
                            onClick={() => setOpenModal(false)}
                            preview={isOpenModal}>

                        </ModalPreview>
                    </div>
                </Projects>
            </Main>


        </Container>
    );
};