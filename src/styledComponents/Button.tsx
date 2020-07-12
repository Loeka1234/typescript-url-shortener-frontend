import styled, { css } from "styled-components";

const Button = styled.button<{ primary?: boolean; color?: string }>`
    ${({ primary, theme: { primaryColor } }) => css`
        background: ${primary ? primaryColor : "white"};
        color: ${primary ? "white" : primaryColor};

        font-size: 1em;
        margin: 1em;
        padding: 0.8rem 1.3rem;
        border: 1px solid ${primaryColor};
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: ${!primary && primaryColor};
            color: ${!primary && "white"};
        }
    `}
`;

export default Button;
