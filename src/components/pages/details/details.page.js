import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import stepSvgUrl from "../../../assets/background.svg";
import DetailsPattern from "../../patterns/details/details.pattern";

const Wrapper = styled.div`
    background-image: ${() => `url(${stepSvgUrl})`};
    background-repeat: repeat;
    min-height: 100vh;
`;

const DetailsPage = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <DetailsPattern />
        </Wrapper>
    );
};

export default DetailsPage;
