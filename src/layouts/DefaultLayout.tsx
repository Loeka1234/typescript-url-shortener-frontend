import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components//Footer";

export interface DefaultLayoutProps {
    children?: ReactNode,
    title?: string,
    toggleTheme?: (() => void | null)
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, title, toggleTheme }) => {
    return (
        <>
            <Helmet>
                <title>{title ? `Url Shortener | ${title}` : "Url Shortener"}</title>
            </Helmet>
            <Header />
            {children}
            <Footer toggleTheme={toggleTheme} />
        </>
    );
};

export default DefaultLayout;
