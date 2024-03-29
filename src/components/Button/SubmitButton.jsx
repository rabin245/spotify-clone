import { Button } from "reactstrap";

const SubmitButton = ({ title, handleSubmit }) => {
  return (
    <Button
      className="authSubmitButton rounded-5 mt-5 w-100 mb-3 text-black py-2"
      onClick={handleSubmit}
    >
      <span className="fw-semibold">{title}</span>
    </Button>
  );
};

export default SubmitButton;
