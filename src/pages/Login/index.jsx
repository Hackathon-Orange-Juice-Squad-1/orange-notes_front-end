import {
  Content,
  Container,
  ImageLogin,
  ButtonGoogle,
  LogoGoogle,
} from "./styles";

import { Form } from "../../components/Form";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";

import imageLogin from "../../assets/img/img-login.png";
import logoGoogle from "../../assets/img/logo-google.png";
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";

import { useState } from "react";
import { Link } from "react-router-dom";

window.gapi.load("client", initializeClient);

function initializeClient() {
  return window.gapi.client.init({
    apiKey: "AIzaSyCvLFxzKada0JdUrZ3Hm3Yz35bVlZ4oan0",
  });
}

const tokenClient = window.google.accounts.oauth2.initTokenClient({
  client_id: "1095567261898-6eop9ig5u5fh70e5dqqan0empoiflbad",
  scope: "https://www.googleapis.com/auth/userinfo.email",
  callback: "",
});

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  { isOpen ? "Fechar" : "Abrir" }

  const loginGoogle = () => {
    tokenClient.callback = () => {
      alert("Sucesso");
    };
    tokenClient.requestAccessToken({ prompt: "consent" });
  };

  return (

    <Container>
      <ImageLogin src={imageLogin} alt="Imagem ilustrativa de Login" />

      <Content>
        <h1>Entre no Orange Portfólio</h1>

        <ButtonGoogle type="button" onClick={loginGoogle}>
          <LogoGoogle
            src={logoGoogle}
            alt="Logo Google"
            width={18}
            height={18}
          />
          Entrar com o Google
        </ButtonGoogle>

        <Form title="Faça login com email">
          <FormInput
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            label="Email Address"
          />

          <FormInput
            id="password"
            name="password"
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            label="Password"
            icon={isOpen ? imageIconOpen : imageIconClose}
            onClick={handleClick}
          />

          <Button type="submit" label="Entrar" style={{width: "100%", marginBottom: "1.8rem"}} $primary />

          <Link to="/signup">Cadastre-se</Link>

        </Form>
      </Content>
    </Container>
  );
};
