import React, { useEffect, useState, useContext } from "react";
import { setAccessToken, getAccessToken } from "../accessToken";
import { useHistory, Redirect } from "react-router-dom";
import Loader from "../styledComponents/Loader";
import { UserContext } from "../utils/userContext";

export interface Props {}

const Logout: React.FC = () => {
    const history = useHistory();
    const [error, setError] = useState("");

    const { setUser } = useContext(UserContext);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_AUTH_ENDPOINT + "/logout", {
            method: "DELETE",
            credentials: "include",
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("Successfully logged out.");
                    setAccessToken("");
                    setUser(null);
                    history.push("/");
                }
            })
            .catch(err => {
                console.error(err);
                setError("Couldn't logout. Try refreshing the page.");
            });
        // eslint-disable-next-line
    }, []);
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {error ? <h1>{error}</h1> : <Loader size="lg" />}
            {!getAccessToken() && <Redirect to="/" />}
        </main>
    );
};

export default Logout;
