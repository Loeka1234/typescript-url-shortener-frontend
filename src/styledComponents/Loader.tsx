import React from "react";
import styled, { keyframes, css } from "styled-components";

export interface Props {
    className?: string;
}

const Loader: React.FC<Props> = ({ className }) => {
    return (
        <>
            <div className={className}>
                <div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

const rotate = keyframes`
        0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled(Loader)<{ size?: "sm" | "md" | "lg" | number }>`
    ${({ size }) => {
        let scale;
        switch (size) {
            case "sm":
                scale = .5;
                break;
            case "md":
                scale = 1;
                break;
            case "lg":
                scale = 1.5;
                break;
            default:
                if(size === undefined) scale = 1;
                else scale = size / 100;
                break;
        }
        return css`
            div div {
                position: absolute;
                animation: ${rotate} 1s linear infinite;
                width: ${scale * 120}px;
                height: ${scale * 120}px;
                top: ${scale * 15}px;
                left: ${scale * 15}px;
                border-radius: 50%;
                box-shadow: 0 4px 0 0 #e15b64;
                transform-origin: ${scale * 60}px ${scale * 61.5}px;
            }
            width: ${scale * 150}px;
            height: ${scale * 150}px;
            display: inline-block;
            overflow: hidden;
            background: transparent;
            div {
                width: 100%;
                height: 100%;
                position: relative;
                transform: translateZ(0) scale(1);
                backface-visibility: hidden;
                transform-origin: 0 0;
            }
            div div {
                box-sizing: content-box;
            }
        `;
    }}
`;

export default StyledLoader;
