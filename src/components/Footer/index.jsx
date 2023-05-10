import { Col, Container, Row } from "reactstrap";
import { SocialsButton } from "../Button";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Container fluid className="px-4 py-5">
        <Row className="m-0 p-0">
          <Col xs={12} md={4} xl="2" className="p-0 d-flex flex-column mb-5">
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
          <Col xs={12} md={4} xl="2" className="p-0 d-flex flex-column mb-5">
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
          <Col xs={12} md={4} xl="2" className="p-0 d-flex flex-column mb-5">
            <h4 className="m-0 mb-2">Useful links</h4>
            <a href="#" className="text-decoration-none text-white">
              Support
            </a>
            <a href="#" className="text-decoration-none text-white">
              Free Mobile App
            </a>
          </Col>
          <Col xs={12} md={4} xl="2" className="p-0 offset-xl-4 mb-5">
            <Container
              fluid
              className="p-0 d-flex gap-3 justify-content-xl-end"
            >
              <SocialsButton link={"#"}>
                <AiOutlineInstagram size={20} className="" />
              </SocialsButton>
              <SocialsButton link={"#"}>
                <AiOutlineTwitter size={20} className="" />
              </SocialsButton>
              <SocialsButton link={"#"}>
                <FaFacebook size={20} className="" />
              </SocialsButton>
            </Container>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row className="m-0 p-0">
          <Col md="auto" className="p-0">
            © 2023 Spotify AB
          </Col>
        </Row>
      </Container>
    </>
  );
}
