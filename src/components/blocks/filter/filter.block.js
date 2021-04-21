import React, { useState } from "react";
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
import RangeSliderBlock from "../range-slider/range.slider.block";
import { findMaxValue } from "../../../utils";
import { MAX, MIN } from "../../../constants";

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
    const [minInp, setMinInp] = useState(MIN);
    const [maxInp, setMaxInp] = useState(MAX);
    const [maxInpInValid, setMaxInpInValid] = useState(false);
    const [minInpInValid, setMinInpInValid] = useState(false);

    const handleRetrieve = () => {
        if (type === "vehicle") {
            dispatch(retrieveVehicle(starwars.pageNumber));
        } else {
            dispatch(retrieveStarship(starwars.pageNumber));
        }
    };

    const handleClick = (e) => {
        const { id } = e.target;
        dispatch(addSortBy(id));
        dispatch(updateFilteredResults(starwars.filteredResults));
    };

    // const handleMinPrice = (e) => {
    //     const { value } = e.target;
    //     setMinInp(value);
    //     dispatch(addMinPrice(value));
    // };

    // const handleMaxPrice = (e) => {
    //     const { value } = e.target;
    //     setMaxInp(value);
    //     dispatch(addMaxPrice(value));
    // };

    // const handleMinMaxPriceOnBlur = () => {
    //     const { minPrice, maxPrice } = starwars;
    //     const max =
    //         maxPrice == "" ? findMaxValue(starwars.filteredResults) : maxPrice;
    //     const min = minPrice == "" ? 0 : minPrice;
    //     const checkIsValid = Math.round(min) >= Math.round(max);
    //     setMinInpInValid(checkIsValid);
    //     setMaxInpInValid(checkIsValid);
    //     dispatch(addMinPrice(min));
    //     dispatch(addMaxPrice(max));
    //     handleRetrieve();
    //     dispatch(updateFilteredResults(starwars.filteredResults));
    // };

    const clearFilter = () => {
        setMinInpInValid(false);
        setMaxInpInValid(false);
        dispatch(removeSortBy());
        dispatch(addMinPrice(MIN));
        dispatch(addMaxPrice(MAX));
        handleRetrieve();
    };

    return (
        <Wrapper>
            <Row>
                <Dropdown style={{ marginLeft: "18px" }}>
                    <Dropdown.Toggle
                        data-testid="filterDropdown"
                        variant="success"
                        id="dropdown-basic"
                    >
                        <FaSortAmountUp /> Sort{" "}
                        {starwars.sortBy !== "" ? ":" + starwars.sortBy : ""}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            name="name"
                            id="name"
                            data-testid="filterDropdownName"
                            onClick={handleClick}
                        >
                            Name
                        </Dropdown.Item>
                        <Dropdown.Item
                            name="passengers"
                            id="passengers"
                            data-testid="filterDropdownPassengers"
                            onClick={handleClick}
                        >
                            Passengers
                        </Dropdown.Item>
                        <Dropdown.Item
                            name="cost"
                            id="cost"
                            data-testid="filterDropdownCost"
                            onClick={handleClick}
                        >
                            Cost
                        </Dropdown.Item>
                        <Dropdown.Item
                            name="crew"
                            id="crew"
                            data-testid="filterDropdownCrew"
                            onClick={handleClick}
                        >
                            Crew
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="form-cost" style={{ marginLeft: "18px" }}>
                    <Form.Row>
                        {/* <Col>
                            <Form.Control
                                data-testid="minInpFilter"
                                onChange={handleMinPrice}
                                onBlur={handleMinMaxPriceOnBlur}
                                type="number"
                                style={{ width: "120px" }}
                                placeholder="Min Cost"
                                min={0}
                                max={findMaxValue(starwars.filteredResults)}
                                value={minInp}
                                isInvalid={minInpInValid}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                data-testid="maxInpFilter"
                                onChange={handleMaxPrice}
                                onBlur={handleMinMaxPriceOnBlur}
                                type="number"
                                style={{ width: "120px" }}
                                placeholder="Max Cost"
                                min={0}
                                max={findMaxValue(starwars.filteredResults)}
                                value={maxInp}
                                isInvalid={maxInpInValid}
                            />
                        </Col> */}
                        <Col>
                            <RangeSliderBlock
                                type={type}
                                step={1000}
                                min={MIN}
                                max={MAX}
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
