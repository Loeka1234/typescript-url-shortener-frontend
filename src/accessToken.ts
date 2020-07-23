import axios from "axios";
import jwtDecode from "jwt-decode";

let accessToken = "";

export const setAccessToken = (s: string) => {
    accessToken = s;
};

export const getAccessToken = () => accessToken;

axios.interceptors.request.use(
    async config => {
        if (accessToken) {
            const { exp } = jwtDecode(accessToken);

            if (Date.now() > exp * 1000) {
                const res = await fetch(
                    process.env.REACT_APP_API_AUTH_ENDPOINT + "/token",
                    { method: "POST", credentials: "include" }
                );
                const { accessToken: token } = await res.json();
                accessToken = token;
                console.log("Updated to new access token.");
            }

            config.headers["authorization"] = `Bearer ${accessToken}`;
            config.headers["cache-control"] = `no-cache`;
            return config;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
