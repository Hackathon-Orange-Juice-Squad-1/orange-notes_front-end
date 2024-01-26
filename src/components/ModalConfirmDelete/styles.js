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

const checkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
    position: fixed;
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
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3.2rem;
    padding: 4rem 4.2rem;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);

    animation: ${modalOpenAnimation} .5s ease-in-out;

    @media (min-width: 425px) {
        max-width: 42.1rem;;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
    }

    > p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.6rem;
    }

    > button {
        width: 100%;
    }
`;