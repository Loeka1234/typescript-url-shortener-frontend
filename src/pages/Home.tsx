import React from "react";
import Button from "../styledComponents/Button";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <main>
            <Button>Home</Button>
        </main>
    );
};

export default Home;
