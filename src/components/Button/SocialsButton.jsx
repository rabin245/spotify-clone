import { Button } from "reactstrap";

const SocialsButton = ({ children }) => {
  return (
    <Button className="footer--socialButton shadow rounded-circle border-0 d-flex justify-content-center align-items-center p-2 me-3">
      {children}
    </Button>
  );
};

export default SocialsButton;
