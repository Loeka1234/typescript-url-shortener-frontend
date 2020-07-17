import React from "react";
import styled, { css } from "styled-components";

import { RiComputerLine } from "react-icons/ri";
import { FiGithub, FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";

export interface Props {
    className?: string;
}

const About: React.SFC<Props> = ({ className }) => {
    return (
        <main className={className}>
            <h1>About us</h1>
            <p>
                This website has been created by Loeka Lievens. He wanted to
                make a good, fast and secure url shortener.
            </p>
            <div>
                <IconContext.Provider
                    value={{ size: "128px" }}
                >
                    <a href="https://www.loeka.me" target="_blank"  rel="noopener noreferrer">
                        <RiComputerLine />
                    </a>
                    <a href="https://github.com/Loeka1234" target="_blank"  rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a href="mailto:loekalievens@hotmail.com" target="_blank"  rel="noopener noreferrer">
                        <FiMail />
                    </a>
                </IconContext.Provider>
            </div>
        </main>
    );
};

export default styled(About)`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    p {
        padding: 0;
        margin: 0;
        margin-top: 1.5rem;
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        a {
            margin: 10rem;
            transition: box-shadow .2s ease-in-out;
            @media screen and (max-width: 950px) {
                margin: 10rem 7rem;
            }
            @media screen and (max-width: 700px) {
                margin: 10rem 4rem;
            }
            @media screen and (max-width: 500px) {
                margin: 10rem 0;
            }
        }
        a:hover {
            box-shadow: inset 0 -0.18em 0 #ff6969;
        }
    }
    @media screen and (max-width: 450px) {
        svg {
            height: 64px;
            width: 64px;
        }
    }
    ${({ theme: { text } }) => css`
        svg {
            color: ${text};
        }
    `}
`;
