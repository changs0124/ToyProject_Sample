import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    margin-right: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 10px;
    width: 50%;
    height: 100%;
    background-color: #fafafa;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const listBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 2px solid #dbdbdb;
    border-radius: 5px;
    width: 100%;
    height: 100px;
`;

export const ipBox = css`
    box-sizing: content-box;
    display: flex;
    flex-grow: 1;
    align-items: center;
    box-sizing: border-box;
    padding-left: 5px;
    width: 100%;
    overflow : hidden;
    white-space: nowrap; 
    -webkit-line-clamp: 1;
`;

export const checkbox = css`
    box-sizing: border-box;
    margin: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const button = css`
    box-sizing: border-box;
    height: 25px;
    margin-left: 5px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    cursor: pointer;
    
    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
`;