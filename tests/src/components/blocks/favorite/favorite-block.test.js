import React from "react";
import { render } from "@testing-library/react";
import Favorite from "../../../../../src/components/blocks/favorite/favorite-block";

describe("Test FavoriteBlock", () => {
    it("Should render Favorite in selected mode", () => {
        const { getByTestId } = render(<Favorite favorite={true} />);
        expect(getByTestId("favoriteTrue")).toBeTruthy();
    });

    it("Should render Favorite in unselected mode", () => {
        const { getByTestId } = render(<Favorite favorite={false} />);
        expect(getByTestId("favoriteFalse")).toBeTruthy();
    });
});
