import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import stepSvgUrl from "../../../assets/background.svg";
import VehiclePattern from "../../patterns/vehicle/vehicle.pattern";
import { retrieveVehicle } from "../../../redux/actions";

const Wrapper = styled.div`
    background-image: ${() => `url(${stepSvgUrl})`};
    background-repeat: repeat;
    min-height: 100vh;
`;

const VehiclePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveVehicle(1));
    }, []);

    return (
        <Wrapper data-testid="vehiclePage">
            <VehiclePattern />
        </Wrapper>
    );
};

export default VehiclePage;
