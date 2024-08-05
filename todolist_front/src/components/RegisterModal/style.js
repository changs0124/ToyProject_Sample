import { css } from "@emotion/react";

export const modalBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100%;
    h2 {
        font-weight: bold;
        color: #7A90E2;
        cursor: default;
    }
`;

export const ipBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    & input {
        box-sizing: border-box;
        margin-bottom: 10px;
        border: 2px solid #7A90E2;
        border-radius: 10px;
        padding-left: 10px;
        width: 100%;
        height: 40px;
        overflow: hidden;
        outline: none;
        color: #7A90E2;
        cursor: pointer;
        ::placeholder {
            font-weight: bold;
            color: #7A90E2;
        }
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
        margin-top: 10px;
        border: 2px solid #7A90E2;
        border-radius: 10px;
        padding: 0;
        height: 30px;
        color: #ffffff;
        font-weight: bold;
        background-color: #7A90E2;
        outline: none;
        cursor: pointer;
    }
`;