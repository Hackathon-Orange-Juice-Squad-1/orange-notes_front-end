import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 1.6rem;

    position: relative;

    &.active label {
        transform: translate(0, -2.4rem) scale(0.75);
        background-color: ${({theme}) => theme.COLORS.WHITE_1};
    }

    &:focus-within label {
        transform: translate(0, -2.4rem) scale(0.75);
        background-color: ${({theme}) => theme.COLORS.WHITE_1};
    }

    @media (min-width: 425px) {
        max-width: 51.3rem;
    }

    > button {
        position: absolute;
        right: 1.2rem;
        top: 0;
        bottom: 0;
        background: none;
        border: none;
    }

    > input {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 1.6rem 1.2rem;

        background: transparent;

        border: 1px solid ${({theme}) => theme.COLORS.GRAY_7};
        border-radius: 4px;

        &::placeholder {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;
            letter-spacing: 0.15px;
            color: ${({theme}) => theme.COLORS.GRAY_2};
        }
    }

    > label {
        position: absolute;
        left: 1.2rem;
        top: 1.6rem;
        pointer-events: none;

        transform-origin: top left;
        transition: all 0.2s ease-out;
    }
`;