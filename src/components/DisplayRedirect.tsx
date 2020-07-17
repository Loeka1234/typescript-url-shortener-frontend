import React from "react";
import styles from "./styles/DisplayRedirect.module.css";

// Styled Components
import FlexDiv from "../styledComponents/FlexDiv";

export interface Props {
    url: string;
    redirectsTo: string;
}

const DisplayRedirect: React.FC<Props> = ({ url, redirectsTo }) => {
    return (
        <FlexDiv flexDir="column" className={styles.displayRedirect}>
            <h1 >Redirect</h1>
            <p>
                Url:{" "}
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url.split("://")[1]}
                </a>
            </p>
            <p>
                Redirects to:{" "}
                <a href={redirectsTo} target="_blank" rel="noopener noreferrer">
                    {redirectsTo.split("://")[1]}
                </a>
            </p>
        </FlexDiv>
    );
};

export default DisplayRedirect;
