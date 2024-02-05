import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    max-width: 100%;

    margin-top: 2.4rem;

    transition: filter .3s;
    transition: transform .3s;

    @media (min-width: 425px) {
        width: 38.9rem;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        filter: drop-shadow(3px 3px 5px #000000);
    }
`;

export const ThumbWrapper = styled.div`
    width: 100%;
    height: 25.8rem;
    border-radius: 4px;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.9);
        border-radius: 4px;
        transition: filter .3s;

        &:hover {
            filter: brightness(1);
        }
    }
`;

export const UserInfo = styled.div`
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
`;