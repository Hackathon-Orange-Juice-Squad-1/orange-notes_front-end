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
`;

export const ModalBody = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7.6rem 2.4rem;
    /* box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25); */

    animation: ${modalOpenAnimation} .5s ease-in-out;

    @media (min-width: 425px) {
        min-width: 89rem;
        padding: 2.4rem 2.4rem;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
        margin-bottom: 3.2rem;
    }

    > img {
        width: 100%;
        max-width: 31.2rem;
        height: auto;
        border-radius: 4px;
        margin-bottom: 1rem;
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
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: flex-start;
            gap: 2.4rem;
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
    }
`;