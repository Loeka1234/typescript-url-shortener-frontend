import React from "react";
import styled from "styled-components";

const SMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1, p {
        margin: 0;
    }
    h1 {
        font-size: 6em;
    }
    p {
        font-size: 1.2em;
    }
`;

const NotFound: React.FC = () => {
    return (
        <SMain>
            <h1>404</h1>
            <p>Page not found</p>
        </SMain>
    );
};

export default NotFound;
