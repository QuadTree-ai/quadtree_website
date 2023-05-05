import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logos/QuadTree_svg.svg";
import LoginModal from "./modals/LoginModal";

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <div className="flex items-center">
          <Navbar.Brand href="#">
            <Logo
              width="65"
              height="65"
              className="rounded-square inline-block align-top"
            />
          </Navbar.Brand>
          <span
            className="text-white ml-2 font-sans"
            style={{
              fontFamily: "Glamour Girls, sans-serif",
              fontSize: "1.75rem",
              filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.6))",
            }}
          >
            QuadTree.ai
          </span>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Button
              className="text-white bg-gradient-to-r from-gray-800 to-gray-700 py-1 px-3 rounded-lg"
              onClick={handleShowLoginModal}
            >
              Log in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
    </Navbar>
  );
};

export default NavBar;
