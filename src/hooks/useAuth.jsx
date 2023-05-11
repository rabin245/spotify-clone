import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

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

      await updateProfile(user, {
        displayName: username,
      });

      console.log("response", user);

      navigate("/", { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode:", errorCode);
      console.log("errorMessage:", errorMessage);
      setError(errorCode);
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    user,
    signupUser,
  };
};

export default useAuth;
