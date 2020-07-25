import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "../customHooks/useQuery";

// Styled components
import Loader from "../styledComponents/Loader";
import Button from "../styledComponents/Button";

// Components
import DisplayRedirect from "../components/DisplayRedirect";

export interface Props {}

const RedirectInfo: React.FC<Props> = () => {
    const { redirect } = useParams();
    const query = useQuery();

    const [url, setUrl] = useState("");
    const [redirectsTo, setRedirectsTo] = useState("");
    const [clicks, setClicks] = useState<number | null>(null);
    const [publicUrl, setPublicUrl] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL_ENDPOINT + `/info/${redirect}`)
            .then(({ data }) => {
                setUrl(data.url);
                setRedirectsTo(data.redirectsTo);
                setClicks(data.clicks);
                setPublicUrl(data.publicUrl);
                setLoading(false);
            })
            .catch(err => {
                if (
                    err.response &&
                    (err.response.status === 400 || err.response.status === 500)
                )
                    setError(err.response.data.error);
                else setError(err.message);
            });
    }, [redirect]);

    return (
        <main
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {error ? (
                <h1>{error}</h1>
            ) : loading ? (
                <Loader />
            ) : (
                <DisplayRedirect
                    url={url}
                    redirectsTo={redirectsTo}
                    clicks={clicks}
                    publicUrl={publicUrl}
                    justCreated={(query.get("created") as unknown) as boolean}
                />
            )}
        </main>
    );
};

export default RedirectInfo;
