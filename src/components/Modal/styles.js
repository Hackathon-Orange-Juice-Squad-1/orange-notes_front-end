import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    width: 500px;
    height: 300px;
    background-color: #FFF;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;