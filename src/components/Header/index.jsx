import { Container, Nav, NavItem, Navbar } from "reactstrap";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar
        dark={true}
        sticky="top"
        className=""
        style={{ backgroundColor: "#070707" }}
      >
        <Container
          fluid
          className="p-0 d-flex align-items-center justify-content-end"
        >
          <Nav className="">
            <NavItem className="me-2">
              <Link to="/signup">
                <Button type="normal">Sign up</Button>
              </Link>
            </NavItem>
            <NavItem className="">
              <Link to="/login">
                <Button type="nobg">Log in</Button>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
