import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert, Button } from "react-bootstrap";
import styled from "styled-components";
import VehicleImage from "../../../assets/vehicle.jpeg";
import StarShipImage from "../../../assets/starship.jpeg";

const Wrapper = styled.div`
    .alert-box {
        margin-top: 30px;
    }
`;

const DetailsWrapper = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #fbf7c7;
    margin-top: 4rem;
    padding: 1rem;
    border-radius: 24px;
    margin-left: auto;
    margin-right: auto;
`;

const NoDataBlock = () => {
    const starwars = useSelector((state) => state.starwars);

    return (
        <Wrapper data-testid="noDataBlock">
            <div className="app">
                <div className="details">
                    <div className="big-img">
                        <img
                            src={
                                details.type == "vehicle"
                                    ? VehicleImage
                                    : StarShipImage
                            }
                            alt="Details Image"
                        />
                    </div>
                    <div className="box">
                        <div className="row">
                            <h2>{details.name}</h2>
                        </div>
                        <p>Cost: {details.cost_in_credits}</p>
                        <p>Crew: {details.crew}</p>
                        <p>Passengers: {details.passengers}</p>
                        <p>Cargo Capacity: {details.cargo_capacity}</p>
                        <p>Consumables: {details.consumables}</p>
                        <p>Class: {details.vehicle_class}</p>
                        <p>Manufacturer: {details.manufacturer}</p>
                        <Button
                            onClick={handleFavorite}
                            variant={favorite == true ? "danger" : "warning"}
                            data-testid={
                                "favorite" + details.name.replace(" ", "")
                            }
                        >
                            {favorite == true
                                ? "Remove from favorite"
                                : "Add to favorite"}
                        </Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default NoDataBlock;
