import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderBlock from "../../blocks/header/header.block";
import NavbarBlock from "../../blocks/navbar/navbar.block";
import CardsPattern from "../cards/cards.pattern";

const Wrapper = styled.div`
    margin-left: 2em;
    margin-right: 2em;
    .pagination {
        margin: 0;
        padding: 10px;
        justify-content: center;
        font-size: 1.4rem;
        border: 1px solid white;
        color: white;
        gap: 18px;
        background: #1b1414;
    }
    .active {
        color: #ffc107;
        text-decoration: underline;
    }
    .disabled {
        color: #333333;
    }
`;

const PaginationWrapper = styled.div`
    margin-bottom: 0px;
    padding-bottom: 1rem;
    .pagination {
        justify-content: center;
        margin-bottom: 0px;
    }
`;

const StarshipPattern = () => {
    return (
        <Wrapper>
            <HeaderBlock />
            <NavbarBlock type={"starship"} searchBar />
            <CardsPattern type={"starship"} />
        </Wrapper>
    );
};

export default StarshipPattern;
