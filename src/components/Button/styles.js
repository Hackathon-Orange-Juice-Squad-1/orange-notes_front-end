import styled from "styled-components";

export const Container = styled.button`
    height: 4.2rem;

    padding: .8rem 2.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 4px;

    background-color: ${({ theme, $primary }) => $primary ? theme.COLORS.ORANGE : theme.COLORS.GRAY_5};
    color: ${({ theme, $primary }) => $primary ? theme.COLORS.WHITE_2 : theme.COLORS.GRAY_2};
    box-shadow: ${({ $primary }) => $primary ? '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)' : 'none'};

    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.6rem;
    letter-spacing: 0.46px;

    text-transform: uppercase;
`;