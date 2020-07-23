import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "../styledComponents/Button";
import MainWithForm from "../styledComponents/MainWithForm";

// TODO: Check inputs at client side -> less requests to server, faster for client
// TODO: Log user automatically in when they register

const Register: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [created, setCreated] = useState(false);

    // TODO: add error handling if no response from server
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword)
            return setError("Password and confirm password don't match.");

        try {
            const res = await axios.post(
                process.env.REACT_APP_API_AUTH_ENDPOINT! + "/register",
                {
                    name,
                    password,
                    email,
                }
            );
            if (res.status === 400) return setError(res.data.error);
            else setCreated(true);
        } catch (err) {
            setError(err.response.data.message || err.response.data.error); // TODO: Add better error handling to the backend to avoid these things
        }
    };

    return (
        <MainWithForm>
            {created && (
                <>
                    <h1>Successfully created account.</h1>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
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
        </MainWithForm>
    );
};

export default Register;
