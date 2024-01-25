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

    100% {
        transform: translate3d(0, 0, 0);
        transform-origin: 0% 0%;
        opacity: 1;
    }
`;

export const Container = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: #00000050;
    backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14.8rem 2.4rem; 
`;

export const ModalBody = styled.div`
    max-width: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1.2rem 2.4rem;

    animation: ${modalOpenAnimation} .5s ease-in-out;

    @media (min-width: 425px) {
        min-width: 89rem;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
        margin-bottom: 1.6rem;
    }

    > div {
        @media (min-width: 425px) {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: flex-start;
            gap: 2.4rem;
            width: 100%;
        }

        > .modal__form {
            width: 100%;
        }

        > .modal__file {
            width: 100%;
        }

        h3 {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6rem;
            letter-spacing: 0.15px;
            color: ${({ theme }) => theme.COLORS.GRAY_3};
        }
    } 
`;