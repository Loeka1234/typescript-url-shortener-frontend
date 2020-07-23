import styled, { css } from "styled-components";

const FlexDiv = styled.div<{ column?: boolean; row?: boolean, justifyContent?: string, alignItems?: string }>`
    ${({ column, row }) => {
        if (column && row)
            console.error("FlexDiv can't get both column and row.");
        if (column)
            return css`
                flex-direction: column;
            `;
        if (row)
            return css`
                flex-direction: row;
            `;
    }}
    width: 100%;
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : "center"};
    align-items: ${({ alignItems }) => alignItems ? alignItems : "center"};
`;

export default FlexDiv;