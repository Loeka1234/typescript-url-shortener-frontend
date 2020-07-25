import React, { useState } from "react";
import styled from "styled-components";

import Button from "../styledComponents/Button";
import { useHistory } from "react-router-dom";

const SMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    div {
        width: 450px;
        input,
        button {
            margin: 0;
            font-size: 1.9rem;
            padding: 1rem;
        }
        input {
            width: calc(100% - 85px);
        }
        button {
            width: 85px;
        }
    }
    @media screen and (max-width: 470px) {
        div {
            width: 95%;
        }
    }
`;

const SearchRedirects: React.FC = () => {
    const [slug, setSlug] = useState("");
    const history = useHistory();

    const handleSubmit = () => {
        history.push(`/redirects/${slug}`);
    }

    return (
        <SMain>
            <h1>Search your redirect</h1>
            <div>
                <input
                    type="text"
                    placeholder="id"
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
                />
                <Button primary onClick={handleSubmit}>Search</Button>
            </div>
        </SMain>
    );
};

export default SearchRedirects;
