import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { getAccessToken } from "../accessToken";
import jwtDecode from "jwt-decode";

const SHeader = styled.header`
    ${({ theme: { primaryColor, secondaryColor, text } }) => css`
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
            li {
                display: inline-block;
                padding: 0.2rem;
                margin: 1rem 2rem;
                font-size: 1.5em;
                letter-spacing: 0.1rem;
                &:hover {
                    box-shadow: inset 0 -0.13em 0 ${primaryColor};
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }
            }
        }

        .hamburger {
            visibility: hidden;
            position: absolute;
            top: 5px;
            right: 5px;
            .menu-icon {
                cursor: pointer;
                display: inline-block;
                float: right;
                padding: 28px 20px;
                position: relative;
                user-select: none;
                .navicon {
                    background: ${text};
                    display: block;
                    height: 3px;
                    position: relative;
                    transition: background 0.2s ease-out;
                    width: 34px;
                    &:before,
                    &:after {
                        background: ${text};
                        content: "";
                        display: block;
                        height: 100%;
                        position: absolute;
                        transition: all 0.2s ease-out;
                        width: 100%;
                    }
                    &:before {
                        top: -10px;
                    }
                    &:after {
                        top: 10px;
                    }
                }
            }
            .menu-btn {
                display: none;
                &.menu-btn:checked ~ .menu-icon .navicon {
                    background: transparent;
                }
                &:checked ~ .menu-icon .navicon:before {
                    transform: rotate(-45deg);
                }
                &:checked ~ .menu-icon .navicon:after {
                    transform: rotate(45deg);
                }
                &:checked ~ .menu-icon:not(.steps) .navicon:before,
                &:checked ~ .menu-icon:not(.steps) .navicon:after {
                    top: 0;
                }
            }
        }
        @media only screen and (max-width: 800px) {
            flex-direction: column;
            h1 {
                margin: 1rem;
            }
            ul {
                display: none;
                align-items: center;
                flex-direction: column;
                &.show {
                    display: flex;
                }
                li {
                    display: block;
                }
            }
            .hamburger {
                visibility: visible;
            }
        }
    `}
`;

const Header: React.FC = () => {
    const [showNav, setShowNav] = useState(false);

    const RenderUser = () => {
        if (!getAccessToken())
            return (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </>
            );

        const { name } = jwtDecode(getAccessToken());
        return (
            <>
                <li>
                    <Link to="/account">{name}</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </>
        );
    };

    const handleNav = (e: ChangeEvent<HTMLInputElement>) => {
        setShowNav(e.target.checked);
    };

    return (
        <SHeader>
            <div className="hamburger">
                <input
                    className="menu-btn"
                    type="checkbox"
                    id="menu-btn"
                    defaultChecked={false}
                    onChange={handleNav}
                />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
            </div>
            <h1>Url Shortener</h1>
            <ul className={showNav ? "show" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <RenderUser />
            </ul>
        </SHeader>
    );
};

export default Header;
