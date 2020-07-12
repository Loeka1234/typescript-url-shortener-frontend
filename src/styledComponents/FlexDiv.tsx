import styled, { css } from "styled-components";

const FlexDiv = styled.div<{ flexDir?: ("column" | "row")}>`
    ${({ flexDir }) => {

        return css`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: ${flexDir ? flexDir : "row"};
        `;
    }}
`;

export default FlexDiv;