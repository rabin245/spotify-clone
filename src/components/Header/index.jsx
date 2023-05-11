import { Container, Input, Nav, NavItem, Navbar } from "reactstrap";
import { AvatarButton, Button } from "../Button";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useState } from "react";

import { loggedInUserAtom } from "../../recoilState";
import { useRecoilValue } from "recoil";

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

  const user = useRecoilValue(loggedInUserAtom);
  console.log(user);

  const navItems = user ? (
    <Nav className="d-flex align-items-center">
      <NavItem className="me-2">
        <a
          href="https://open.spotify.com/download"
          target="__blank"
          className="nav--button-link"
        >
          <Button type="normal">Install App</Button>
        </a>
      </NavItem>
      <NavItem>
        <AvatarButton>
          <img
            src={user.avatar ?? "https://picsum.photos/200"}
            alt="avatar"
            className="rounded-circle"
            width="33"
            height="33"
          />
        </AvatarButton>
      </NavItem>
    </Nav>
  ) : (
    <Nav>
      <NavItem className="me-2">
        <Link to="/signup" className="nav--button-link">
          <Button type="normal">Sign up</Button>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/login" className="nav--button-link">
          <Button type="nobg">Log in</Button>
        </Link>
      </NavItem>
    </Nav>
  );

  return (
    <>
      <Navbar
        dark={true}
        sticky="top"
        className="py-3"
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

          {navItems}
        </Container>
      </Navbar>
    </>
  );
}
