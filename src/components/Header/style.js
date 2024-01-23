import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 7.3rem;

    padding: 1.6rem 3.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;

    background-color: ${({theme}) => theme.COLORS.BLUE};

    > a {
        img {
            height: 4rem;
        }
    }
`;

export const Nav = styled.nav`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    > li {
        a {
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 0.15px;
            color: ${({theme}) => theme.COLORS.WHITE_2};
        }
    }
`;

export const NavProfile = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    > li {
        a {
            font-size: 2rem;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.WHITE_2};

            img {
                height: 4rem;
                border-radius: 50%;
            }
        }
    }
`;