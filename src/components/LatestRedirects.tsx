import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";

interface Props {
    className?: string;
}

interface Data {
    createdAt: string;
    url: string;
    redirectTo: string;
    slug: string;
}

type responseData = Data[];

const LatestRedirects: React.SFC<Props> = ({ className }) => {
    const [redirects, setRedirects] = useState<responseData>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL_ENDPOINT + "/urls")
            .then((res: AxiosResponse<responseData>) => {
                setRedirects(res.data);
                setLoading(false);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section className={className}>
            <h1>Latest Redirects</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Url</th>
                        <th>Redirects to</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading && Array.isArray(redirects) && redirects.map((redirect, i) => (
                        <tr key={i}>
                            <td>
                                {new Date(
                                    redirect.createdAt
                                ).toLocaleDateString()}
                            </td>
                            <td className="url">
                                <a
                                    href={`http://localhost:3001/redirects/${redirect.slug}`}
                                >
                                    {redirect.url.split("://")[1]}
                                </a>
                            </td>
                            <td>
                                <a
                                    href={redirect.redirectTo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* {redirect.redirectTo.split("://")[1]} */} 
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default styled(LatestRedirects)`
    margin: 1rem;
    text-align: center;
    h1 {
        font-size: 2.3em;
        margin: .5rem;
        padding: 0;
    }
    table {
        font-size: 1.2em;
    }
    th,
    td {
        padding: 0.2rem 2rem;
        letter-spacing: 0.1px;
    }
    a:hover {
        box-shadow: inset 0 -0.18em 0 #ff6969;
    }
    .url {
        border-left: 1px solid ${({ theme: { color } }) => color};
        border-right: 1px solid ${({ theme: { color } }) => color};
    }

    @media screen and (max-width: 550px) {
        h1 {
            font-size: 2em;
        }
        table {
            font-size: .9em;
        }
        th,
        td {
            padding: .1rem 1rem;
        }
    }
    @media screen and (max-width: 350px) {
        h1 {
            font-size: 1.6em;
        }
        table {
            font-size: .8em;
        }
    }
`;
