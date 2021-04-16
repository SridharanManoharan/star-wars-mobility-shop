import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import HeaderBlock from "../../blocks/header/header.block";
import NavbarBlock from "../../blocks/navbar/navbar.block";
import { retrieveStarWarsVehicles } from "../../../redux/services";
import { retrieveVehicle } from "../../../redux/actions";
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

const VehiclePattern = () => {
    const vehicles = useSelector((state) => state.starwars);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePageClick = async ({ selected }) => {
        window.scrollTo(0, 0);
        try {
            dispatch(retrieveVehicle(selected + 1));
        } catch (error) {
            history.push("/error");
        }
    };

    return (
        <div>
            <Wrapper>
                <HeaderBlock />
                <NavbarBlock type={"vehicle"} searchBar />
                <CardsPattern data={vehicles.filteredResults} type="vehicle" />
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(vehicles.count / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={10}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </Wrapper>
        </div>
    );
};

export default VehiclePattern;
