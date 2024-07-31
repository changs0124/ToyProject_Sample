import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 5px 10px;
    height: 60px;
    input {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const dateinput = css`
    margin: 0px 7px;
    border-radius: 5px;
    height: 30px;
    width: 500px;
`;

export const arrow = css`
    width: 25px;
    height: 25px;
    cursor: pointer;
    &:hover {
        color: #3b3a3aff;
    }
    &:active {
        color: #817f7f;
    }
`;

