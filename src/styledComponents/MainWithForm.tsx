import styled from "styled-components";

export default styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h1 {
        margin: 0;
        padding: 0;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .wrap {
            margin: 2rem;
            margin-bottom: 0.3rem;
            display: flex;
            justify-content: center;
            div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: space-between;
                div {
                    height: 25%;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    margin: 0.5rem;
                    input,
                    label {
                        font-size: 1.8rem;
                    }
                    input {
                        width: 200px;
                        border-radius: 1px;
                        border: 1px solid black;
                    }
                }
            }
        }
        button {
            margin: 0;
            margin-top: 0.3rem;
        }
        p {
            text-align: center;
        }
    }
`;
