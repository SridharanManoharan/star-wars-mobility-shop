import {
    compareValues,
    isEmptyObj,
    sortByProperty,
    maxRange,
    minRange,
} from "../../../src/utils";

describe("Tests for isEmptyObj Utils", () => {
    test("should return true for empty object", () => {
        expect(isEmptyObj({})).toBeTruthy();
    });
    test("should return false for non empty object", () => {
        expect(isEmptyObj({ data: "data" })).toBeFalsy();
    });
});

describe("Tests for sortByProperty Utils", () => {
    test("should return sorted array", () => {
        const data = [{ name: "Dan" }, { name: "Adam" }];
        expect(sortByProperty(data, "name")).toEqual([
            { name: "Adam" },
            { name: "Dan" },
        ]);
    });
    test("should return sorted array without calling compareValues", () => {
        const data = [{ price: 10 }, { price: 2 }, { price: "NaN" }];
        expect(sortByProperty(data, "price")).toEqual([
            { price: 2 },
            { price: 10 },
            { price: "NaN" },
        ]);
    });
});

describe("Tests for maxRange Utils", () => {
    test("should return filtered array for field cost", () => {
        const data = [
            { cost_in_credits: 10 },
            { cost_in_credits: 20 },
            { cost_in_credits: 30 },
            { cost_in_credits: 40 },
        ];
        expect(maxRange(data, "cost", 20)).toEqual([
            { cost_in_credits: 10 },
            { cost_in_credits: 20 },
        ]);
    });
    test("should return filtered array for other field", () => {
        const data = [
            { price: 10 },
            { price: 20 },
            { price: 30 },
            { price: 40 },
        ];
        expect(maxRange(data, "price", 20)).toEqual([
            { price: 10 },
            { price: 20 },
        ]);
    });
});

describe("Tests for minRange Utils", () => {
    test("should return filtered array for field cost", () => {
        const data = [
            { cost_in_credits: 10 },
            { cost_in_credits: 20 },
            { cost_in_credits: 30 },
            { cost_in_credits: 40 },
        ];
        expect(minRange(data, "cost", 20)).toEqual([
            { cost_in_credits: 20 },
            { cost_in_credits: 30 },
            { cost_in_credits: 40 },
        ]);
    });
    test("should return filtered array for other field", () => {
        const data = [
            { price: 10 },
            { price: 20 },
            { price: 30 },
            { price: 40 },
        ];
        expect(minRange(data, "price", 30)).toEqual([
            { price: 30 },
            { price: 40 },
        ]);
    });
});
