import React from "react";
import { Link } from "react-router-dom";

import styles from "./stylesheets/Home.module.css";

import FlexDiv from "../styledComponents/FlexDiv";
import Button from "../styledComponents/Button";

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

                <div className={styles.shortener}>
                    <form action="">
                        <div>
                            <input
                                type="text"
                                className={styles.input}
                                style={{
                                    border: "1px solid black",
                                    boxShadow:
                                        "inset 0px 0px .25px .5px rgba(0,0,0,0.3)",
                                }}
                                placeholder="Enter the link here..."
                            />
                            <Button className={styles.input} primary>Shorten</Button>
                        </div>
                    </form>
                </div>
            </FlexDiv>
        </main>
    );
};

export default Home;
