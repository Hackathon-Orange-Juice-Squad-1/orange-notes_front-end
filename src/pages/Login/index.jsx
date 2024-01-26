import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import {
  Content,
  Container,
  ImageLogin,
  Title,
  ButtonGoogle,
  LogoGoogle,
  FormLogin,
  FormTitle,
  FormControl,
  FormLabel,
  FormInput,
  FormIcon,
  ButtonEnter,
  LinkRegister,
} from "./styles";

import imageLogin from "../../assets/img/img-login.png";
import logoGoogle from "../../assets/img/logo-google.png";
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const loginGoogle = () => {
    tokenClient.callback = () => {
      alert("Sucesso");
    };
    tokenClient.requestAccessToken({ prompt: "consent" });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget;

    fetch('https://orange-notes-backend.onrender.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((body) => {
        if (body.token) {
          localStorage.setItem('token', body.token)
          navigate('/');
        } else {
          alert(`Erro: ${body.msg}`)
        }
      })
  };

  return (

    <Container>
      <ImageLogin src={imageLogin} alt="Imagem Login" />

      <Content>
        <Title>Entre no Orange Portfólio</Title>

        <ButtonGoogle type="button" onClick={loginGoogle}>
          <LogoGoogle
            src={logoGoogle}
            alt="Logo Google"
            width={18}
            height={18}
          />
          Entrar com o Google
        </ButtonGoogle>

        <FormLogin onSubmit={handleLogin}>
          <FormTitle>Faça login com email</FormTitle>
          <FormControl>
            <FormInput
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=" "
            />
            <FormLabel htmlFor="email">Email Address</FormLabel>
          </FormControl>

          <FormControl>
            <FormInput
              id="password"
              name="password"
              type={isOpen ? "text" : "password"}
              autoComplete="current-password"
              placeholder=" "
            />
            <FormLabel htmlFor="password">
              Password
            </FormLabel>
            <FormIcon
              src={isOpen ? imageIconClose : imageIconOpen}
              title={isOpen ? "Esconder" : "Mostrar"}
              onClick={handleClick}
            />
          </FormControl>

          <ButtonEnter type="submit">Entrar</ButtonEnter>

          <LinkRegister href="#">Cadastro</LinkRegister>

        </FormLogin>
      </Content>
    </Container>

  );
};
