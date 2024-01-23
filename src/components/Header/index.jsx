import logo from "../../assets/img/logo-orange-3x.png";
import avatar from "../../assets/img/avatar-2x.png";
import { FaBell } from "react-icons/fa6";
import { Container, Nav, NavLinks, NavProfile } from "./style";

export const Header = () => {
    return (
        <Container>
            <a href="/">
                <img src={logo} alt="Logo da aplicação Orange Portfolio" />
            </a>

            <Nav>
                <NavLinks>
                    <li>
                        <a href="/">Meus projetos</a>
                    </li>

                    <li>
                        <a href="/">Descobrir</a>
                    </li>
                </NavLinks>

                <NavProfile>
                    <li>
                        <a href="/">
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