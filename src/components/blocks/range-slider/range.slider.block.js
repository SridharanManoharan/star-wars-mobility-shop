import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addMaxPrice,
    addMinPrice,
    retrieveVehicle,
    retrieveStarship,
    removeMinPrice,
    removeMaxPrice,
    updateFilteredResults,
} from "../../../redux/actions";
import { findMaxValue } from "../../../utils";

const RangeSliderBlock = ({ step, min, max }) => {
    const starwars = useSelector((state) => state.starwars);
    const dispatch = useDispatch();

    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(0);
    const range = useRef(null);

    useEffect(() => {
        setMaxVal(max);
    }, [max]);
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
                onChange={(event) =>
                    setMinVal(
                        Math.min(Number(event.target.value), maxVal - step)
                    )
                }
                className="thumb thumb--left"
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                step={step}
                onChange={(event) =>
                    setMaxVal(
                        Math.max(Number(event.target.value), minVal + step)
                    )
                }
                className="thumb thumb--right"
            />
        </div>
    );
};

export default RangeSliderBlock;
