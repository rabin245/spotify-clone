import { Container, Input, Nav, NavItem, Navbar } from "reactstrap";
import { Button } from "../Button";
import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const match = useMatch("/search/*");
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length > 2) {
      navigate(`/search/${e.target.value}`, { replace: true });
    }
  };

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
          className={`p-0 d-flex align-items-center 
                    ${
                      match ? "justify-content-between" : "justify-content-end"
                    } `}
        >
          {match && (
            <Input
              autoFocus={true}
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={handleSearch}
              placeholder="What do you want to listen to?"
              className="header--search ms-2 rounded-5 shadow-none bg-dark text-white border-0 w-50"
            />
          )}

          <Nav className="">
            <NavItem className="me-2">
              <Link to="/signup" className="header--link">
                <Button type="normal">Sign up</Button>
              </Link>
            </NavItem>
            <NavItem className="">
              <Link to="/login" className="header--link">
                <Button type="nobg">Log in</Button>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
