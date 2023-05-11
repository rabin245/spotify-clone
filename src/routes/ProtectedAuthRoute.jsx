import { useRecoilValue } from "recoil";
import { loggedInUserAtom } from "../recoilState";
import { Navigate } from "react-router-dom";

const ProtectedAuthRoute = ({ children }) => {
  const loggedInUser = useRecoilValue(loggedInUserAtom);

  if (loggedInUser) return <Navigate to="/" replace={true} />;
  return children;
};

export default ProtectedAuthRoute;
