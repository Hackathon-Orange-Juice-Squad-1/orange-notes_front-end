import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import {
    Content,
    Container,
    ImageLogin,
} from "./styles";

import { Form } from "../../components/Form";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";

import imageRegister from "../../assets/img/img_cadastro-3x.png";
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";

// import { Link } from "react-router-dom";

// const tokenClient = window.google.accounts.oauth2.initTokenClient({
//   client_id: "1095567261898-6eop9ig5u5fh70e5dqqan0empoiflbad",
//   scope: "https://www.googleapis.com/auth/userinfo.email",
//   callback: "",
// });

export const Register = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    //   const loginGoogle = () => {
    //     tokenClient.callback = () => {
    //       navigate('/');
    //     };
    //     tokenClient.requestAccessToken({ prompt: "consent" });
    //   };

    const handleRegister = (event) => {
        event.preventDefault();

        const { name, surname, email, password } = event.currentTarget;

        console.log(name.value);
        console.log(surname.value);
        console.log(email.value);
        console.log(password.value);

        // fetch('https://orange-notes-backend.onrender.com/auth/register', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     name: name.value,
        //     surname: surname.value,
        //     email: email.value,
        //     password: password.value,
        //   }),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((body) => {
        //     if (body.token) {
        //       localStorage.setItem('token', body.token)
        //       navigate('/app');
        //     } else {
        //       alert(`Erro: ${body.msg}`)
        //     }
        //   })
    };

    return (
        <Container>
            <ImageLogin src={imageRegister} alt="Imagem ilustrativa de Cadastro" />

            <Content>
                <h1>Cadastre-se</h1>

                <Form onSubmit={handleRegister}>
                    <div style={{ width: "100%", display: "flex", gap: "1.6rem" }}>
                        <FormInput
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            label="Nome *"
                        />

                        <FormInput
                            id="surname"
                            name="surname"
                            type="text"
                            autoComplete="surname"
                            label="Sobrenome *"
                        />
                    </div>

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

                    <Button type="submit" label="Cadastrar" style={{ width: "100%", marginBottom: "1.8rem" }} $primary />
                </Form>
            </Content>
        </Container>
    );
};
