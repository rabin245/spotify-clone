import { useRecoilValue } from "recoil";
import { loggedInUserAtom } from "../recoilState";
import { Navigate } from "react-router-dom";

const NeedAuthRoute = ({ children }) => {
  const user = useRecoilValue(loggedInUserAtom);

  if (user) return children;

  return <Navigate to="/login" replace={true} />;
};

export default NeedAuthRoute;
