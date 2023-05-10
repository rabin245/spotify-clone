import { Container, Nav, NavItem, Navbar } from "reactstrap";
import { Button } from "../Button";

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
              <Button type="normal">Sign up</Button>
            </NavItem>
            <NavItem className="">
              <Button type="nobg">Log in</Button>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
