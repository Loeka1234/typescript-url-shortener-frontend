import styled, { css } from "styled-components";
import Color from "color";

export interface IButton {
    primary?: boolean;
    color?: "primary" | "secondary";
}

const Button = styled.button<IButton>`
    ${({ primary, color, theme }) => {
        const { primaryColor, secondaryColor } = theme;

        if (!color) color = primaryColor;
        else if (color === "primary") color = primaryColor;
        else if (color === "secondary") color = secondaryColor;

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
                background: ${!primary
                    ? color
                    : (Color(color).darken(0.3) as any)};
                color: ${!primary && "white"};
            }
            &:focus {
                outline: 0;
            }
        `;
    }}
`;

export default Button;
