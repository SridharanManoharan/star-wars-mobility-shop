import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addMaxPrice,
    addMinPrice,
    retrieveVehicle,
    retrieveStarship,
    updateFilteredResults,
} from "../../../redux/actions";

const RangeSliderBlock = ({ step, min, max, type }) => {
    const { minPrice, maxPrice, pageNumber, filteredResults } = useSelector(
        (state) => state.starwars
    );
    const dispatch = useDispatch();
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const range = useRef(null);

    useEffect(() => {
        setMinVal(minPrice);
        setMaxVal(maxPrice);
    }, [minPrice, maxPrice]);
    useEffect(() => setLeftValue(), [minVal]);
    useEffect(() => setRightValue(), [maxVal]);

    // Set width of the range to decrease from the left side
    const setLeftValue = () => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    };

    const handleRetrieve = () => {
        if (type === "vehicle") {
            dispatch(retrieveVehicle(pageNumber));
        } else {
            dispatch(retrieveStarship(pageNumber));
        }
    };

    const handleOnMouseAndKeyUp = () => {
        dispatch(addMinPrice(minVal));
        dispatch(addMaxPrice(maxVal));
        handleRetrieve();
        dispatch(updateFilteredResults(filteredResults));
    };

    const handleMinOnChange = (event) => {
        setMinVal(Math.min(Number(event.target.value), maxVal - step));
    };

    const handleMaxOnChange = (event) => {
        setMaxVal(Math.max(Number(event.target.value), minVal + step));
    };
    // Set width of the range to decrease from the right side
    const setRightValue = () => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    };

    // Convert to percentage
    const getPercent = (value) =>
        Math.round(((value - min) / (max - min)) * 100);

    return (
        <div className="container">
            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                step={step}
                onMouseUp={handleOnMouseAndKeyUp}
                onKeyUp={handleOnMouseAndKeyUp}
                onBlur={handleOnMouseAndKeyUp}
                onChange={handleMinOnChange}
                className="thumb thumb--left"
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                step={step}
                onMouseUp={handleOnMouseAndKeyUp}
                onKeyUp={handleOnMouseAndKeyUp}
                onBlur={handleOnMouseAndKeyUp}
                onChange={handleMaxOnChange}
                className="thumb thumb--right"
            />
        </div>
    );
};

export default RangeSliderBlock;
