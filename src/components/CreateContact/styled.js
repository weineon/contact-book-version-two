import { styled } from "styled-components";

export const SCreateContact = {
    Container: styled.form`
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    Input: styled.input`
    margin-bottom: 10px;
        padding: 5px 10px;
        border: 1px solid #8B8B8B;
        border-radius: 4px;
        outline: none;
    `,
    Button: styled.button`
        display: block;
        border: 1px solid #5A0FC8;
        border-radius: 20px;
        padding: 10px 24px;
        color: #fff;
        background: #5A0FC8;
        cursor: pointer;
    `
}