import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    width: 50%;
`;

export const todoHeader = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    height: 70px;
    color: #7A90E2;
    & h2 {
        cursor: default;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const todoBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    padding: 10px 10px 10px 0px ;
    width: 100%;
`;

export const ipBox = css`
    box-sizing: content-box;
    display: flex;
    align-items: center;
    padding-left: 5px;
    width: 100%;
    word-break: break-all;
    input {
        display: none;
        box-sizing: border-box;
        margin: 10px;
        width: 20px;
        height: 20px;
        accent-color: #7A90E2;

    }
    p { 
        font-size: 20px;
        font-weight: bold;
        color: #7A90E2;
        max-width: 650px;
        cursor: default;
    }
`;
   
export const buttonBox = css`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;
    margin-bottom: 5px;
    bottom: 0px;
    right: 0px;
`;

export const button = css`
    box-sizing: border-box;
    border: 2px solid #7A90E2;
    border-radius: 10px;
    margin-left: 10px;
    width: 100px;
    height: 25px;
    font-weight: bold;
    color: #ffffff;
    background-color: #7A90E2;
    cursor: pointer;
`;

export const checkIcon = css`
    box-sizing: border-box;
    color: #7A90E2;
    margin: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;