import { css } from "@emotion/react";

export const modalBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 100%;
    h2 {
        font-weight: bold;
        color: #7A90E2;
        cursor: default;
    }
`;
export const ipMonthBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    width: 100%;
    height: 40px;
    background-color: #7A90E2;

    & input[type="month"] {
        border: none;
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

export const ipTexthBox = css`
    box-sizing: border-box;
    flex-grow: 1;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    width: 100%;

    & input[type="text"] {
        box-sizing: border-box;
        border: 2px solid #7A90E2;
        border-radius: 10px;
        width: 100%;
        height: 100px;
        text-align: center;
        overflow: hidden;
        outline: none;
        color: #7A90E2;
        font-size: 20px;
        font-weight: bold;
        background-color: #fafafa;
        cursor: pointer;
        ::placeholder {
            text-align: center;
            font-size: 20px;
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