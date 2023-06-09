import { Outlet } from "react-router-dom";
import { Button, Col, Container, Nav, NavItem, Navbar, Row } from "reactstrap";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { FaFacebook, FaSpotify } from "react-icons/fa";
import { BsPlusSquareFill, BsGlobe, BsFacebook } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

function Header() {
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
              <Button className="nav--button rounded-5 bg-black text-white fw-semibold fs-6 py-2 px-4">
                Sign up
              </Button>
            </NavItem>
            <NavItem className="">
              <Button className="nav--button rounded-5 border border-white bg-white text-black fw-semibold fs-6 py-2 px-4">
                Log in
              </Button>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

function Sidebar() {
  return (
    <>
      <div className="vh-100 bg-black text-center ps-3">
        <Container className="d-flex flex-column p-0">
          <Container className="p-0 d-flex flex-column justify-content-between vh-100 ">
            <div>
              <div className="ps-2 pt-2 d-flex align-items-center mb-4 mt-3">
                <FaSpotify size={40} />
                <span className="ms-2 fw-bold fs-3">Spotify</span>
              </div>
              <div>
                <Container className="d-flex flex-column">
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <AiOutlineHome size={24} className="me-3" />
                    Home
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <AiOutlineSearch size={24} className="me-3" />
                    Search
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <BiLibrary size={24} className="me-3" />
                    Library
                  </div>
                </Container>
                <Container className="d-flex flex-column mt-3 mb-auto">
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <BsPlusSquareFill size={24} className="me-3" />
                    Create Playlist
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3">
                    <FcLike size={24} className="me-3" />
                    Liked Songs
                  </div>
                </Container>
              </div>
            </div>

            <Container className="">
              <div className="fs-6 text-gray d-flex flex-column ">
                <div className="text-start mb-3">
                  <span className="fs-6 fw-light me-2">Legal </span>
                  <span className="fs-6 fw-light me-2">Privacy Center </span>
                  <br />
                  <span className="fs-6 fw-light me-2">Privacy Policy </span>
                  <span className="fs-6 fw-light me-2">Privacy Policy </span>
                  <br />
                  <span className="fs-6 fw-light me-2">Cookies </span>
                  <span className="fs-6 fw-light me-2">About </span>
                  <br />
                  <span className="fs-6 fw-light">Ads </span>
                </div>
                <Button className="rounded-5 border border-white bg-black text-white mb-4">
                  <BsGlobe size={24} className="me-1" />
                  <span className="fs-6 fw-semibold">English</span>
                </Button>
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    </>
  );
}
function Footer() {
  return (
    <>
      <Container fluid className="px-3 py-5">
        <Row className="m-0 p-0">
          <Col md="3" className="p-0 d-flex flex-column">
            <h4 className="m-0 mb-2">Company</h4>
            <a href="#" className="text-decoration-none text-white">
              About
            </a>
            <a href="#" className="text-decoration-none text-white">
              Jobs
            </a>
            <a href="#" className="text-decoration-none text-white">
              For the Record
            </a>
          </Col>
          <Col md="3" className="p-0 d-flex flex-column">
            <h4 className="m-0 mb-2">Communities</h4>
            <a href="#" className="text-decoration-none text-white">
              For Artists
            </a>
            <a href="#" className="text-decoration-none text-white">
              Developers
            </a>
            <a href="#" className="text-decoration-none text-white">
              Advertising
            </a>
            <a href="#" className="text-decoration-none text-white">
              Investors
            </a>
            <a href="#" className="text-decoration-none text-white">
              Vendors
            </a>
            <a href="#" className="text-decoration-none text-white">
              Spotify for Work
            </a>
          </Col>
          <Col md="3" className="p-0 d-flex flex-column">
            <h4 className="m-0 mb-2">Useful links</h4>
            <a href="#" className="text-decoration-none text-white">
              Support
            </a>
            <a href="#" className="text-decoration-none text-white">
              Free Mobile App
            </a>
          </Col>
          <Col md="3" className="p-0">
            <Container className="d-flex">
              <Button
                className="shadow rounded-circle border-0 d-flex justify-content-center align-items-center p-2 me-2"
                style={{
                  backgroundColor: "#292828",
                  height: "40px",
                  width: "40px",
                }}
              >
                <AiOutlineInstagram size={20} className="" />
              </Button>
              <Button
                className="shadow rounded-circle border-0 d-flex justify-content-center align-items-center p-2 me-2"
                style={{
                  backgroundColor: "#292828",
                  height: "40px",
                  width: "40px",
                }}
              >
                <AiOutlineTwitter size={20} className="" />
              </Button>
              <Button
                className="shadow rounded-circle border-0 d-flex justify-content-center align-items-center p-2 me-2"
                style={{
                  backgroundColor: "#292828",
                  height: "40px",
                  width: "40px",
                }}
              >
                <FaFacebook size={20} className="" />
              </Button>
            </Container>
          </Col>
        </Row>
        <hr />
        <Row className="m-0 p-0">
          <Col md="auto" className="p-0">
            © 2023 Spotify AB
          </Col>
        </Row>
      </Container>
    </>
  );
}

function App() {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col md={3} className="position-fixed p-0">
            <Sidebar />
          </Col>
          <Col md={9} className="p-0 offset-3">
            <Header />
            <Outlet />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
