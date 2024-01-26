import styled, { keyframes } from "styled-components";

const menuOpenAnimation = keyframes`
    0% {
        transform: scale(0);
        transform-origin: 0% 0%;
        }

    100% {
        transform: scale(1);
        transform-origin: 0% 0%;
    }
`;

const menuCloseAnimation = keyframes`
    0% {
        transform: scale(1);
        transform-origin: 0% 0%;
        }

    100% {
        transform: scale(0);
        transform-origin: 0% 0%;
        display: none;
    }
`;

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 6.4rem;

    padding: 1.6rem 3rem 1.6rem 6.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    flex-shrink: 0;

    background-color: ${({ theme }) => theme.COLORS.BLUE};

    border-radius: 0 0 .5rem .5rem;

    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.6);

    position: fixed;
    z-index: 1;

    > a {
        img {
            height: 4rem;
        }
    }

    @media (min-width: 425px) {
        height: 7.3rem;
        padding: 1.6rem 3.2rem;
        border-radius: 0;
        box-shadow: none;
    }
`;

export const HamburgerButton = styled.button`
    position: absolute;
    z-index: 1;
    left: 3rem;

    width: fit-content;
    height: 4rem;

    background-color: transparent;

    border: none;

    cursor: pointer;

    &.iconOpen {
        .hamburger {
            background: transparent;
            box-shadow: 0 2px 5px transparent;

            &::before,
            &::after {
                top: 0;
                box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
            }

            &::before {
                transform: rotate(225deg);
            }

            &::after {
                transform: rotate(135deg);
            }
        }
    }

    > .hamburger {
        position: absolute;
        top: 50%;
        left: 0;

        width: 20px;
        height: 2px;

        background-color: ${({ theme }) => theme.COLORS.WHITE_2};
        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        
        transition: .5s ease-in-out;

        &::before,
        &::after {
            content: '';

            position: absolute;
            left: 0;

            width: 20px;
            height: 2px;

            background-color: ${({ theme }) => theme.COLORS.WHITE_2};
            box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        
            transition: .5s ease-in-out;
        }

        &::before {
            top: -6px;
        }

        &::after {
            top: 6px;
        }
    }

    @media (min-width: 425px) {
        display: none;
    }
`;

export const Nav = styled.nav`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (min-width: 425px) {
        justify-content: space-between;
    }
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
            color: ${({ theme }) => theme.COLORS.WHITE_2};
        }

        &:nth-last-child(1) {
            display: none;
        }
    }

    @media (max-width: 425px) {
        &.menuClosed {
            animation: ${menuCloseAnimation} .5s ease-in-out;
            display: none;
        }

        &.menuOpen {
            position: absolute;
            top: 6.4rem;
            left: 0;

            width: 14.7rem;
            height: 15.5rem;

            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            padding: 1.6rem;
            gap: 1.2rem;

            background-color: ${({ theme }) => theme.COLORS.WHITE_1};

            border-radius: 4px; 

            animation: ${menuOpenAnimation} .5s ease-in-out;
        
            > li {
                a {
                    font-size: 1.6rem;
                    font-weight: 100;
                    color: ${({ theme }) => theme.COLORS.GRAY_8};
                }

                &:nth-last-child(1) {
                    display: inline-block;
                    padding-top: 1.2rem;
                    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
                }
            }
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
            color: ${({ theme }) => theme.COLORS.WHITE_2};

            img {
                height: 4rem;
                border-radius: 50%;
            }
        }
    }
`;