import React from "react";
import styled from "styled-components";
import HeaderImage from "../../../assets/star-wars.svg";

const HeaderWrapper = styled.div`
    display: block;
`;

const ImageWrapper = styled.img`
    display: inherit;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    height: 12rem;
`;

const HeaderBlock = () => {
    return (
        <HeaderWrapper>
            <ImageWrapper
                className="header-image"
                src={HeaderImage}
                alt="The Star Wars Image"
                data-testid="headerImage"
            />
        </HeaderWrapper>
    );
};

export default HeaderBlock;
