import React from "react";
import { Link } from "react-router-dom";

import styles from "./stylesheets/Home.module.css";

// Styled components
import FlexDiv from "../styledComponents/FlexDiv";
import Button from "../styledComponents/Button";

// Components
import Shortener from "../components/Shortener";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <main>
            <FlexDiv flexDir="column">
                <h2 className={styles.h2}>Shorten your urls easily!</h2>
                <p className={styles.p}>
                    Shortto.me is simple url shortener website! Use our URL
                    Shortener to create a shortened link making it easy to
                    remember.
                </p>
                <Link to="/about">
                    <Button>About us</Button>
                </Link>

                <Shortener />
            </FlexDiv>
        </main>
    );
};

export default Home;
