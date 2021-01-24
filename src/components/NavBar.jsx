import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { links } from "../data/links"

const NavBar = (props) => {
    const linkItems = links.map((linkItem, index) => (
        <Link className={"nav-link"} key={index} to={linkItem.link}>{linkItem.title}</Link>
    ))
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className={"navbar-brand"}>   React-Bootstrap</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {linkItems}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
export default NavBar;