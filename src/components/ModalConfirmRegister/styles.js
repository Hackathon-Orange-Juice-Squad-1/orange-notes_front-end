import styled, { keyframes } from "styled-components";

const modalOpenAnimation = keyframes`
    0% {
        transform: translate3d(0, -100px, 0);
        transform-origin: 0% 0%;
        opacity: 0;
    }

    10% {
		opacity: 0;
	}

    25% {
        transform: translate3d(0, 0, 0);
        transform-origin: 0% 0%;
        opacity: 1;
    }

    75% {
        transform: translate3d(0, 0, 0);
        transform-origin: 0% 0%;
        opacity: 1;
    }

    100% {
        transform: translate3d(0, -100px, 0);
        transform-origin: 0% 0%;
        opacity: 0;
    }
`;

export const Container = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 4.9rem 2.4rem; 
`;

export const ModalBody = styled.div`
    width: 100%;
    background-color: #2E7D32;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 1.5rem 1.6rem;
    border-radius: 4px;

    animation: ${modalOpenAnimation} 3s ease-in-out;
    animation-fill-mode: forwards;

    @media (min-width: 425px) {
        max-width: 32rem;
    }

    > img {
        width: 2.2rem;
        height: 2.2rem;
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        letter-spacing: 0.15rem;
    } 
`;