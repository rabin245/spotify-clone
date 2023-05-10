import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { SocialsAuthButton, SubmitButton } from "../components/Button";
import { BsSpotify } from "react-icons/bs";
import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  console.log(userInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userInputs;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode:", errorCode);
      console.log("errorMessage:", errorMessage);
      console.log(error);
    }
    console.log("submitted");
  };

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
                <FormInput
                  value={userInputs.email}
                  onChange={handleChange}
                  label={"Email or username"}
                  name={"email"}
                  type={"email"}
                  placeholder={"Email or username"}
                  formFeedback={
                    "Please enter your Spotify username or email address."
                  }
                />

                <FormInput
                  value={userInputs.password}
                  onChange={handleChange}
                  label={"Password"}
                  name={"password"}
                  type={"password"}
                  placeholder={"Password"}
                  formFeedback={"Please enter your password."}
                />

                <FormGroup switch className="mt-3">
                  <Input
                    type="switch"
                    role="switch"
                    checked={rememberMe}
                    // onClick={() => {
                    //   setRememberMe((prev) => !prev);
                    // }}
                    readOnly
                    className="switchButton bg-success shadow-none"
                  />
                  <Label check>Remember me</Label>
                </FormGroup>

                <FormGroup>
                  <SubmitButton title={"Log in"} handleSubmit={handleSubmit} />
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
              <Link
                to="/signup"
                replace={true}
                className="text-light fw-semibold text-decoration-none"
              >
                Sign up for Spotify
              </Link>
            </span>
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default Login;
