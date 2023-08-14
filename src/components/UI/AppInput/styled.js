import styled from "styled-components";

export const SAppInput = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
    `,
    Input: styled.input`
        margin-bottom: 0px;
        padding: 5px 10px;
        border: 1px solid #8B8B8B;
        border-radius: 4px;
        outline: none;
    `,
    Label: styled.label``,
    Error: styled.p`
        font-size: 10pt;
        /* margin-bottom: 5px; */
        color: red;
    `
}