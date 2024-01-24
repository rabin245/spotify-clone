import { BsSpotify } from "react-icons/bs";
import {
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SocialsAuthButton, SubmitButton } from "../components/Button";
import { FormInput, FormRadio } from "../components/FormInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignUpPage = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
    formError: "",
  });

  const { loading, error, user, signupUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, username } = userInputs;

    await signupUser(email, password, username, setUserInputs);
  };

  console.log(loading, user, error);

  return (
    <>
      <Container>
        <Col className="p-0 m-0 d-flex flex-column justify-content-center align-items-center  ">
          <div className="ps-2 pt-4 d-flex align-items-center mb-4 text-light text-light">
            <BsSpotify size={35} />
            <span className="ms-2 fw-bold fs-3">Spotify</span>
          </div>

          <Row className="p-0 m-0 mt-3 mb-4">
            <p className="p-0 m-0 fw-bold" style={{ fontSize: "1.8rem" }}>
              Sign up for free to start listening
            </p>
          </Row>

          <Col className="mb-3">
            <SocialsAuthButton>
              <FcGoogle size={24} className="me-5" />
              <span>Sign up with Google</span>
            </SocialsAuthButton>
            <SocialsAuthButton>
              <FaFacebook size={24} className="me-5" fill="blue" />
              <span>Sign up with Facebook</span>
            </SocialsAuthButton>
          </Col>

          <div className="d-flex align-items-center">
            <div
              className="w-5 border border-secondary"
              style={{ width: "180px", height: "0px" }}
            ></div>
            <div className="col-1 d-flex justify-content-center">or</div>
            <div
              className="w-5 border border-secondary"
              style={{ width: "180px", height: "0px" }}
            ></div>
          </div>

          <Row className="p-0 m-0 mt-3 mb-4">
            <p className="p-0 m-0 fw-bold" style={{ fontSize: "1.2rem" }}>
              Sign up for free to start listening.
            </p>
          </Row>

          <Container style={{ width: "29rem", maxWidth: "100%" }}>
            <Form>
              <FormInput
                value={userInputs.email}
                onChange={handleChange}
                label={"What's your email?"}
                type={"email"}
                name={"email"}
                placeholder={"Email or username"}
                formFeedback={"Please enter your email address."}
                invalid={userInputs.formError === "email"}
              />

              <FormInput
                value={userInputs.password}
                onChange={handleChange}
                label={"Create a password"}
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                formFeedback={"Password must be at least 6 characters."}
                invalid={userInputs.formError === "password"}
              />

              <FormInput
                value={userInputs.username}
                onChange={handleChange}
                label={"What's should we call you?"}
                name={"username"}
                type={"text"}
                placeholder={"Enter a profile name"}
                formFeedback={"Please enter a username."}
                invalid={userInputs.formError === "username"}
              >
                <FormText>This appears on your profile.</FormText>
              </FormInput>

              <Label className="fw-semibold mt-0">
                What&apos;s your gender?
              </Label>
              <div className="d-flex">
                <FormRadio
                  id={"male"}
                  name={"gender"}
                  label={"Male"}
                  value={"Male"}
                  checked={userInputs.gender === "Male"}
                  onChange={handleChange}
                />

                <FormRadio
                  id={"female"}
                  name={"gender"}
                  label={"Female"}
                  value={"Female"}
                  checked={userInputs.gender === "Female"}
                  onChange={handleChange}
                />

                <FormRadio
                  id={"non-binary"}
                  name={"gender"}
                  label={"Non-binary"}
                  value={"Non-binary"}
                  checked={userInputs.gender === "Non-binary"}
                  onChange={handleChange}
                />

                <FormRadio
                  id={"others"}
                  name={"gender"}
                  label={"Others"}
                  value={"Others"}
                  checked={userInputs.gender === "Others"}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex justify-content-center">
                <SubmitButton
                  handleSubmit={handleSubmit}
                  title={loading ? "Loading..." : "Sign up"}
                />
              </div>
              {error && (
                <div className="text-danger text-center fw-bold mb-2">
                  {error}
                </div>
              )}

              <FormGroup check>
                <Input
                  id="agree-terms"
                  name="terms-n-condidtion"
                  type="checkbox"
                  className="text-white bg-black border-secondary login-social-button"
                />
                <Label check for="other">
                  I agree to the{" "}
                  <span>
                    <a href="#" style={{ color: "#1ed661" }}>
                      Spotify Terms and Conditions of Use
                    </a>
                  </span>{" "}
                  and&nbsp;
                  <span>
                    <a href="#" style={{ color: "#1ed661" }}>
                      Privacy Policy.
                    </a>
                  </span>
                </Label>
              </FormGroup>
            </Form>

            <span className="d-flex justify-content-center text-secondary my-4">
              Have an account?&nbsp;
              <Link
                to="/login"
                replace={true}
                className="text-light fw-semibold text-decoration-none"
              >
                Log in.
              </Link>
            </span>
          </Container>
        </Col>
      </Container>
    </>
  );
};

export default SignUpPage;
