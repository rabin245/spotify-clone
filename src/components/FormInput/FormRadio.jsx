import { FormGroup, Input, Label } from "reactstrap";

const FormRadio = ({ id, name, label }) => {
  return (
    <FormGroup check className="me-4">
      <Input
        id={id}
        name={name}
        type="radio"
        className="text-white bg-black border-secondary login-social-button"
      />
      <Label check for={name}>
        {label}
      </Label>
    </FormGroup>
  );
};

export default FormRadio;
