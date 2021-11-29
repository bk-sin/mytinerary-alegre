import "./Navigation.css"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"

import {FaRegUserCircle} from "react-icons/fa"

export default function Navigations() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <span className="yellow">My</span>
              <span className="white">Tinerary</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="barraNav justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link>
                <Link to="/">
                  <span className="white-link active shadowfilter">Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cities">
                  <span className="white-link shadowfilter">Cities</span>
                </Link>
              </Nav.Link>
              <NavDropdown
                className="white-link "
                title={<FaRegUserCircle className="shadowfilter" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/">
                    <span className="white-link ">Sign Up</span>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/">
                    <span className="white-link">Sign In</span>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
