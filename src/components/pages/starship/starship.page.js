import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import stepSvgUrl from "../../../assets/background.svg";
import StarshipPattern from "../../patterns/starship/starship.pattern";
import { retrieveStarship } from "../../../redux/actions";
import { retrieveStarWarsStarship } from "../../../redux/services";

const Wrapper = styled.div`
    background-image: ${() => `url(${stepSvgUrl})`};
    background-repeat: repeat;
    min-height: 100vh;
`;

const StarshipPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveStarship(1));
    }, []);

    return (
        <Wrapper>
            <StarshipPattern data-testid="starshipPage" />
        </Wrapper>
    );
};

export default StarshipPage;
