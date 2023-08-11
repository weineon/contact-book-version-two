import { styled } from "styled-components";

export const SContactList = {
    Container: styled.div`
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: baseline;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid #5A0FC8; 
    `,
    H2: styled.h2`
        width: 50%;
        margin: 0;
    `,
    P: styled.p`
        width: 30%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #5A0FC8;
        border-right: 1px solid #5A0FC8;
    `,
    Button: styled.button`
        width: 20%;
        border: none;
        background: none;
        cursor: pointer;
    `
}