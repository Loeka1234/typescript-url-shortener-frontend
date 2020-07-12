import * as React from "react";

export interface FooterProps {
    toggleTheme?: () => void | null;
}

const Footer: React.FC<FooterProps> = ({ toggleTheme }) => {
    return (
        <div>
            Footer
            {toggleTheme && <button onClick={toggleTheme}>Toggle Theme</button>}
        </div>
    );
};

export default Footer;
