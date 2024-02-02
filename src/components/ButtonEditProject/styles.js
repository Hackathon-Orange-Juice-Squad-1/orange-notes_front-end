import styled, { keyframes } from "styled-components";

const navOpenAnimation = keyframes`
    0% {
        transform: translate3d(0, 0, 0) scale(0);
        transform-origin: 90% 0%;
        opacity: 0;
    }

    100% {
        transform: translate3d(0, 0, 0) scale(1);
        transform-origin: 90% 0%;
        opacity: 1;
    }
`;

export const Container = styled.div`
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

    > button {
        /* position: absolute;
        top: 0; */
        /* top: 1.6rem;
        right: 1.6rem; */

        background: none;

        border: none;
        border-radius: 50%;

        &.on-edit {
            display: none;
        }
    }

    > div {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }

        &.on-edit {
            display: none;
        }
    }
`;

export const Nav = styled.nav`
    position: absolute;
    top: 3.6rem;
    right: .6rem;

    width: 20.8rem;
    padding: 1.6rem 0;

    background-color: ${({ theme }) => theme.COLORS.WHITE_2};
    border-radius: 8px;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.30);

    animation: ${navOpenAnimation} .2s ease-in-out;

    .arrow-up {
        height: 0px;
        width: 0px;
        position: absolute;
        top: -9px;
        right: 16px;
        border-right: solid 10px transparent;
        border-left: solid 10px transparent;
        border-bottom: solid 10px ${({ theme }) => theme.COLORS.WHITE_2};
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 8px;

        li {
            width: 100%;

            button {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: .8rem 2.4rem;
                background: none;
                border: none;
                font-size: 1.6rem;
                font-weight: 400;
                line-height: 1.6rem;
                letter-spacing: 0.15px;
                color: ${({ theme }) => theme.COLORS.GRAY_3};

                &:hover {
                    background-color: #fec;
                }
            }
        }
    }

    &.navClosed {
        display: none;
    }

    &.navOpen {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
    }
`;