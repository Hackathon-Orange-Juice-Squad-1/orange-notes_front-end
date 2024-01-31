import bottom from '../../assets/img/img-register.png';
import "./styles.css";
import "./media.css";
import 'react-toastify/dist/ReactToastify.css';
import imageIconClose from "../../assets/img/visibility-off.png";
import imageIconOpen from "../../assets/img/visibility-on.png";
import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

export const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confSenha, setConfSenha] = useState();

  const [isOpenPwd, setIsOpenPwd] = useState(false);
  const handleClickPwd = () => {
    setIsOpenPwd(!isOpenPwd);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOnChange = (event) => {
    let fieldName = event.target.name.toString();
    switch (fieldName) {
      case 'first_name':
        setFirstName(event.target.value);
        break;
      case 'last_name':
        setLastName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setSenha(event.target.value);
        break;
      case 'confirmpassword':
        setConfSenha(event.target.value);
        break;
    }
  }


  const salveOrReplace = async () => {

    const fields = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": senha,
      "confirmpassword": confSenha
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
          });
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
      <div>
        <img src={bottom} id="register" />
        <div className="container-form">
          <h1>Cadastre-se</h1>
          <div className="container">
            <div className="input-class-grid">
              <div className="input-bx">
                <input type="text" id="first_name" name="first_name" value={firstName} onChange={handleOnChange} required />
                <span>Nome</span>
              </div>
              <div className="input-bx">
                <input type="text" id="last_name" name="last_name" value={lastName} onChange={handleOnChange} required />
                <span>Sobrenome</span>
              </div>
            </div>
            <div className="input-bx">
              <input type="email" id="email" name="email" value={email} onChange={handleOnChange} required />
              <span>Email address</span>
            </div>
            <div className="input-bx">
              <button className="eye" onClick={handleClickPwd} autoFocus><img src={isOpenPwd ? imageIconClose : imageIconOpen} /></button>
              <input type={isOpenPwd ? "text" : "password"} id="password" name="password" value={senha} onChange={handleOnChange} required></input>
              <span>Password</span>
            </div>
            <div className="input-bx">
              <button className="eye" onClick={handleClick} autoFocus><img src={isOpen ? imageIconClose : imageIconOpen} /></button>
              <input type={isOpen ? "text" : "password"} id="confirmpassword" name="confirmpassword" value={confSenha} onChange={handleOnChange} required></input>
              <span>Confirm Password</span>
            </div>
          </div>
          <button className="btn-register" onClick={salveOrReplace}><a>Cadastrar</a></button>
        </div>
        <script src="main.js"></script>
      </div>
    </>
  )
}