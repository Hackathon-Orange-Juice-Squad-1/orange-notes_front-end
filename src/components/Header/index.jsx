import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../../services/getUserData";
import logo from "../../assets/img/logo-orange-3x.png";
// import avatar from "../../assets/img/avatar-2x.png";
import { FaBell } from "react-icons/fa6";
import { Container, Nav, NavLinks, NavProfile, NavModal, HamburgerButton } from "./styles";

export const Header = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getUserData().then((response) => {
            setUserData(response);
        });
    }, []);

    const [isActive, setIsActive] = useState(false);
    const [isAvatarActive, setIsAvatarActive] = useState(false);
    const navRef = useRef();

    const ToggleIsActive = () => setIsActive(!isActive);
    const handleLogout = () => {
        localStorage.clear();
        location.reload();
    };

    const ToggleIsAvatarActive = () => setIsAvatarActive(!isAvatarActive);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsAvatarActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <Container>
            <HamburgerButton className={isActive ? "iconOpen" : "iconClosed"} onClick={ToggleIsActive}>
                <div className="hamburger hamburgerIcon"></div>
            </HamburgerButton>

            <a href="/">
                <img src={logo} alt="Logo da aplicação Orange Portfolio" />
            </a>

            <Nav>
                <NavLinks className={isActive ? "menuOpen" : "menuClosed"}>
                    <li>
                        <Link to="/">Meus projetos</Link>
                    </li>

                    <li>
                        <Link to="/discover">Descobrir</Link>
                    </li>

                    <li>
                        <a href="/">Configurações</a>
                    </li>
                </NavLinks>

                <NavProfile>
                    <li>
                        <a onClick={ToggleIsAvatarActive}>
                            <img src={userData.userAvatar} alt="Avatar de usuário" />
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <FaBell />
                        </a>
                    </li>

                    <NavModal ref={navRef} className={isAvatarActive ? "navOpen" : "navClosed"}>
                        <div className="arrow-up"></div>

                        <ul>
                            {/* <li><button>Editar perfil</button></li> */}
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </NavModal>
                </NavProfile>
            </Nav>
        </Container>
    );
};