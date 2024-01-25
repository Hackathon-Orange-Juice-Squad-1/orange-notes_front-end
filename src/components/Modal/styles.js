import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: #00000050;
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
    /* gap: 1.6rem; */
    padding: 1.2rem 2.4rem;

    > h2 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
        margin-bottom: 1.6rem;
    }

    > h3 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: 0.15px;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
    }
`;