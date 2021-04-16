import { isEmptyObj, sortByProperty } from "../../../src/utils";

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
});
