import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{
    theme: { body: string; text: string };
}>`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s ease-in-out;
    }
`;
