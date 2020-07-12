import styled from "styled-components";

const Button = styled.button<{ primary?: boolean, color?: string }>`
    background: ${props => (props.primary ? props.color : "white")};
    color: ${props => (props.primary ? "white" : props.color)};

    font-size: 1em;
    margin: 1em;
    padding: .8rem 1.3rem;
    border: 1px solid ${props => props.color};
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background: ${props => !props.primary && props.color};
        color: ${props => !props.primary && "white"};
    }
`;

Button.defaultProps = {
    color: "#51f5c1"
}

export default Button;
