import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaSortAmountUp } from "react-icons/fa";
import { Dropdown, Row, Button, Col, Form } from "react-bootstrap";
import {
    addSortBy,
    addMaxPrice,
    addMinPrice,
    retrieveVehicle,
    retrieveStarship,
    removeSortBy,
    removeMinPrice,
    removeMaxPrice,
    updateFilteredResults,
} from "../../../redux/actions";

const Wrapper = styled.div`
    margin: 20px auto 0px auto;
    .btn {
        @media (max-width: 570px) {
            margin-top: 20px;
        }
    }
    .form-cost {
        @media (max-width: 570px) {
            margin-top: 20px;
        }
    }
`;

const FilterBlock = ({ type }) => {
    const starwars = useSelector((state) => state.starwars);
    const dispatch = useDispatch();

    const [maxInpInValid, setMaxInpInValid] = useState(false);
    const [minInpInValid, setMinInpInValid] = useState(false);

    const minInp = useRef(null);
    const maxInp = useRef(null);

    const handleRetrieve = () => {
        if (type === "vehicle") {
            dispatch(retrieveVehicle(starwars.pageNumber));
        } else {
            dispatch(retrieveStarship(starwars.pageNumber));
        }
    };

    const handleClick = (e) => {
        const { innerText } = e.target;
        if (innerText !== "") {
            dispatch(addSortBy(innerText));
            dispatch(updateFilteredResults(starwars.filteredResults));
        } else {
            dispatch(removeSortBy());
        }
    };

    const handleMinPrice = () => {
        const { value } = minInp.current;
        dispatch(addMinPrice(value));
    };

    const handleMinPriceOnBlur = () => {
        const { minPrice, maxPrice } = starwars;
        if (maxPrice !== "" && minPrice > maxPrice) {
            setMinInpInValid(true);
            dispatch(addMinPrice(""));
        } else {
            setMinInpInValid(false);
            handleRetrieve();
            dispatch(updateFilteredResults(starwars.filteredResults));
        }
    };

    const handleMaxPrice = () => {
        const { value } = maxInp.current;
        dispatch(addMaxPrice(value));
    };

    const handleMaxPriceOnBlur = () => {
        const { minPrice, maxPrice } = starwars;
        if (minPrice !== "" && minPrice > maxPrice) {
            setMaxInpInValid(true);
            dispatch(addMaxPrice(""));
        } else {
            setMaxInpInValid(false);
            handleRetrieve();
            dispatch(updateFilteredResults(starwars.filteredResults));
        }
    };

    const clearFilter = () => {
        setMinInpInValid(false);
        setMaxInpInValid(false);
        dispatch(removeSortBy());
        dispatch(removeMaxPrice());
        dispatch(removeMinPrice());
        handleRetrieve();
    };

    return (
        <Wrapper>
            <Row>
                <Dropdown style={{ marginLeft: "18px" }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaSortAmountUp /> Sort{" "}
                        {starwars.sortBy !== "" ? ":" + starwars.sortBy : ""}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleClick}>
                            Name
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>
                            Passengers
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>
                            Cost
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleClick}>
                            Crew
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="form-cost" style={{ marginLeft: "18px" }}>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                ref={minInp}
                                onChange={handleMinPrice}
                                onBlur={handleMinPriceOnBlur}
                                type="number"
                                style={{ maxWidth: "120px" }}
                                placeholder="Min Cost"
                                min="0"
                                value={starwars.minPrice}
                                isInvalid={minInpInValid}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                ref={maxInp}
                                onChange={handleMaxPrice}
                                onBlur={handleMaxPriceOnBlur}
                                type="number"
                                style={{ maxWidth: "120px" }}
                                placeholder="Max Cost"
                                min="0"
                                value={starwars.maxPrice}
                                isInvalid={maxInpInValid}
                            />
                        </Col>
                    </Form.Row>
                </Form>
                <Button
                    onClick={clearFilter}
                    style={{ marginLeft: "18px" }}
                    variant="warning"
                >
                    Clear Filter
                </Button>
            </Row>
        </Wrapper>
    );
};

export default FilterBlock;
