import React from "react";
import styled from "styled-components";
import stepSvgUrl from "../../../assets/background.svg";
import ErrorPattern from "../../patterns/error/error.pattern";

const Wrapper = styled.div`
    background-image: ${() => `url(${stepSvgUrl})`};
    background-repeat: repeat;
    min-height: 100vh;
`;

const ErrorPage = () => {
    return (
        <Wrapper>
            <ErrorPattern />
        </Wrapper>
    );
};

export default ErrorPage;
