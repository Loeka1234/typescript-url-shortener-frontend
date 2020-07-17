import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Styled components
import FlexDiv from "../styledComponents/FlexDiv";

export interface Props {}

const RedirectInfo: React.FC<Props> = () => {
    const { redirect } = useParams();
    const [url, setUrl] = useState("");
    const [redirectsTo, setRedirectsTo] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                process.env.REACT_APP_API_ENDPOINT + `/info/${redirect}`
            );
            setUrl(response.data.url);
            setRedirectsTo(response.data.redirectsTo);
        };
        getData();
    }, []);

    return (
        <main>
            <FlexDiv flexDir="column">
                <h1>Redirect</h1>
                <p>
                    Url:{" "}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {url.split("://")[1]}
                    </a>
                </p>
                <p>
                    Redirects to:{" "}
                    <a
                        href={redirectsTo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {redirectsTo.split("://")[1]}
                    </a>
                </p>
            </FlexDiv>
        </main>
    );
};

export default RedirectInfo;
