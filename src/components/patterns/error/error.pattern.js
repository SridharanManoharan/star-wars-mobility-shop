import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import errorImage from "../../../assets/error-page.jpeg";
import HeaderBlock from "../../blocks/header/header.block";
import NavbarBlock from "../../blocks/navbar/navbar.block";

const Wrapper = styled.div`
    margin-left: 2em;
    margin-right: 2em;
`;

const ErrorBlock = styled.div`
    height: 60vh;
    width: 60%;
    background-color: #fbf7c7;
    margin-top: 4rem;
    padding: 1rem;
    border-radius: 24px;
    background-image: ${() => `url(${errorImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
`;

const ErrorPattern = () => {
    return (
        <Wrapper>
            <HeaderBlock />
            <NavbarBlock />
            <ErrorBlock />
        </Wrapper>
    );
};

export default ErrorPattern;
