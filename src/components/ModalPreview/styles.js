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
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: transparent;
    backdrop-filter: none;

    display: flex;
    justify-content: center;
    padding: 6.4rem 2.4rem; 

    @media (min-width: 425px) {
        z-index: 999;
        background-color: #00000050;
        backdrop-filter: blur(2px);
        padding: 13.4rem 11.9rem; 
        overflow: hidden;

    }
`;

export const ModalBody = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7.6rem 2.4rem 9.6rem;

    animation: ${modalOpenAnimation} .5s ease-in-out;

    @media (min-width: 425px) {
        position: relative;
        max-width: 100%;
        padding: 5.6rem 10.2rem;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
    }

    > button {
        /* display: none; */
        z-index: 999;
        display: block;
        position: absolute;
        top: 8rem;
        right: 2rem;
        background-color: transparent;
        border: none;

        @media (min-width: 425px) {
            top: 1.6rem;
        }
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
        margin-bottom: 3.2rem;

        @media (min-width: 425px) {
            margin-bottom: 4.5rem;
        }
    }

    > img {
        width: 100%;
        max-width: 31.2rem;
        height: auto;
        border-radius: 4px;
        margin-bottom: 1rem;

        @media (min-width: 425px) {
            max-width: 100%;
            margin-bottom: 6.4rem;
        }
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.4rem;

        ul {
            display: flex;
            gap: 8px;
        }

        @media (min-width: 425px) {
            position: absolute;
            top: 0;
            padding: 5.6rem 10.2rem;
            width: 100%;
        }
    }
    
    > p {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: .5px;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
        margin-bottom: 3.2rem;
    }

    > h3 {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_4};
        align-self: flex-start;
    }

    > a {
        margin-bottom: 4rem;
        align-self: flex-start;
    }
`;