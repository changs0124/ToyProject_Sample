import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
    border: 2px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px 10px;
    height: 60px;
`;

export const logo = css`
    margin: 0px;
	padding: 5px 10px;
`;

export const nav = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 5px 10px;
    input {
        margin-right: 10px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const link = css`
	margin: 10px;
    font-size: 16px;
    cursor: pointer;
`;

export const modal = css`
    box-sizing: 'border-box';
    transform: 'translate(-50%, -50%)';
    top: '50%';
    left: '50%';
    padding: '20px';
    width: '300px';
    height: '300px';
    background-color: '#fafafa';
`;

export const searchInput = css`
    cursor: pointer;
`;

export const searchButton = css`
    box-sizing: border-box;
    margin-right: 10px;
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