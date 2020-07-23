import React from "react";
import styles from "./styles/DisplayRedirect.module.css";

// Styled Components
import FlexDiv from "../styledComponents/FlexDiv";

export interface Props {
    url: string;
    redirectsTo: string;
    justCreated?: boolean;
    clicks?: number | null;
}

const DisplayRedirect: React.FC<Props> = ({
    url,
    redirectsTo,
    justCreated,
    clicks,
}) => {
    return (
        <FlexDiv column className={styles.displayRedirect}>
            <h1>{justCreated && "Successfully created "}Redirect</h1>
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
            {clicks !== null && (
                <>
                    <p>Amount times clicked:</p>
                    <h1 className={styles.clicks}>{clicks}</h1>
                </>
            )}
        </FlexDiv>
    );
};

export default DisplayRedirect;
