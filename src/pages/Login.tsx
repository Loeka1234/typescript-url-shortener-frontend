import React, { FormEvent, useState } from "react";
import { setAccessToken } from "../accessToken";

// Styled Components
import Button from "../styledComponents/Button";
import MainWithForm from "../styledComponents/MainWithForm";
import { useHistory } from "react-router-dom";

// TODO: Add form validation on the client side -> less requests to server + faster frontend

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    // TODO: add error handling if no response from server
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            process.env.REACT_APP_API_AUTH_ENDPOINT + "/login",
            {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }
        );

        const data = await res.json();

        if (res.status !== 200)
            return setError(data.message || data.error || "Internal server error.");

        setAccessToken(data.accessToken);
        return history.push("/");
    };

    return (
        <MainWithForm>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="wrap">
                    <div>
                        <div>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                        </div>
                    </div>
                    <div>
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
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <Button type="submit">Login</Button>
                <p>{error}</p>
            </form>
        </MainWithForm>
    );
};

export default Login;
