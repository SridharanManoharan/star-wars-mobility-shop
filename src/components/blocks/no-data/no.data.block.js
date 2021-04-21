import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import styled from "styled-components";
import {
    removeSortBy,
    addMinPrice,
    addMaxPrice,
    retrieveVehicle,
    retrieveStarship,
} from "../../../redux/actions";
import VehicleImage from "../../../assets/vehicle.jpeg";

const Wrapper = styled.div`
    width: 100%;
    .alert-box {
        margin-top: 30px;
    }
    h1 {
        color: green;
    }
    p {
        margin-bottom: 20px;
    }
`;

const NoDataBlock = ({ type }) => {
    const { isLoading, pageNumber } = useSelector((state) => state.starwars);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRetrieve = () => {
        if (type === "vehicle") {
            dispatch(retrieveVehicle(1));
            history.push("/vehicle");
        } else {
            dispatch(retrieveStarship(1));
            history.push("/starship");
        }
    };

    const handleOnClick = () => {
        dispatch(removeSortBy());
        dispatch(addMinPrice(0));
        dispatch(addMaxPrice(10000000000));
        handleRetrieve();
    };

    return (
        <Wrapper data-testid="noDataBlock">
            <div className="app">
                <div className="details">
                    <div className="box">
                        <div className="row">
                            <h1>No Data found</h1>
                            <p>
                                Please search again with correct string or use
                                the below link to navigate back to home page to
                                see all data
                            </p>
                            <Button
                                data-testid="backToHomeBtn"
                                onClick={handleOnClick}
                                variant={"warning"}
                            >
                                Back to home
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default NoDataBlock;
