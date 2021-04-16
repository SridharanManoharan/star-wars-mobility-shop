import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Card, ListGroup } from "react-bootstrap";
import Favorite from "../favorite/favorite-block";
import VehicleImage from "../../../assets/vehicle.jpeg";
import StarShipImage from "../../../assets/starship.jpeg";
import { updateDetails } from "../../../redux/actions";
import { retrieveDetailsService } from "../../../redux/services";

const CardWrapper = styled.div`
    width: 20rem;
    margin: 2rem 0rem;
    transition: transform 0.2s;
    &:hover {
        cursor: pointer;
        box-shadow: 5px 10px 20px 1px rgb(255 255 255 / 30%) !important;
        transform: scale(1.1);
    }
    &:hover .overlay {
        opacity: 1;
    }
`;

const Overlay = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    transition: 0.3s ease;
    opacity: 0;
    text-align: center;
    padding: 10px;
    color: #ffffff;
`;

const CardBlock = ({ cardDetail, type }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [favorite, setFavorite] = useState(false);
    const cardName = cardDetail.name.replace(" ", "");

    useEffect(() => {
        const fav = localStorage.getItem("favorite" + cardName) ? true : false;
        setFavorite(fav);
    }, []);

    const handleFavorite = () => {
        if (!favorite === false) {
            localStorage.removeItem("favorite" + cardName);
        } else if (!favorite === true) {
            localStorage.setItem("favorite" + cardName, true);
        }
        setFavorite(!favorite);
    };

    const handleOnClick = async () => {
        const response = await retrieveDetailsService(cardDetail.url);
        dispatch(updateDetails({ ...response.data, type: type }));
        history.push("/details");
    };

    return (
        <CardWrapper className="card text-center justify-content-center">
            <div className="overflow">
                <Overlay
                    data-testid={"favorite" + cardName}
                    onClick={handleFavorite}
                    className="overlay"
                >
                    <Favorite favorite={favorite} />
                </Overlay>
                <img
                    src={type === "vehicle" ? VehicleImage : StarShipImage}
                    alt="Card Image"
                    className="card-image-top img-fluid"
                />
            </div>
            <Card.Body>
                <Card.Title>{cardDetail.name.substring(0, 17)}</Card.Title>
                <Card.Text>Cost: {cardDetail.cost_in_credits}</Card.Text>
                <Card.Text>Crew: {cardDetail.crew}</Card.Text>
                <Card.Text>Passengers: {cardDetail.passengers}</Card.Text>
                <Button onClick={handleOnClick} variant="warning">
                    More Details
                </Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    Created On: {cardDetail.created}
                </small>
            </Card.Footer>
        </CardWrapper>
    );
};

export default CardBlock;
