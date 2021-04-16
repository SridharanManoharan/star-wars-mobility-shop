import React, { Component } from "react";
import styled from "styled-components";
import CardBlock from "../../blocks/card/card.block";
import FilterBlock from "../../blocks/filter/filter.block";
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

const CardsPattern = ({ data, type }) => {
    return data && data.length !== 0 ? (
        <Container className="container-xl">
            <FilterBlock type={type} />
            <Row>
                {data.map((elem, index) => {
                    return (
                        <Col key={type + index}>
                            <CardBlock cardDetail={elem} type={type} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    ) : (
        <LoaderWrapper className="align-middle">
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
