import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Button from "../styledComponents/Button";

// TODO: Check inputs at client side -> less requests to server, faster for client
// TODO: Log user automatically in when they register

const SMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h1 {
        margin: 0;
        padding: 0;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .wrap {
            margin: 2rem;
            margin-bottom: 0.3rem;
            display: flex;
            justify-content: center;
            div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;
                div {
                    height: 25%;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    margin: 0.5rem;
                    input,
                    label {
                        font-size: 1.8rem;
                    }
                    input {
                        width: 200px;
                        border-radius: 1px;
                        border: 1px solid black;
                    }
                }
            }
        }
        button {
            margin: 0;
            margin-top: .3rem;
        }
        p {
            text-align: center;
        }
    }
`;

export interface Props {}

const Register: React.FC<Props> = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [created, setCreated] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword)
            return setError("Password and confirm password don't match.");

        try {
            const res = await axios.post(
                process.env.REACT_APP_AUTH_API_ENDPOINT! + "/register",
                {
                    name,
                    password,
                    email,
                }
            );
            if (res.status === 400) return setError(res.data.error);
            else setCreated(true);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <SMain>
            {created && (
                <>
                    <h1>Successfully created account.</h1>
                    <Link to="/login"><Button>Login</Button></Link>
                </>
            )}
            {!created && (
                <>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="wrap">
                            <div>
                                <div>
                                    <label htmlFor="name">Name: </label>
                                </div>
                                <div>
                                    <label htmlFor="email">Email: </label>
                                </div>
                                <div>
                                    <label htmlFor="password">Password: </label>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">
                                        Confirm Password:{" "}
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={e =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <Button type="submit">Register</Button>
                        <p>{error}</p>
                    </form>
                </>
            )}
        </SMain>
    );
};

export default Register;
