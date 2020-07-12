import React from "react";
import styled, { css } from "styled-components";
import Button from "../styledComponents/Button";

const SFooter = styled.footer`
    ${({ theme: { primaryColor } }) => css`
        background: ${primaryColor};
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p,
        a,
        button {
            margin: 0;
        }
        div {
            margin: 1rem;

            button {
                font-size: 0.9em;
                padding: 0.5rem 0.8rem;
            }
            button,
            a {
                margin: 0.4rem;
            }
        }
        p {
            font-size: 1m;
            margin-bottom: 1.5rem;
            span {
                font-weight: bold;
                letter-spacing: .5px;
            }
        }
    `}
`;

export interface FooterProps {
    toggleTheme?: () => void | null;
}

const Footer: React.FC<FooterProps> = ({ toggleTheme }) => {
    return (
        <SFooter>
            <div>
                <a href="http://www.loeka.me">www.loeka.me</a>
                {toggleTheme && (
                    <Button onClick={toggleTheme} useSecondaryColor>
                        Toggle Theme
                    </Button>
                )}
            </div>
            <p>Copyright ©2020 <span>Loeka Lievens</span></p>
        </SFooter>
    );
};

export default Footer;
