import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import HeaderBlock from "../../blocks/header/header.block";
import DetailsBlock from "../../blocks/details/details.block";
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
        if (isEmptyObj(details)) {
            history.push("/");
        }
    }, []);

    return (
        <Wrapper>
            <HeaderBlock />
            <NavbarBlock />
            <DetailsBlock />
        </Wrapper>
    );
};

export default DetailsPattern;
