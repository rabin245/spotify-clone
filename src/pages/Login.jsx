import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { SocialsAuthButton } from "../components/Button";
import { BsSpotify } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <Container fluid className="p-0 vh-100">
        <Navbar color="black">
          <NavbarBrand href="/">
            <div className="ps-2 pt-4 d-flex align-items-center mb-4 text-light text-light">
              <BsSpotify size={35} />
              <span className="ms-2 fw-bold fs-3">Spotify</span>
            </div>
          </NavbarBrand>
        </Navbar>

        <Container
          color="black"
          className="mt-4"
          style={{ width: "46rem", height: "18rem", maxWidth: "100%" }}
        >
          <Col className="p-0 m-0 d-flex flex-column justify-content-center align-items-center bg-black">
            <Row className="p-0 m-0 mt-5 mb-5">
              <p className="p-0 m-0 fw-bold" style={{ fontSize: "2.8rem" }}>
                Log in to Spotify
              </p>
            </Row>

            <Col className="mb-3">
              <Row>
                <SocialsAuthButton>
                  <FcGoogle size={24} className="me-5" />
                  <span>Continue with Google</span>
                </SocialsAuthButton>
              </Row>
              <Row>
                <SocialsAuthButton>
                  <FaFacebook size={24} className="me-5" fill="blue" />
                  <span>Continue with Facebook</span>
                </SocialsAuthButton>
              </Row>
              <Row>
                <SocialsAuthButton>
                  <FaApple size={24} className="me-5" />
                  <span>Continue wiht Apple</span>
                </SocialsAuthButton>
              </Row>
            </Col>

            <hr className="mt-3 border border-secondary col-8" />

            <Container style={{ width: "21rem", maxWidth: "100%" }}>
              <Form>
                <FormGroup className="mt-3">
                  <Label className="fw-semibold">Email or username</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email or username"
                    className="authFormInput text-white bg-black border-secondary shadow"
                  />
                  <FormFeedback>
                    Please enter your Spotify username or email address.
                  </FormFeedback>

                  <Label className="fw-semibold mt-3">Password</Label>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="authFormInput text-white bg-black border-secondary"
                  />
                  <FormFeedback>Please enter your password.</FormFeedback>

                  <FormGroup switch className="mt-3">
                    <Input
                      type="switch"
                      role="switch"
                      checked={rememberMe}
                      onClick={() => {
                        setRememberMe((prev) => !prev);
                      }}
                      className="switchButton bg-success shadow-none"
                    />
                    <Label check>Remember me</Label>
                  </FormGroup>
                  <Button className="authSubmitButton rounded-5 mt-5 w-100 mb-3 text-black py-2">
                    <span className="fw-semibold">Log In</span>
                  </Button>
                  <span className="d-flex justify-content-center">
                    <a href="" className="text-light">
                      Forgot your password?
                    </a>
                  </span>
                </FormGroup>
              </Form>
            </Container>

            <hr className="mt-3 border border-secondary col-8" />

            <span className="d-flex justify-content-center text-secondary mb-5">
              Don&apos;t have an account?&nbsp;
              <a
                href=""
                className="text-light fw-semibold text-decoration-none"
              >
                Sign up for Spotify
              </a>
            </span>
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default Login;
