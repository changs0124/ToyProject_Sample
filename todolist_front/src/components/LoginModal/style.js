import { css } from "@emotion/react";

export const modalBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 100%;
    input {
        width: auto;
        margin-bottom: 3px;
        overflow: hidden;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    width: 100%;
    button {
        margin-bottom: 3px;
        width: auto;
        
    }
`;
