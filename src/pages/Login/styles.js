import styled, { css } from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    width: 100%;
`;

export const ImageLogin = styled.img`
    height: 100vh;
`;

export const Title = styled.h1`
    color: #224;
    text-align: center;
    font-family: Roboto;
    font-size: 48px;
    font-weight: 400;
    line-height: 40px;
`;

export const ButtonGoogle = styled.button`
    align-items: flex-start;
    background: transparent;
    border-radius: 2px;
    border: none;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.54);
    display: inline-flex;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    gap: 24px;
    padding: 11px;
`;

export const LogoGoogle = styled.img`
    display: inline-flex;
    padding: 3px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

export const FormLogin = styled.form`
    display: flex;
    width: 517px;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
`;

export const FormTitle = styled.h5`
    color: #515255;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
`;

export const labelStyle = css`
    background-color: #ffffff;
    border-radius: 4px;
    color: #007bff;
    font-size: 12px;
    left: 8px;
    padding: 0 4px;
    top: -6px;
`;

export const FormLabel = styled.label`
    color: #777;
    font-size: 14px;
    left: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`;

export const FormInput = styled.input`
    border: none;
    height: 100%;
    padding: 0 12px;
    width: 100%;
    &:not(:placeholder-shown) ~ label,
    &:focus ~ ${FormLabel} {
        ${labelStyle}
    }
`;

export const FormControl = styled.div`
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    height: 56px;
    max-width: 517px;
    position: relative;
    width: 100%;
`;

export const ButtonEnter = styled.button`
    align-items: center;
    background: #F52;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    color: #FCFDFF;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    height: 42px;
    justify-content: center;
    letter-spacing: 0.46px;
    line-height: 26px;
    padding: 8px 22px;
    text-transform: uppercase;
    width: 517px;
`;

export const FormIcon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
`;

export const LinkRegister = styled.a`
    color: #818388;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.15px;
`;
