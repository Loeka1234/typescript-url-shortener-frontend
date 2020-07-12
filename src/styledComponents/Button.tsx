import styled, { css } from "styled-components";

const Button = styled.button<{ primary?: boolean; color?: string, useSecondaryColor?: boolean }>`
    ${({ primary, useSecondaryColor, theme }) => {
        const { primaryColor, secondaryColor } = theme;

        const color = useSecondaryColor ? secondaryColor : primaryColor;

        return css`
            background: ${primary ? color : "transparent"};
            color: ${primary ? "white" : color};

            font-size: 1em;
            margin: 1em;
            padding: 0.8rem 1.3rem;
            border: 1px solid ${color};
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
            background: ${!primary && color};
            color: ${!primary && "white"};
            }
        `;
    }}
`;

export default Button;
