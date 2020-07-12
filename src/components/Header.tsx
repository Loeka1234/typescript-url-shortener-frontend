import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const SHeader = styled.header`
    ${({theme: { primaryColor, secondaryColor }}) => css`
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        h1 {
            margin: 0;
            padding: 0;
            font-weight: 400;
            box-shadow: inset 0 -0.18em 0 ${secondaryColor};
        }
        ul {
            margin: 0;
            padding: 0;
        }
        li {
            display: inline-block;
            padding: .2rem;
            margin: 1rem 2rem;
            font-size: 1.5em;
            letter-spacing: .1rem;
        }
        li:hover {
            box-shadow: inset 0 -0.13em 0 ${primaryColor};
            cursor: pointer;
            transition: all .2s ease-in-out;
        }

        @media only screen and (max-width: 500px) {
            flex-direction: column;
        }
    `}
`;

const Header: React.FC = () => {
    return (
        <SHeader>
            <h1>Url Shortener</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </SHeader>
    );
};

export default Header;
