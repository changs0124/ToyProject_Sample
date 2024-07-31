import { css } from "@emotion/react";

export const container = css`
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;