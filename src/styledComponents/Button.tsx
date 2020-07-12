import styled, { css } from "styled-components";
import Color from "color";

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
            transition: all 0.3s ease-in-out;
            
            &:hover {
                cursor: pointer;
                background: ${!primary ? color : Color(color).darken(0.3)};
                color: ${!primary && "white"};
            }
            &:focus {
                outline:0;
            }
        `;
    }}
`;

export default Button;
