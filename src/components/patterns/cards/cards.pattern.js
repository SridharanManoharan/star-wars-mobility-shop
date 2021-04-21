import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import CardBlock from "../../blocks/card/card.block";
import FilterBlock from "../../blocks/filter/filter.block";
import NoDataBlock from "../../blocks/no-data/no.data.block";
import { retrieveVehicle, retrieveStarship } from "../../../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
    display: flex;
    margin: 0 auto;
    border-color: white;
`;

const LoaderWrapper = styled.div`
    margin: 20%;
`;

const CardsPattern = ({ type }) => {
    const { count, isLoading, filteredResults } = useSelector(
        (state) => state.starwars
    );
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRetrieve = (pageNumber) => {
        if (type === "vehicle") {
            dispatch(retrieveVehicle(pageNumber));
        } else {
            dispatch(retrieveStarship(pageNumber));
        }
    };

    const handlePageClick = async ({ selected }) => {
        window.scrollTo(0, 0);
        try {
            handleRetrieve(selected + 1);
        } catch (error) {
            history.push("/error");
        }
    };

    return isLoading === false ? (
        filteredResults.length !== 0 ? (
            <>
                <Container className="container-md">
                    <FilterBlock type={type} />
                    <Row>
                        {filteredResults.map((elem, index) => {
                            return (
                                <Col key={type + index}>
                                    <CardBlock cardDetail={elem} type={type} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(count / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={10}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </>
        ) : (
            <Container data-testid="noDataBlock" className="container-md">
                <FilterBlock type={type} />
                <Row>
                    <NoDataBlock type={type} />
                </Row>
            </Container>
        )
    ) : (
        <LoaderWrapper data-testid="spinner" className="align-middle">
            <RingLoader
                color={"#ffffff"}
                loading={true}
                css={override}
                size={150}
            />
        </LoaderWrapper>
    );
};

export default CardsPattern;
