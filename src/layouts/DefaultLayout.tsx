import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components//Footer";

export interface DefaultLayoutProps {
    children?: ReactNode,
    title?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title ? `Url Shortener | ${title}` : "Url Shortener"}</title>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default DefaultLayout;
