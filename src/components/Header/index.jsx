import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-orange-3x.png";
import avatar from "../../assets/img/avatar-2x.png";
import { FaBell } from "react-icons/fa6";
import { Container, Nav, NavLinks, NavProfile, HamburgerButton } from "./styles";

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const ToggleIsActive = () => setIsActive(!isActive);
    const handleLogout = () => {
        localStorage.clear();
        location.reload();
    };

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
                        <a href="/" onClick={handleLogout}>
                            <img src={avatar} alt="Avatar de usuário" />
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <FaBell />
                        </a>
                    </li>
                </NavProfile>
            </Nav>
        </Container>
    );
};