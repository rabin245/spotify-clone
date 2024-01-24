import {
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Nav,
  NavItem,
  Navbar,
} from "reactstrap";
import { AvatarButton, Button } from "../Button";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useState } from "react";

import { loggedInUserAtom } from "../../recoilState";
import { useRecoilValue } from "recoil";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const match = useMatch("/search/*");

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);

    navigate(`/search/${e.target.value}`, { replace: true });
  };

  const user = useRecoilValue(loggedInUserAtom);

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

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  const headerStyle = !match && scrollY < 400 ? "transparent-header" : "";

  return (
    <>
      <Navbar dark={true} sticky="top" className={`header py-3 ${headerStyle}`}>
        <Container
          fluid
          className={`p-0 d-flex align-items-center 
                    ${
                      match ? "justify-content-between" : "justify-content-end"
                    } `}
        >
          {match && (
            <InputGroup className="header--search ms-2 rounded-5 bg-dark w-50">
              <InputGroupText className="bg-transparent text-white border-0 p-0 ps-3">
                <FaSearch size={18} />
              </InputGroupText>
              <Input
                autoFocus={true}
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={handleSearch}
                placeholder="What do you want to listen to?"
                className="rounded-5 shadow-none bg-transparent text-white border-0"
              />
            </InputGroup>
          )}

          {navItems}
        </Container>
      </Navbar>
    </>
  );
}
