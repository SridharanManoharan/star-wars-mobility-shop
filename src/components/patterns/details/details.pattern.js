import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import HeaderBlock from "../../blocks/header/header.block";
import DetailsBlock from "../../blocks/details/details.block";
import FilterBlock from "../../blocks/filter/filter.block";
import NavbarBlock from "../../blocks/navbar/navbar.block";
import { isEmptyObj } from "../../../utils";
import { updateDetails } from "../../../redux/actions";

const Wrapper = styled.div`
    margin-left: 2em;
    margin-right: 2em;
`;

const DetailsPattern = () => {
    const details = useSelector((state) => state.details);
    const history = useHistory();

    useEffect(() => {
        if (isEmptyObj(details.results)) {
            history.push("/");
        }
    }, []);

    return (
        <Wrapper>
            <HeaderBlock />
            <NavbarBlock />
            <Container className="container-md">
                <Row>
                    <DetailsBlock />
                </Row>
            </Container>
        </Wrapper>
    );
};

export default DetailsPattern;
