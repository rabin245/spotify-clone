import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  // eslint-disable-next-line no-unused-vars
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggedInUserAtom } from "../recoilState";
import saveToSession from "../utils/saveToSession";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useRecoilState(loggedInUserAtom);

  const navigate = useNavigate();

  const validateForm = (email, password, username, setUserInputs) => {
    if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/.test(email)) {
      setUserInputs((prev) => ({ ...prev, formError: "email" }));
      return false;
    }
    if (password.length < 6) {
      setUserInputs((prev) => ({ ...prev, formError: "password" }));
      return false;
    }
    if (username && username.length < 3) {
      setUserInputs((prev) => ({ ...prev, formError: "username" }));
      return false;
    }

    setUserInputs((prev) => ({ ...prev, formError: "" }));

    return true;
  };

  const signupUser = async (email, password, username, setUserInputs) => {
    if (!validateForm(email, password, username, setUserInputs)) return;

    setLoading(true);
    setError(null);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(response.user);

      // not working for some reason

      // const authUser = auth.currentUser;
      // await updateProfile(authUser, {
      //   displayName: username,
      // });

      console.log("user", response.user);

      const user = {
        uid: response.user.uid,
        email: response.user.email,
        // displayName: username,
      };

      saveToSession("loggedInUser", user);

      navigate(0, { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode:", errorCode);
      console.log("errorMessage:", errorMessage);
      setError(errorCode);
    }
    setLoading(false);
  };

  const loginUser = async (email, password, setUserInputs) => {
    if (!validateForm(email, password, null, setUserInputs)) return;

    setLoading(true);
    setError(null);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user);

      console.log("user", response.user);

      const user = {
        uid: response.user.uid,
        email: response.user.email,
        // displayName: username,
      };

      saveToSession("loggedInUser", user);

      navigate(0, { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode:", errorCode);
      console.log("errorMessage:", errorMessage);
      setError(errorCode);
    }
    setLoading(false);
  };

  const logOut = async () => {
    console.log("logging out");
    await auth.signOut();
    setUser(null);
    saveToSession("loggedInUser", null);
    navigate(0);
    navigate("/", { replace: true });
  };

  return {
    loading,
    error,
    user,
    signupUser,
    loginUser,
    logOut,
  };
};

export default useAuth;
