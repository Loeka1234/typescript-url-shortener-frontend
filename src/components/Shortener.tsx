import React, { useState, FormEvent } from "react";
import axios from "axios";

// Styles
import styles from "./styles/Shortener.module.css";

// Styled components
import Button from "../styledComponents/Button";
import { useHistory } from "react-router-dom";
import classes from "./styles/Shortener.module.css";

export interface ShortenerProps {}

const Shortener: React.SFC<ShortenerProps> = () => {
    const history = useHistory();

    const [url, setUrl] = useState("");
    const [slug, setSlug] = useState("");
    const [useCustomUrl, setUseCustomUrl] = useState(false);
    const [privateUrl, setPrivateUrl] = useState(false);
    const [info, setInfo] = useState(<></>);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let body: {
            slug?: string;
            customSlug?: boolean;
            publicUrl: boolean;
            url: string;
        } = {
            url,
            publicUrl: !privateUrl,
        };
        if (useCustomUrl) {
            body.slug = slug;
            body.customSlug = true;
        } else if (!useCustomUrl) body.customSlug = false;

        try {
            const response = await axios.post(
                process.env.REACT_APP_API_ENDPOINT + "/new",
                body
            );

            if (!privateUrl) history.push(`/redirects/${response.data.slug}?created=true`);
            else
                setInfo(
                    <p>
                        Successfully created the url:{" "}
                        <a
                            href={`${process.env.REACT_APP_API_ENDPOINT}/${response.data.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.link}
                        >
                            {process.env.REACT_APP_API_ENDPOINT!.split("://")[1]}/
                            {response.data.slug}
                        </a>
                        {" "}(No statistics available for this url as this url is
                        private.)
                    </p>
                );
        } catch (err) {
            setInfo(err.response.data.error);
        }
    };

    return (
        <div className={styles.shortener}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className={styles.input + " " + styles.url}
                        placeholder="Enter the link here..."
                        onChange={e => setUrl(e.target.value)}
                        value={url}
                    />
                    <Button
                        className={styles.input + " " + styles.btn}
                        primary
                        type="submit"
                    >
                        Shorten
                    </Button>
                </div>

                <div className={styles.radio}>
                    <input
                        type="radio"
                        id="no-custom-url"
                        name="url"
                        checked={!useCustomUrl}
                        onClick={() => setUseCustomUrl(false)}
                    />
                    <label htmlFor="no-custom-url">
                        Random Url: www.shortto.me/[randomid]
                    </label>
                </div>
                <div className={styles.radio}>
                    <input
                        type="radio"
                        id="custom-url"
                        name="url"
                        checked={useCustomUrl}
                        onClick={() => setUseCustomUrl(true)}
                    />
                    <label htmlFor="custom-url">
                        Custom Url: www.shortto.me/
                        <input
                            className={styles.text}
                            type="text"
                            disabled={!useCustomUrl}
                            value={slug}
                            onChange={e => setSlug(e.target.value)}
                        />
                    </label>
                </div>
                <input
                    type="checkbox"
                    id="private"
                    checked={privateUrl}
                    onClick={() => setPrivateUrl(!privateUrl)}
                />
                <label htmlFor="private">Keep my url private.</label>
                <div className={styles.info}>{info}</div>
            </form>
        </div>
    );
};

export default Shortener;
