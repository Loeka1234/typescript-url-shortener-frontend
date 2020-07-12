import React from "react";
import Button from "../styledComponents/Button";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Button>Home</Button>
        </>
    );
};

export default Home;
