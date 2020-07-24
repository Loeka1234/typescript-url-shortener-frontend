import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { getAccessToken } from "../accessToken";
import { Link, useHistory } from "react-router-dom";

// Styled components
import Button from "../styledComponents/Button";
import FlexDiv from "../styledComponents/FlexDiv";

// Icons
import {
    RiCheckboxBlankCircleLine,
    RiCheckboxCircleLine,
} from "react-icons/ri";

const SShortener = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    width: 80%;
    form {
        width: 55%;
        div {
            .url,
            button {
                font-size: 1.3em;
                margin: 0;
                padding: 1rem;
            }
            .url {
                width: calc(100% - 100px);
                border: 1px solid ${({ theme }) => theme.text};
            }
            button {
                width: 100px;
                border-radius: 0;
                border: 1px solid ${({ theme }) => theme.primaryColor};
            }
        }
        .options {
            margin-top: 1rem;
            div {
                padding: 3px;
                justify-content: flex-start;
                font-size: 2rem;
                user-select: none;
                &:hover {
                    cursor: pointer;
                    /* svg {
                        fill: ;
                    } */
                }
                svg {
                    fill: ${({ theme }) => theme.text};
                    margin: 0.7rem;
                    margin-right: 0.3rem;
                }
                input {
                    border: 1px solid #ccc;
                    border-radius: 1px;
                    margin: 1px;
                }
                p {
                    margin: 0;
                    a:hover {
                        box-shadow: inset 0 -0.18em 0 #ff6969;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1450px) {
        form {
            width: 70%;
        }
    }
    @media screen and (max-width: 1000px) {
        form {
            width: 85%;
        }
    }
    @media screen and (max-width: 800px) {
        form {
            width: 100%;
        }
    }
`;

const Shortener2: React.FC = () => {
    const [url, setUrl] = useState("");
    const [customSlug, setCustomSlug] = useState(false);
    const [slug, setSlug] = useState("");
    const [privateUrl, setPrivateUrl] = useState(false);
    const [error, setError] = useState("");

    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                process.env.REACT_APP_API_URL_ENDPOINT + "/new",
                {
                    slug,
                    customSlug,
                    url,
                    publicUrl: !privateUrl,
                }
            );
            // TODO: Create redirect created for private url with the response
            history.push(`/redirects/${res.data.slug}?created=true`);
        } catch (err) {
            setError(err.response.data.message);
            console.log(err.response);
        }
    };

    return (
        <SShortener>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder="Enter your url here..."
                        className="url"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <Button primary type="submit">
                        Shorten
                    </Button>
                </div>
                <div className="options">
                    <FlexDiv
                        row
                        onClick={(e: any) => {
                            if (e.target.type !== "text")
                                setCustomSlug(!customSlug);
                        }}
                    >
                        {customSlug ? (
                            <RiCheckboxCircleLine size={23} color="#4a4a4a" />
                        ) : (
                            <RiCheckboxBlankCircleLine
                                size={23}
                                color="#4a4a4a"
                            />
                        )}
                        <p>
                            Custom url: shortto.me/
                            <input
                                type="text"
                                disabled={!customSlug}
                                value={slug}
                                onChange={e => setSlug(e.target.value)}
                            />
                        </p>
                    </FlexDiv>
                    <FlexDiv row onClick={e => setPrivateUrl(!privateUrl)}>
                        {privateUrl ? (
                            <RiCheckboxCircleLine size={23} color="#4a4a4a" />
                        ) : (
                            <RiCheckboxBlankCircleLine
                                size={23}
                                color="#4a4a4a"
                            />
                        )}
                        <p>
                            Keep my url private.
                            {getAccessToken() ? (
                                " You will be the owner of this url."
                            ) : (
                                <>
                                    {" "}
                                    <Link to="/login">Login</Link> to be the
                                    owner of this url.
                                </>
                            )}
                        </p>
                    </FlexDiv>
                </div>
                <FlexDiv>
                    <p>{error}</p>
                </FlexDiv>
            </form>
        </SShortener>
    );
};

export default Shortener2;
