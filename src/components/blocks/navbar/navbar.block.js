import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
    Navbar,
    Nav,
    Form,
    InputGroup,
    FormControl,
    Button,
} from "react-bootstrap";
import {
    searchStarWarsStarship,
    searchStarWarsVehicle,
} from "../../../redux/services";
import { searchStarship, searchVehicle } from "../../../redux/actions";

const NavbarBlock = ({ type, searchBar }) => {
    const dispatch = useDispatch();
    const searchRef = useRef("");

    const handleSearch = async () => {
        const { value } = searchRef.current;
        if (type === "vehicle") {
            dispatch(searchVehicle(value));
        } else {
            dispatch(searchStarship(value));
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand data-testid="navBarHome" href="#/">
                Mobility Shop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link data-testid="navBarVehicle" href="#/">
                        Vehicles
                    </Nav.Link>
                    <Nav.Link data-testid="navBarStarship" href="#/starship">
                        Starships
                    </Nav.Link>
                </Nav>
                {searchBar && (
                    <Form inline>
                        <FormControl
                            ref={searchRef}
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            data-testid="navBarSearchInp"
                        />
                        <Button
                            onClick={handleSearch}
                            variant="outline-success"
                            data-testid="navBarSearchBtn"
                        >
                            Search
                        </Button>
                    </Form>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarBlock;
