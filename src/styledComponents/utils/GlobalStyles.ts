import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{
    theme: { body: string; text: string };
}>`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'PT Sans Narrow', sans-serif;
        transition: background 0.50s linear, color 0.50s linear;
    }
    a {
        color: ${({ theme }) => theme.text}
    }
    main {
        min-height: calc(100vh - 51px - 91px);
    }
`;
