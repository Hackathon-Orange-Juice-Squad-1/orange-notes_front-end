import styled from "styled-components";

export const Container = styled.button`
    height: 4.2rem;

    padding: .8rem 2.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 4px;

    background-color: ${({ theme, primary }) => primary ? theme.COLORS.ORANGE : theme.COLORS.GRAY_5};
    color: ${({ theme, primary }) => primary ? theme.COLORS.WHITE_2 : theme.COLORS.GRAY_2};

    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.6rem;
    letter-spacing: 0.46px;

    text-transform: uppercase;
`;