import { useState } from "react";
import { Content, Container, ImageLogin } from "./styles";
import { Form } from "../../components/Form";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imageRegister from "../../assets/img/img_cadastro-3x.png";
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";

const toastError = {
  autoClose: 5000,
  closeOnClick: true,
  draggable: true,
  hideProgressBar: false,
  pauseOnHover: true,
  position: "top-center",
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

export const Register = () => {
  const data = new URLSearchParams(window.location.search);
  const [firstName, setFirstName] = useState(data.get("gname"));
  const [lastName, setLastName] = useState(data.get("fname"));
  const [email, setEmail] = useState(data.get("email"));
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenPwd, setIsOpenPwd] = useState(false);
  const handleClickPwd = () => {
    setIsOpenPwd(!isOpenPwd);
  };

  const handleRedirecionar = () => {
    window.location.href = "/";
  };

  const salveOrReplace = async () => {
    const fields = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      confirmpassword: confirmPassword,
    };
    try {
      let url = "https://orange-notes-backend.onrender.com/auth/register";
      const response = await fetch(url, {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(fields),
      });
      const data = await response.json();
      if (data != null && data.msg != null) {
        if (data.msg == "Usuário criado com sucesso!") {
          toast.success(data.msg, {
            ...toastError,
            // Redirect
            onClose: handleRedirecionar,
          });
        } else {
          toast.error(data.msg, toastError);
        }
      } else {
        toast.error(data.msg, toastError);
      }
    } catch (error) {
      toast.error("Erro na API do Backend.", toastError);
    }
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <ImageLogin src={imageRegister} alt="Imagem ilustrativa de Cadastro" />

        <Content>
          <h1>Cadastre-se</h1>

          <Form onSubmit={salveOrReplace}>
            <div style={{ width: "100%", display: "flex", gap: "1.6rem" }}>
              <FormInput
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="name"
                label="Nome *"
                onChange={setFirstName}
                value={firstName}
              />

              <FormInput
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="surname"
                label="Sobrenome *"
                onChange={setLastName}
                value={lastName}
              />
            </div>
            <div style={{ width: "100%" }}>
              <FormInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                label="Email Address"
                onChange={setEmail}
                value={email}
              />

              <FormInput
                id="password"
                name="password"
                type={isOpen ? "text" : "password"}
                autoComplete="current-password"
                label="Password"
                icon={isOpen ? imageIconClose : imageIconOpen}
                onClick={handleClick}
                onChange={setPassword}
                value={password}
              />

              <FormInput
                id="confirmpassword"
                name="confirmpassword"
                type={isOpenPwd ? "text" : "password"}
                autoComplete="current-password"
                label="Confirm password"
                icon={isOpenPwd ? imageIconClose : imageIconOpen}
                onClick={handleClickPwd}
                onChange={setConfirmPassword}
                value={confirmPassword}
              />
            </div>

            <Button
              type="submit"
              label="Cadastrar"
              style={{ width: "100%", marginBottom: "1.8rem" }}
              $primary
            />
          </Form>
        </Content>
      </Container>
    </>
  );
};
