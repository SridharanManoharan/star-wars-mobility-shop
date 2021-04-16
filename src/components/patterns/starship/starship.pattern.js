import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import HeaderBlock from "../../blocks/header/header.block";
import NavbarBlock from "../../blocks/navbar/navbar.block";
import { retrieveStarWarsStarship } from "../../../redux/services";
import { retrieveStarship } from "../../../redux/actions";
import CardsPattern from "../cards/cards.pattern";
import axios from "axios";

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
    const starships = useSelector((state) => state.starwars);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePageClick = async ({ selected }) => {
        window.scrollTo(0, 0);
        try {
            dispatch(retrieveStarship(selected + 1));
        } catch (error) {
            dispatch(genericError());
            history.push("/error");
        }
    };

    return (
        <Wrapper>
            <HeaderBlock />
            <NavbarBlock type={"starship"} searchBar />
            <CardsPattern data={starships.filteredResults} type="starship" />
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(starships.count / 10)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={10}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </Wrapper>
    );
};

export default StarshipPattern;
