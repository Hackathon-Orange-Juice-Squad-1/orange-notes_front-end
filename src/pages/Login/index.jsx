import { useState } from "react";

import { handleLogin } from "../../services/loginAuthService";

import {
  Content,
  Container,
  ImageLogin,
} from "./styles";

import { Form } from "../../components/Form";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { GoogleLogin } from "../../components/GoogleLogin";

import imageLogin from "../../assets/img/img-login.png";
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";

import { Link } from "react-router-dom";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const login = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget;

    handleLogin(email.value, password.value)
      .then(() => location.reload())
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <ImageLogin src={imageLogin} alt="Imagem ilustrativa de Login" />

      <Content>
        <h1>Entre no Orange Portfólio</h1>

        <GoogleLogin />

        <Form title="Faça login com email" onSubmit={login}>
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

          <Button
            type="submit"
            label="Entrar"
            style={{ width: "100%", marginBottom: "1.8rem" }}
            $primary
          />

          <Link to="/register">Cadastre-se</Link>
        </Form>
      </Content>
    </Container>
  );
};
