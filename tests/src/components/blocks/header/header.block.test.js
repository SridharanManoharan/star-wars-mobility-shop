import React from "react";
import { render } from "@testing-library/react";
import HeaderBlock from "../../../../../src/components/blocks/header/header.block";

describe("Test HeaderBlock", () => {
    it("Should render HeaderBlock", () => {
        const { getByTestId } = render(<HeaderBlock />);
        expect(getByTestId("headerImage")).toBeTruthy();
    });
});
