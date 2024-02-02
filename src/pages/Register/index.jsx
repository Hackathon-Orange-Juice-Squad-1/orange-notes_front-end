import { useState } from "react";
import { Content, Container, ImageLogin, } from "./styles";
import { Form } from "../../components/Form";
import { FormInput } from "../../components/FormInput";
import { Button } from "../../components/Button";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageRegister from "../../assets/img/img_cadastro-3x.png";
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";


export const Register = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
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

    const handleRegister = (event) => {
        event.preventDefault();

        let fieldName = event.target.id.toString();
        switch (fieldName) {
            case 'firstName':
                setFirstName(event.target.value);
                break;
            case 'lastName':
                setLastName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            case 'confirmpassword':
                setConfirmPassword(event.target.value);
                break;
        }
    }

    const handleRedirecionar = () => {
        window.location.href = '/';
    };

    const salveOrReplace = async () => {

        const fields = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password,
            "confirmpassword": confirmPassword
        };
        try {
            let url = 'https://orange-notes-backend.onrender.com/auth/register';
            const response = await fetch(url, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(fields)
            });
            const data = await response.json();
            if (data != null && data.msg != null) {
                if (data.msg == 'Usuário criado com sucesso!') {
                    toast.success(data.msg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                        // Redirect 
                        onClose: handleRedirecionar
                    }
                    );
                }
                else {
                    toast.error(data.msg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                }
            }
            else {
                toast.error(data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        } catch (error) {
            toast.error('Erro na API do Backend.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

        }

    }

    return (
        <>
            <ToastContainer />
            <Container>
                <ImageLogin src={imageRegister} alt="Imagem ilustrativa de Cadastro" />

                <Content>
                    <h1>Cadastre-se</h1>

                    <Form onSubmit={handleRegister}>
                        <div style={{ width: "100%", display: "flex", gap: "1.6rem" }} onChange={handleRegister}>
                            <FormInput
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="name"
                                label="Nome *"
                            />

                            <FormInput
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="surname"
                                label="Sobrenome *"
                            />
                        </div>
                        <div style={{ width: "100%" }} onChange={handleRegister}>
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
                                icon={isOpen ? imageIconClose : imageIconOpen}
                                onClick={handleClick}
                            />

                            <FormInput
                                id="confirmpassword"
                                name="confirmpassword"
                                type={isOpenPwd ? "text" : "password"}
                                autoComplete="current-password"
                                label="Confirm password"
                                icon={isOpenPwd ? imageIconClose : imageIconOpen}
                                onClick={handleClickPwd}
                            />
                        </div>

                        <Button
                            type="submit"
                            label="Cadastrar"
                            style={{ width: "100%", marginBottom: "1.8rem" }}
                            onClick={salveOrReplace}
                            $primary
                        />
                    </Form>
                </Content>
            </Container>
        </>
    );
};
