import { useState } from "react";

import { auth, googleProvider } from '../../services/firebase';

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

import { Link } from "react-router-dom";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleGoogleLogin = async () => {
    const result = await auth.signInWithPopup(googleProvider);
    const googleToken = result.credential.accessToken;
    localStorage.setItem('google_login_token', googleToken);
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
          location.reload()
        } else {
          alert(`Erro: ${body.msg}`)
        }
      })
  };

  return (

    <Container>
      <ImageLogin src={imageLogin} alt="Imagem ilustrativa de Login" />

      <Content>
        <h1>Entre no Orange Portfólio</h1>

        <ButtonGoogle type="button" onClick={async () => {await handleGoogleLogin(); location.reload();
}}>
          <LogoGoogle
            src={logoGoogle}
            alt="Logo Google"
            width={18}
            height={18}
          />
          Entrar com o Google
        </ButtonGoogle>

        <Form title="Faça login com email" onSubmit={handleLogin}>
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

          <Link to="/register">Cadastre-se</Link>

        </Form>
      </Content>
    </Container>
  );
};
