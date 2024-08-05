import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 5px 10px;
    height: 60px;
   
`;

export const monthContainer = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    width: 600px;
    background-color: #7A90E2;

    & input[type="month"] {
        margin: 0px 7px;
        border: 2px solid #7A90E2;
        border-radius: 10px;
        height: 40px;
        width: fit-content;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        background-color: #7A90E2;
        color: #ffffff;
        outline: none;
    }
    & input[type="month"]::-webkit-calendar-picker-indicator{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

export const arrow = css`
    width: 25px;
    height: 25px;
    color: #7A90E2;
    cursor: pointer;
    &:hover {
        color: #3b3a3aff;
    }
    &:active {
        color: #817f7f;
    }
`;

