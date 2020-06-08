import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Header.css";

class Header extends React.Component {

    scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="center">
                    <Nav>
                    <Nav.Link onClick={() => this.scrollTo('home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => this.scrollTo("pageOne")}>Page One</Nav.Link>
                    <Nav.Link onClick={() => this.scrollTo("pageTwo")}>Page Two</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;